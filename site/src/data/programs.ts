// Programs use approved grade labels (OC-14) and homepage schedule tabs. No credentials, no prices beyond facts.ts.
export type Program = { id: 'youth' | 'varsity' | 'adult' | 'open'; name: string; ages: string; scheduleKey: string; formPreset: 'youth' | 'varsity' | 'adult' | 'openmat' };

export const programs: Program[] = [
  { id: 'youth', name: 'Youth Wrestling Academy', ages: 'Kids and youth', scheduleKey: 'youth', formPreset: 'youth' },
  { id: 'varsity', name: 'Varsity and Scholastic Prep', ages: 'Middle and high school', scheduleKey: 'varsity', formPreset: 'varsity' },
  { id: 'adult', name: 'Adult Wrestling and Wrestle-Jitsu', ages: 'Adults', scheduleKey: 'adult', formPreset: 'adult' },
  { id: 'open', name: 'Saturday Open Mat', ages: 'Drop-in', scheduleKey: 'open', formPreset: 'openmat' },
];
