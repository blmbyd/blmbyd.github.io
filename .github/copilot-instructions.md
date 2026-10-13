Always preserve the complete CV content on the website; the print and PDF versions must fit within a maximum of 3 A4 pages. Mark content intended to appear only on the website as `screenOnly`, or use the appropriate data format that excludes it from print.

## Tailoring the CV to a job offer

When asked to tailor the CV to a supplied job offer:

- Treat the offer as a targeting brief, not as evidence about the candidate. Compare its responsibilities and requirements with the existing CV, and use only claims supported by `src/data/`.
- Emphasise the most relevant verified experience, skills and outcomes using the offer's terminology where accurate. Do not invent experience, tools, qualifications, metrics, responsibilities or outcomes, and do not imply a requirement is met when the CV does not support it.
- Make focused changes to the relevant YAML content under `src/data/`; preserve the rest of the CV and its factual meaning. Check `src/lib/schema.ts` for the supported data shapes.
- Keep all existing and newly useful detail on the website. If content should not take space in print, mark it screen-only using the supported `text`/`screenOnly` or group format; keep the printed CV and generated PDF within three A4 pages.
- Summarise the tailoring and point out important offer requirements that are not evidenced by the CV, rather than filling those gaps with assumptions.
