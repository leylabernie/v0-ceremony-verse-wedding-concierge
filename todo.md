# Gujarati Discovery Signals Checklist

- [x] Add a contextual reciprocal link from the Gujarati Mexico planning article to the Gujarati Mexico landing page.
- [x] Add a separated, user-relevant Mexico planning resource link from the Gujarati outfits page to the Gujarati Mexico landing page.
- [x] Add an accurate `lastModified` value to the sitemap for the materially updated source article; retain the landing page’s existing sitemap entry without inventing a new timestamp.
- [x] Align the source article’s visible and structured modified date with the actual content update.
- [x] Extend regression coverage for inbound links, modified metadata, and sitemap timestamps.
- [x] Run targeted tests, lint, production build, sitemap checks, and browser validation.
- [x] Open pull request #37 without merging.

## Regional Discovery Extension

- [x] Add a contextual Los Cabos link to the indexed Mexico-versus-Punta-Cana comparison article.
- [x] Align that source article’s visible and structured modified date with the real update.
- [x] Add an accurate sitemap `lastModified` value for that materially updated source article only.
- [x] Extend regression coverage and validate the production build.
- [x] Open pull request #38 without merging.

## Consultation Experience Integration

- [x] Replace the existing canonical `/how-it-works/` route with an editorial planning-path experience for CeremonyVerse’s family-facing Gujarati destination-planning process.
- [x] Preserve a visible fictional-scenario label and correct role boundaries for families, officiants, CeremonyVerse, and independent providers.
- [x] Use production-approved visual assets and existing shared navigation and footer components.
- [x] Record the materially updated canonical route in the sitemap with an accurate modification date.
- [x] Retain intentional conversion links without exposing Planning.Wedding publicly.
- [x] Add direct regression coverage for the process page’s canonical route, fictional-scenario disclosure, ceremony sequence, role boundaries, and sitemap update.
- [x] Validate page metadata, route behavior, linting, regression tests, local browser rendering, and whitespace-safe diff output; the repository-wide production build remains blocked by unrelated baseline prerender failures documented below.
- [ ] Open a review-only pull request without merging or publishing.

## Visual Asset Confirmation

The existing `family-destination-baarat.webp` image is suitable for a broad, family-focused destination-wedding hero when captioned as family experience rather than client work. The existing `family-wedding-mandap-couple.webp` image is suitable for the ceremony-focused conversion section under the same transparent attribution.

## Validation Notes

The local `/how-it-works/` route renders its title, canonical process content, fictional-scenario disclosure, ceremony sequence, role boundaries, public-to-private workspace explanation, and consultation links. The full repository build is currently blocked by pre-existing prerender failures on unrelated routes, including `/haldi-outfits-usa/`, `/_not-found`, `/mehndi-outfits-usa/`, and `/blog/nri-wedding-planning-timeline/`; the error is a React `useContext` null failure rather than a route-specific compiler error.
