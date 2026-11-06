// Programs as sourced from KB-05 (ages) and the homepage schedule tabs. No credentials, no prices beyond facts.ts.
export type Program = { id: 'youth' | 'varsity' | 'adult' | 'open'; name: string; ages: string; scheduleKey: string; formPreset: 'youth' | 'varsity' | 'adult' | 'openmat' };

export const programs: Program[] = [
  { id: 'youth', name: 'Youth Wrestling Academy', ages: 'Ages 5 to 13', scheduleKey: 'youth', formPreset: 'youth' },
  { id: 'varsity', name: 'Varsity and Scholastic Prep', ages: 'Ages 14 to 18', scheduleKey: 'varsity', formPreset: 'varsity' },
  { id: 'adult', name: 'Adult Wrestling and Wrestle-Jitsu', ages: '18 and up', scheduleKey: 'adult', formPreset: 'adult' },
  { id: 'open', name: 'Saturday Open Mat', ages: 'Drop-in', scheduleKey: 'open', formPreset: 'openmat' },
];
