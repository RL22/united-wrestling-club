# ADR-20261104-review-content-verbatim: Reviews stay verbatim, no invented details

- **Date:** 2026-11-04
- **Status:** Approved
- **Scope:** Compliance · UX

## Context & Problem
The reviews page had invented card headlines, role and tenure lines (for example "Local Guide (17 reviews)" and "BJJ Brown Belt"), verified badges, and an edited review. Those were presented as genuine reviews.

## Approved Solution
1. **Review bodies are verbatim** and match the reviews JSON-LD. Where the card and the JSON-LD differ, the JSON-LD wording is used.
2. **No invented details.** Headlines, role or tenure lines, locations, and verification badges are removed unless they come from a source.
3. **Counts match the client-confirmed figure:** 5.0 across 42 reviews.
4. **Submissions say** "We review every submission before anything goes live". The page does not promise a homepage feature that is not connected.

## Alternatives Rejected
1. **Keep the headlines and roles:** rejected. They are not in the reviews, so they are not truthful.
2. **Paraphrase reviews for clarity:** rejected.

## Impacted Files
- `reviews/index.html`
- `v01/index.html` (testimonials)
- `discovery/decisions/ADR-20261102-branded-reviews-and-submission-engine.md`
