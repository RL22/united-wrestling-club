// The four homepage FAQs, verbatim from home/Faq.astro (whitespace collapsed, entities decoded).
export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {"q": "Which grades can begin training?", "a": "Kids in pre-K through 5th grade can begin training in our kids wrestling program. Practices focus on agility, tumbling, balance, basic stances, and listening in a supportive environment."},
  {"q": "What gear does my child need for their 3-day trial?", "a": "For the 3-day trial pass, your child just needs comfortable athletic shorts (without zippers or pockets) and a t-shirt. Wrestling shoes are recommended but socks are acceptable for their first trial days. We provide loaner headgear if needed. Arrive 15 minutes early for check-in and gear fitting, and call (510) 303-4869 to confirm your first session."},
  {"q": "Are there contracts or cancellation fees?", "a": "No. Memberships are month to month, with no contract and no cancellation fee. Monthly plans range from $89.99 to $150.00, depending on the program. See the pricing page for each plan."},
  {"q": "Where is the gym located and which cities do you serve?", "a": "United Wrestling Club is located at 30139 Industrial Pkwy SW Ste C, Hayward, CA 94544, easily accessible via I-880 and Highway 92. We serve families and competitors from Hayward, Union City, Fremont, Newark, Castro Valley, and San Leandro."},
];
