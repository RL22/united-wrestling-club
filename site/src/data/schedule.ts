// Class times, copied verbatim from home/Schedule.astro (KB-04: the homepage schedule is the source of truth).
// `programs` are the homepage tab ids (youth, varsity, adult, open); `tags` help the class pages pick rows.
// The Saturday 8:00 to 10:00 AM gi row is shown (owner decision D1, 2026-11-07). `pending` remains available for any future unconfirmed row.
export type ScheduleRow = {
  id: string;
  days: string;
  time: string;
  label: string;
  programs: string[];
  tags: string[];
  pending?: 'D1';
};

export const scheduleRows: ScheduleRow[] = [
  {"id": "row-01", "days": "Mon & Wed", "time": "6:30 – 7:30 PM", "label": "Kids, pre-K to 5th grade", "programs": ["youth"], "tags": ["kids"]},
  {"id": "row-02", "days": "Mon – Thu", "time": "5:00 – 6:30 PM", "label": "Team & competition, K–12", "programs": ["youth", "varsity"], "tags": ["competition"]},
  {"id": "row-03", "days": "Fri", "time": "5:00 – 6:30 PM", "label": "Kids competition", "programs": ["youth"], "tags": ["kids", "competition"]},
  {"id": "row-04", "days": "Mon – Thu", "time": "7:30 – 9:00 PM", "label": "Adult & high school", "programs": ["varsity", "adult"], "tags": ["adult"]},
  {"id": "row-05", "days": "Tue & Thu", "time": "8:00 – 9:30 AM", "label": "Adult, college & high school", "programs": ["varsity", "adult"], "tags": ["adult"]},
  {"id": "row-06", "days": "Mon – Thu", "time": "9:00 – 9:30 PM", "label": "Open, technique, conditioning & strength", "programs": ["adult"], "tags": []},
  {"id": "row-07", "days": "Fri", "time": "8:00 – 9:30 PM", "label": "Adult wrestling", "programs": ["adult"], "tags": ["adult"]},
  {"id": "row-08", "days": "Mon, Wed & Fri", "time": "6:30 – 8:00 AM", "label": "Gi jiu-jitsu", "programs": ["adult"], "tags": ["gi"]},
  {"id": "row-09", "days": "Tue & Thu", "time": "6:30 – 7:30 PM", "label": "Gi jiu-jitsu", "programs": ["adult"], "tags": ["gi"]},
  {"id": "row-10", "days": "Fri", "time": "6:30 – 8:00 PM", "label": "Boxing & no-gi jiu-jitsu", "programs": ["adult"], "tags": ["nogi", "boxing"]},
  {"id": "row-11", "days": "Saturday", "time": "8:00 – 10:00 AM", "label": "Gi jiu-jitsu", "programs": ["open"], "tags": ["gi"]},
  {"id": "row-12", "days": "Saturday", "time": "10:00 AM – 12:00 PM", "label": "Open mat, all affiliations welcome", "programs": ["open"], "tags": ["openmat"]},
];
