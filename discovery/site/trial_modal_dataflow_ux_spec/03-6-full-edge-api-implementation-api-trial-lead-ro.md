---
type: spec
status: current
group: site
owner: "Rodney Lewis (Sprintz)"
date: 2026-10-31
last_reviewed: 2026-10-31
sources: ["https://www.wrestlingiq.com/users/sign_up?paid_session_id=6327&show_registration=true&team_id=513", "https://wrestlingiq.com/uwc/w?lead={lead_id}&team=513", "https://www.wrestlingiq.com/users/sign_up?paid_session_id=6327&team_id=513&prefill_phone=${encodeURIComponent(phone"]
shard_of: "discovery/site/trial_modal_dataflow_ux_spec.md"
part: "3 of 3"
---

> Part 3 of 3 of [trial_modal_dataflow_ux_spec](../trial_modal_dataflow_ux_spec.md). Text is verbatim from the original; only links were rewritten.

## 6. Full Edge API Implementation: `/api/trial-lead/route.ts`

```typescript
import { z } from 'zod';
import { NextResponse } from 'next/server';

// 1. Inbound Lead Validation Schema
export const TrialLeadSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters").max(80),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Valid E.164 phone number required"),
  trainingTrack: z.enum(['youth_beg', 'high_school', 'adult_grapple', 'sambo']),
  athleteAge: z.number().int().min(4).max(75).optional(),
  mediaOptOut: z.boolean().default(false),
  utmSource: z.string().optional().default('organic_rebuild_modal'),
  utmCampaign: z.string().optional(),
  utmContent: z.string().optional()
});

// 2. Verified Active WrestlingIQ (Team 513) Session IDs
const WRESTLING_IQ_SESSION_MAP: Record<string, { id: number; price: string; name: string }> = {
  youth_beg:     { id: 2665, price: '$139.99/mo', name: 'Youth Beginner Wrestling' },
  high_school:   { id: 2667, price: '$139.99/mo', name: 'High School / Comp Off-Season' },
  adult_grapple: { id: 2668, price: '$139.99/mo', name: 'Adult Wrestle-Jitsu / BJJ' },
  sambo:         { id: 2669, price: '$120.00/mo', name: 'Combat Sambo & Striking' }
};

export async function POST(req: Request) {
  try {
    const rawBody = await req.json();
    const result = TrialLeadSchema.safeParse(rawBody);

    if (!result.success) {
      return NextResponse.json(
        { success: false, errors: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { fullName, phone, trainingTrack, mediaOptOut, athleteAge } = result.data;
    const targetSession = WRESTLING_IQ_SESSION_MAP[trainingTrack];
    const firstName = fullName.split(' ')[0];

    // Parallel Edge Execution: DB Store, SMS Dispatch, Staff Notification
    const [dbResult, smsResult] = await Promise.allSettled([
      // A. Write to Supabase / PostgreSQL Database
      persistTrialLead({
        fullName,
        phone,
        trainingTrack,
        athleteAge,
        mediaOptOut,
        targetSessionId: targetSession.id,
        createdAt: new Date().toISOString()
      }),

      // B. Dispatch Twilio Instant SMS
      sendAutomatedTrialSMS({
        recipientPhone: phone,
        firstName,
        trackName: targetSession.name,
        prefilledWaiverUrl: `https://www.wrestlingiq.com/users/sign_up?paid_session_id=6327&team_id=513&prefill_phone=${encodeURIComponent(phone)}&prefill_name=${encodeURIComponent(fullName)}`
      }),

      // C. Notify Coaching Staff via Push Notification
      notifyStaffSlackOrPushover({
        title: `🔥 New Trial Lead: ${fullName}`,
        message: `Phone: ${phone} | Track: ${targetSession.name} | Media Opt-Out: ${mediaOptOut ? 'YES' : 'NO'}`
      })
    ]);

    return NextResponse.json({
      success: true,
      matchedSessionId: targetSession.id,
      matchedSessionName: targetSession.name,
      prefilledWaiverUrl: `https://www.wrestlingiq.com/users/sign_up?paid_session_id=6327&team_id=513&prefill_phone=${encodeURIComponent(phone)}`
    });

  } catch (err: any) {
    console.error('Trial Lead API Error:', err);
    return NextResponse.json(
      { success: false, message: 'Internal server error processing trial request' },
      { status: 500 }
    );
  }
}
```

---

## 7. Interactive Generative UI Simulator

An interactive, live-testing HTML artifact is available for testing the user experience, simulated smartphone SMS receipt, and touchpoint timelines:
* **Interactive Artifact:** [`trial_modal_dataflow_ux.html`](../../../../../../../.gemini/antigravity/brain/58c04644-f80e-49d0-b5bc-21ecd0237549/trial_modal_dataflow_ux.html)
* **Embedded UI Preview:** Rendered inline below for review.
