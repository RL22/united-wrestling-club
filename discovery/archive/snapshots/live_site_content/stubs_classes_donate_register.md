---
status: snapshot
group: archive
---

# Live Site Content: Empty / Stub Pages (`/classes`, `/donate`, `/register`)

> **Routes:** `/classes`, `/donate`, `/register`  
> **Chunks:** `pages/classes-5813aeddfd0cca16.js`, `pages/donate-71a5f9fa3b8e8f03.js`, `pages/register-0317e6273a225b05.js`  

---

## Finding: All 3 Pages Are Empty Shells on the Live Site
- **`/classes`:** Renders the Hero component (`EXCELLENCE • DISCIPLINE • CHAMPIONS` / `UNITED WRESTLING CLUB`) followed by an empty `<Section>` container (`children: [(0,t.jsx)(c.Z,{title:"Classes"}),(0,t.jsx)(s.Z,{})]`). No class cards or links are rendered inside the body.
- **`/donate`:** Renders the Hero component + an H1 title `"Donate"` with an empty body (`children: [(0,r.jsx)(d.Z,{}),(0,r.jsx)(m.Z,{title:"Donate"})]`). No donation link, Stripe/PayPal button, or 501(c)(3) copy exists.
- **`/register`:** Renders the Hero component + an empty `<Section>` container (`children: [(0,r.jsx)(a.Z,{title:"Register"}),(0,r.jsx)(o.Z,{})]`).
