---
status: snapshot
group: archive
---

# Live Site Content: Class Schedule (`/schedule`)

> **Route:** `/schedule`  
> **Chunk:** `pages/schedule-12ee68b2c1eb74f7.js`  
> **Visual Reference:** [`assets/schedule_grid_reference.png`](assets/schedule_grid_reference.png)  
> **Structured JSON:** [`schedule.json`](schedule.json)  

---

## 1. Page Header & Actions
- **H1:** `Class Schedule`
- **Subtitle:** `View our comprehensive class schedule and find the perfect time to train`
- **Button:** `DOWNLOAD SCHEDULE` (Uses `html2canvas` client-side to render the grid to `schedule.png`)

---

## 2. Complete Weekly Schedule Matrix (Monday – Sunday)

| Time Block | Monday | Tuesday | Wednesday | Thursday | Friday | Saturday | Sunday |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **6:30 AM** | **6:30–8:00 AM**<br>Gi Jiu Jitsu | — | **6:30–8:00 AM**<br>Gi Jiu Jitsu | — | **6:30–8:00 AM**<br>Gi Jiu Jitsu | — | — |
| **8:00 AM** | — | **8:00–9:30 AM**<br>ADULT / COLLEGE / HIGHSCHOOL | — | **8:00–9:30 AM**<br>ADULT / COLLEGE / HIGHSCHOOL | — | **8:00–10:00 AM**<br>Gi Jiu Jitsu | — |
| **10:00 AM** | — | — | — | — | — | **10:00 AM–12:00 PM**<br>OPEN MAT | — |
| **5:00 PM** | **5:00–6:30 PM**<br>UWC TEAM / COMPETITION (GRADES K-12th) | **5:00–6:30 PM**<br>UWC TEAM / COMPETITION (GRADES K-12th) | **5:00–6:30 PM**<br>UWC TEAM / COMPETITION (GRADES K-12th) | **5:00–6:30 PM**<br>UWC TEAM / COMPETITION (GRADES K-12th) | **5:00–6:30 PM**<br>Kids comp | — | — |
| **6:30 PM** | **6:30–7:30 PM**<br>KIDS (GRADES pre-K-5th) | **6:30–7:30 PM**<br>Gi Jiu Jitsu | **6:30–7:30 PM**<br>KIDS (GRADES pre-K-5th) | **6:30–7:30 PM**<br>Gi Jiu Jitsu | **6:30–8:00 PM**<br>Boxing / No Gi Jiu Jitsu | — | — |
| **7:30 PM** | **7:30–9:00 PM**<br>ADULT / HIGH SCHOOL | **7:30–9:00 PM**<br>ADULT / HIGH SCHOOL | **7:30–9:00 PM**<br>ADULT / HIGH SCHOOL | **7:30–9:00 PM**<br>ADULT / HIGH SCHOOL | **6:30–8:00 PM**<br>Boxing / No Gi Jiu Jitsu *(cont.)* | — | — |
| **8:00 PM** | **7:30–9:00 PM**<br>ADULT / HIGH SCHOOL *(cont.)* | **7:30–9:00 PM**<br>ADULT / HIGH SCHOOL *(cont.)* | **7:30–9:00 PM**<br>ADULT / HIGH SCHOOL *(cont.)* | **7:30–9:00 PM**<br>ADULT / HIGH SCHOOL *(cont.)* | **8:00–9:30 PM**<br>Adult Wrestling | — | — |
| **9:00 PM** | **9:00–9:30 PM**<br>OPEN / TECHNIQUE / CONDITIONING / STRENGTH | **9:00–9:30 PM**<br>OPEN / TECHNIQUE / CONDITIONING / STRENGTH | **9:00–9:30 PM**<br>OPEN / TECHNIQUE / CONDITIONING / STRENGTH | **9:00–9:30 PM**<br>OPEN / TECHNIQUE / CONDITIONING / STRENGTH | **8:00–9:30 PM**<br>Adult Wrestling *(cont.)* | — | — |
| **9:30 PM** | **9:30–9:45 PM**<br>CLEAN-UP | **9:30–9:45 PM**<br>CLEAN-UP | **9:30–9:45 PM**<br>CLEAN-UP | **9:30–9:45 PM**<br>CLEAN-UP | **9:30–9:45 PM**<br>CLEAN-UP | — | — |
| **9:45 PM** | **9:45 PM**<br>CLOSED | **9:45 PM**<br>CLOSED | **9:45 PM**<br>CLOSED | **9:45 PM**<br>CLOSED | **9:45 PM**<br>CLOSED | — | — |

---

## 3. Schedule Discrepancies & UX Issues Found (To Fix in Redesign)
1. **Duplicate Row Rendering Bug at 7:30 PM & 8:00 PM:** On the live grid (and screenshot), `7:30 PM - 9:00 PM ADULT / HIGH SCHOOL` (Mon–Thu) and `6:30 PM - 8:00 PM Boxing / No Gi Jiu Jitsu` + `8:00 PM - 9:30 PM Adult Wrestling` (Fri) render twice across adjacent time rows instead of spanning cleanly or listing once.
2. **Missing Sambo & Kids 4-Day Clarification:**
   - `/pricing` sells **4 Day Kids (`$139.99/mo`, Mon–Thu)** and **2 Day Kids (`$89.99/mo`, Mon & Wed)**, but `/schedule` only shows `KIDS (GRADES pre-K-5th)` on **Monday & Wednesday (6:30–7:30 PM)** while Tuesday & Thursday 6:30–7:30 PM says `Gi Jiu Jitsu`. *(Need to ask Naweed: Do 4-Day Kids attend the 5:00 PM K-12 session on Tue/Thu, or is there a 2nd mat for Kids at 6:30 PM Tue/Thu?)*
   - `/classes/sambo` is featured in the navigation, but **Sambo** does not appear by name on the `/schedule` grid.
3. **Zero Click-to-Book Action:** Clicking a class block on `/schedule` currently does nothing. In the rebuild, clicking any slot should open the **1-Click Trial Pass Modal** pre-selected for that program and day.
