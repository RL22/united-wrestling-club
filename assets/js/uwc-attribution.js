/**
 * UWC First-Party Attribution, Cross-Domain Stitcher & TCPA Opt-Out Audit Engine v1.0
 * Property: unitedwrestlingclub.com | GA4: 562010875 | Formspree: xyyavaaj | WrestlingIQ: Team 513
 */
(function () {
  "use strict";

  const STORAGE_KEY = "uwc_attr_v1";
  const COOKIE_NAME = "_uwc_lid";
  const DISCLOSURE_VERSION = "v1.0-2026-11";
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xyyavaaj";
  const MAX_TOUCHES = 15;

  // Domains excluded from ever counting as an external acquisition referrer
  const EXCLUDED_REFERRERS = [
    "unitedwrestlingclub.com",
    "wrestlingiq.com",
    "formspree.io",
    "stripe.com",
    "checkout.stripe.com",
    "accounts.google.com",
    "rl22.github.io",
    "localhost",
    "127.0.0.1"
  ];

  // 1. ANONYMITY GUARD (FAIL CLOSED)
  // Only allow opaque anonymous IDs (uwc_<hex/uuid>). Reject anything resembling an email or PII.
  function isAnonymousLeadId(id) {
    if (typeof id !== "string") return false;
    const trimmed = id.trim();
    return (
      trimmed.length >= 12 &&
      trimmed.length <= 64 &&
      trimmed.startsWith("uwc_") &&
      !trimmed.includes("@") &&
      /^[a-zA-Z0-9_-]+$/.test(trimmed)
    );
  }

  function generateLeadId() {
    if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
      return "uwc_" + crypto.randomUUID().replace(/-/g, "");
    }
    return (
      "uwc_" +
      Date.now().toString(36) +
      Math.random().toString(36).substring(2, 12)
    );
  }

  function setCookie(name, value, days) {
    try {
      const expires = new Date(Date.now() + days * 864e5).toUTCString();
      const secureFlag = window.location.protocol === "https:" ? "; Secure" : "";
      document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax${secureFlag}`;
    } catch (_) {}
  }

  function getCookie(name) {
    try {
      const match = document.cookie
        .split(/;\s*/)
        .find((row) => row.startsWith(name + "="));
      return match ? decodeURIComponent(match.split("=")[1]) : null;
    } catch (_) {
      return null;
    }
  }

  function getCleanReferrer() {
    const ref = document.referrer;
    if (!ref) return { referrer: "$direct", referring_domain: "$direct" };
    try {
      const url = new URL(ref);
      const host = url.hostname.toLowerCase();
      const isExcluded = EXCLUDED_REFERRERS.some(
        (domain) => host === domain || host.endsWith("." + domain)
      );
      if (isExcluded) return { referrer: "$internal", referring_domain: "$internal" };
      return { referrer: ref, referring_domain: host };
    } catch (_) {
      return { referrer: "$direct", referring_domain: "$direct" };
    }
  }

  function classifyTouch(utmSource, utmMedium, referringDomain, landingPath) {
    const med = (utmMedium || "").toLowerCase();
    const src = (utmSource || "").toLowerCase();
    const ref = (referringDomain || "").toLowerCase();

    if (med === "sms" || src.includes("sms")) {
      return { channel: "sms_nurture", taxonomy: "owned" };
    }
    if (med === "email" || src.includes("email")) {
      return { channel: "email_nurture", taxonomy: "owned" };
    }
    if (src === "gbp" || src === "google_business_profile" || med === "maps") {
      return { channel: "organic_gbp_maps", taxonomy: "earned" };
    }
    if (
      med === "organic" ||
      ref.includes("google.") ||
      ref.includes("bing.") ||
      ref.includes("duckduckgo.") ||
      ref.includes("yahoo.")
    ) {
      const isSubMarket = /^\/locations\/[a-z0-9-]+/i.test(landingPath);
      return {
        channel: isSubMarket ? "organic_seo_local_page" : "organic_search",
        taxonomy: "earned"
      };
    }
    if (ref !== "$direct" && ref !== "$internal") {
      return { channel: "organic_referral_social", taxonomy: "earned" };
    }
    return { channel: "direct_or_dark_social", taxonomy: "direct" };
  }

  function getGaClientId() {
    const raw = getCookie("_ga");
    if (!raw) return "";
    const parts = raw.split(".");
    return parts.length >= 4 ? `${parts[2]}.${parts[3]}` : raw;
  }

  // 2. INITIALIZE OR UPDATE FIRST-PARTY ATTRIBUTION STATE
  function syncAttributionState() {
    const params = new URLSearchParams(window.location.search);
    const urlLeadId = params.get("lid") || params.get("uwc_lead_id");

    let state = null;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) state = JSON.parse(raw);
    } catch (_) {}

    let leadId =
      (isAnonymousLeadId(urlLeadId) && urlLeadId) ||
      (state && isAnonymousLeadId(state.uwc_lead_id) && state.uwc_lead_id) ||
      (isAnonymousLeadId(getCookie(COOKIE_NAME)) && getCookie(COOKIE_NAME)) ||
      generateLeadId();

    setCookie(COOKIE_NAME, leadId, 365);

    const { referrer, referring_domain } = getCleanReferrer();
    const landingPage = window.location.pathname + window.location.search;
    const nowIso = new Date().toISOString();

    const currentUtm = {
      utm_source: params.get("utm_source") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
      utm_term: params.get("utm_term") || "",
      utm_content: params.get("utm_content") || "",
      gbp_cid: params.get("cid") || ""
    };

    const classification = classifyTouch(
      currentUtm.utm_source,
      currentUtm.utm_medium,
      referring_domain,
      window.location.pathname
    );

    if (!state || !state.$initial_landing_page) {
      const initialRef = referrer === "$internal" ? "$direct" : referrer;
      const initialRefDomain =
        referring_domain === "$internal" ? "$direct" : referring_domain;

      state = {
        uwc_lead_id: leadId,
        first_seen_at: nowIso,
        $initial_referrer: initialRef,
        $initial_referring_domain: initialRefDomain,
        $initial_landing_page: landingPage,
        $initial_utm_source:
          currentUtm.utm_source ||
          (initialRefDomain !== "$direct" ? initialRefDomain : "direct"),
        $initial_utm_medium:
          currentUtm.utm_medium ||
          (classification.taxonomy === "earned" ? "organic" : "none"),
        $initial_utm_campaign: currentUtm.utm_campaign || "(organic)",
        $initial_utm_term: currentUtm.utm_term || "",
        $initial_utm_content: currentUtm.utm_content || "",
        $initial_channel: classification.channel,
        $initial_taxonomy: classification.taxonomy,
        last_seen_at: nowIso,
        last_utm_source: currentUtm.utm_source || initialRefDomain,
        last_utm_medium: currentUtm.utm_medium || (classification.taxonomy === "earned" ? "organic" : "none"),
        last_utm_campaign: currentUtm.utm_campaign || "(organic)",
        last_landing_page: landingPage,
        touch_path: [
          {
            seq: 1,
            ts: nowIso,
            channel: classification.channel,
            taxonomy: classification.taxonomy,
            source:
              currentUtm.utm_source ||
              (initialRefDomain !== "$direct" ? initialRefDomain : "direct"),
            medium:
              currentUtm.utm_medium ||
              (classification.taxonomy === "earned" ? "organic" : "none"),
            campaign: currentUtm.utm_campaign || "",
            page: window.location.pathname
          }
        ]
      };
    } else {
      state.uwc_lead_id = leadId;
      state.last_seen_at = nowIso;

      const hasNewUtm = Boolean(
        currentUtm.utm_source || currentUtm.utm_medium || currentUtm.utm_campaign
      );
      const isExternalEntry =
        referring_domain !== "$internal" && referring_domain !== "$direct";

      if (hasNewUtm || isExternalEntry) {
        state.last_utm_source = currentUtm.utm_source || referring_domain;
        state.last_utm_medium = currentUtm.utm_medium || "referral";
        state.last_utm_campaign = currentUtm.utm_campaign || "";
        state.last_landing_page = landingPage;

        if (!Array.isArray(state.touch_path)) state.touch_path = [];
        if (state.touch_path.length < MAX_TOUCHES) {
          state.touch_path.push({
            seq: state.touch_path.length + 1,
            ts: nowIso,
            channel: classification.channel,
            taxonomy: classification.taxonomy,
            source: currentUtm.utm_source || referring_domain,
            medium: currentUtm.utm_medium || "referral",
            campaign: currentUtm.utm_campaign || "",
            page: window.location.pathname
          });
        }
      }
    }

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (_) {}

    if (typeof window.gtag === "function") {
      window.gtag("set", "user_properties", {
        uwc_lead_id: state.uwc_lead_id,
        initial_source: state.$initial_utm_source,
        initial_medium: state.$initial_utm_medium,
        initial_landing_page: state.$initial_landing_page,
        initial_channel: state.$initial_channel
      });
    }

    return state;
  }

  // 3. POPULATE HIDDEN ATTRIBUTION & TCPA CONSENT FIELDS IN ALL TRIAL FORMS
  function populateTrialModalFields(stateOverride) {
    const state = stateOverride || syncAttributionState();
    if (!state) return;

    const forms = document.querySelectorAll(
      'form[action*="formspree.io/f/xyyavaaj"], form[data-uwc-trial-form], #trialForm, #lead-form, #booking-form'
    );

    const nowIso = new Date().toISOString();

    forms.forEach((form) => {
      const smsCheckbox = form.querySelector('input[name="sms_opt_in"]');
      const isOptedIn = smsCheckbox ? Boolean(smsCheckbox.checked) : false;

      const hiddenMap = {
        uwc_lead_id: state.uwc_lead_id,
        ga_client_id: getGaClientId(),
        initial_referrer: state.$initial_referrer,
        initial_referring_domain: state.$initial_referring_domain,
        initial_landing_page: state.$initial_landing_page,
        initial_utm_source: state.$initial_utm_source,
        initial_utm_medium: state.$initial_utm_medium,
        initial_utm_campaign: state.$initial_utm_campaign,
        initial_channel: state.$initial_channel,
        initial_taxonomy: state.$initial_taxonomy,
        last_utm_source: state.last_utm_source,
        last_utm_medium: state.last_utm_medium,
        last_utm_campaign: state.last_utm_campaign,
        touch_count: String((state.touch_path || []).length),
        touch_path_json: JSON.stringify(state.touch_path || []),
        consent_timestamp_utc: nowIso,
        consent_source_url: window.location.href,
        consent_disclosure_version: DISCLOSURE_VERSION,
        sms_opt_in_status: isOptedIn ? "opted_in" : "opted_out_or_unchecked"
      };

      Object.entries(hiddenMap).forEach(([name, value]) => {
        let input = form.querySelector(`input[type="hidden"][name="${name}"]`);
        if (!input) {
          input = document.createElement("input");
          input.type = "hidden";
          input.name = name;
          form.appendChild(input);
        }
        input.value = value || "";
      });

      if (smsCheckbox && !smsCheckbox.dataset.uwcBound) {
        smsCheckbox.dataset.uwcBound = "true";
        smsCheckbox.addEventListener("change", () => {
          const statusInput = form.querySelector('input[type="hidden"][name="sms_opt_in_status"]');
          const tsInput = form.querySelector('input[type="hidden"][name="consent_timestamp_utc"]');
          if (statusInput) {
            statusInput.value = smsCheckbox.checked ? "opted_in" : "opted_out_or_unchecked";
          }
          if (tsInput) {
            tsInput.value = new Date().toISOString();
          }
        });
      }
    });
  }

  // 4. DECORATE WRESTLINGIQ URLS WITH ANONYMOUS LEAD ID & FIRST-TOUCH UTMS
  function decorateUrlString(rawUrl) {
    if (!rawUrl) return rawUrl;
    let url;
    try {
      url = new URL(rawUrl, window.location.origin);
    } catch (_) {
      return rawUrl;
    }

    const host = url.hostname.toLowerCase();
    if (host !== "wrestlingiq.com" && !host.endsWith(".wrestlingiq.com")) {
      return rawUrl;
    }

    let state = null;
    try {
      state = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    } catch (_) {}
    if (!state || !isAnonymousLeadId(state.uwc_lead_id)) return rawUrl;

    url.searchParams.set("ref_id", state.uwc_lead_id);
    url.searchParams.set("metadata[uwc_lead_id]", state.uwc_lead_id);
    if (!url.searchParams.has("utm_source")) {
      url.searchParams.set("utm_source", state.$initial_utm_source || "uwc_organic");
    }
    if (!url.searchParams.has("utm_medium")) {
      url.searchParams.set("utm_medium", state.$initial_utm_medium || "organic");
    }
    if (!url.searchParams.has("utm_campaign")) {
      url.searchParams.set("utm_campaign", state.$initial_landing_page || "uwc_site");
    }
    if (!url.searchParams.has("utm_content")) {
      url.searchParams.set("utm_content", state.uwc_lead_id);
    }

    return url.toString();
  }

  function decorateWrestlingIQLinks(event) {
    const anchor = event.target && event.target.closest ? event.target.closest("a[href]") : null;
    if (!(anchor instanceof HTMLAnchorElement)) return;

    const decorated = decorateUrlString(anchor.href);
    if (decorated !== anchor.href) {
      anchor.href = decorated;
      let state = null;
      try {
        state = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
      } catch (_) {}
      if (state && typeof window.gtag === "function") {
        window.gtag("event", "wrestlingiq_checkout_click", {
          uwc_lead_id: state.uwc_lead_id,
          initial_source: state.$initial_utm_source,
          initial_landing_page: state.$initial_landing_page,
          last_medium: state.last_utm_medium || "organic",
          destination_url: anchor.href
        });
      }
    }
  }

  // 5. NON-BLOCKING FORMSPREE (xyyavaaj) DISPATCH HELPER
  function dispatchFormspreePayload(form, extraFields) {
    populateTrialModalFields();
    const formData = new FormData(form);
    if (extraFields && typeof extraFields === "object") {
      Object.entries(extraFields).forEach(([k, v]) => {
        if (v !== undefined && v !== null) formData.set(k, String(v));
      });
    }

    const payloadObj = {};
    formData.forEach((val, key) => {
      payloadObj[key] = val;
    });
    window.UWCAttribution.lastSubmittedPayload = payloadObj;

    try {
      fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
        keepalive: true
      }).catch(() => {});
    } catch (_) {}

    if (typeof window.gtag === "function") {
      window.gtag("event", "generate_lead", {
        uwc_lead_id: payloadObj.uwc_lead_id || "",
        initial_channel: payloadObj.initial_channel || "",
        self_reported_source: payloadObj.self_reported_source || "",
        sms_opt_in_status: payloadObj.sms_opt_in_status || ""
      });
    }

    return payloadObj;
  }

  const currentState = syncAttributionState();

  window.UWCAttribution = {
    getState: () => {
      try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY) || "null") || currentState;
      } catch (_) {
        return currentState;
      }
    },
    syncForm: () => populateTrialModalFields(),
    decorateUrl: decorateUrlString,
    submitLead: dispatchFormspreePayload,
    lastSubmittedPayload: null
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => populateTrialModalFields(currentState));
  } else {
    populateTrialModalFields(currentState);
  }

  document.addEventListener("click", (e) => {
    if (e.target && e.target.closest && e.target.closest(".open-trial-modal, [data-offer], button")) {
      populateTrialModalFields();
    }
  });

  document.addEventListener("click", decorateWrestlingIQLinks, true);
  document.addEventListener("auxclick", decorateWrestlingIQLinks, true);
})();
