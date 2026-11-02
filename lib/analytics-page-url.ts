// Only public page paths belong in visitor analytics. Forms and preference
// links can carry personal details or signed tokens in their query strings.
export function analyticsPageUrl(value: string): string | null {
  try {
    const url = new URL(value);
    if (/^\/(api|internal-resources|consultation-questionnaire|checklist-preferences|nurture-preferences)(\/|$)/.test(url.pathname)) {
      return null;
    }
    url.search = "";
    url.hash = "";
    return url.toString();
  } catch {
    return null;
  }
}
