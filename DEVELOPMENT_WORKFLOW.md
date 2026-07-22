# CeremonyVerse Development Workflow: Safe "Cloud-to-Cloud" Staging

To avoid breaking the live site and search indexation, we use a GitHub + Vercel Preview Deployment workflow. This allows us to test SEO, layout shifts, and metadata in an isolated environment before merging to production.

## 1. The Architecture
- **Production (`main` branch):** CeremonyVerse.com
- **Staging (Pull Requests):** Automatic Preview Deployments (e.g., `ceremony-verse-git-feature-branch.vercel.app`)

## 2. Step-by-Step Execution Plan

### Step A: Branching
Never push directly to `main`. Always create a feature branch for changes.
```bash
git checkout -b seo-layout-updates
```

### Step B: The "Cloud-to-Cloud" Preview
1. **Push your branch to GitHub.**
2. **Open a Pull Request (PR)** on GitHub.
3. **Vercel Automatic Deployment:** Vercel will automatically detect the PR and generate a unique "Preview URL".
4. **Isolated Testing:** Use this URL to:
   - Check layout shifts on mobile/desktop.
   - Verify Meta Tags using browser extensions or social media debuggers.
   - Share with the team for review.

### Step C: SEO Verification
Before merging, use the Preview URL to run a Lighthouse audit. Since Vercel Preview deployments use `x-robots-tag: noindex` by default, your staging changes won't be indexed by Google until they are merged to `main`.

### Step D: Merging to Production
Once the Preview is verified:
1. Merge the PR on GitHub.
2. Vercel will automatically deploy the updated `main` branch to CeremonyVerse.com.

## 3. Best Practices for SEO Changes
- **Metadata Updates:** Always verify `<title>` and `<meta name="description">` in the `<head>` of the Preview URL.
- **Layout Shifts:** Test on real mobile devices using the Preview URL to ensure CLS (Cumulative Layout Shift) is minimal.
- **Environment Variables:** If using new API keys, ensure they are added to Vercel's "Preview" environment settings, not just "Production".
