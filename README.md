# Hyunse Lee — Personal website

English-language research profile for https://98hyunse.github.io/.

## Editing

- `app/page.tsx`: biography, research, publications, education, and awards.
- `app/globals.css`: responsive design and self-hosted Pretendard typography.
- `public/assets/`: portrait, font license, and the existing Korean CV (explicitly labeled on the site).

Run `npm ci` and `npm run dev` for a local preview. Node.js 24 is used for deployment.
Pushing to `main` builds a static export and deploys it through GitHub Actions.
Only allowlisted public output is packaged; no server runtime is deployed.

## Content notes

Academic statuses reflect information supplied by the researcher in September 2026.
The Collision-to-Preference manuscript is listed as submitted to ICRA 2027 on both the web profile and the downloadable Korean CV; submission is not presented as acceptance or publication.
The Quiet Prompt is listed as accepted to NeurIPS 2026 based on the researcher's confirmation and the lab's public research record.
An English translation is labeled when no official English paper title was verified.
The ITC-CSCC award retains the conference year (2025) and award date (July 2026) as supplied.
The original Korean CV is preserved, not silently presented as an English PDF.

Publication metadata references: [CoCoder publisher record](https://ksbe-jbe.org/_common/do.php?a=full&aidx=40740&b=12&bidx=3676), [EEG article](https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12317768).

Pretendard is distributed under the SIL Open Font License; see `public/assets/Pretendard-LICENSE.txt`.
