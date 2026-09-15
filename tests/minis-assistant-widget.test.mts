import { test } from "node:test";
import assert from "node:assert/strict";
import {
  isWidgetExcludedPath,
  extractDestinationSlug,
  destinationNameFromSlug,
  ceremonyVerseWidgetConfig,
} from "../lib/widget-config.ts";

// These cover the decision logic that drives MinisAssistantWidget:
//  - whether the widget renders (null on excluded paths)
//  - the destination page-context passed to the agent
// The full JSX render test lives in __tests__/MinisAssistantWidget.test.tsx and
// requires jest/vitest + @testing-library/react to run.

test("widget is excluded on legal pages", () => {
  assert.equal(isWidgetExcludedPath("/privacy-policy"), true);
  assert.equal(isWidgetExcludedPath("/terms-of-service"), true);
  // Actual site legal routes and trailing-slash variants.
  assert.equal(isWidgetExcludedPath("/privacy"), true);
  assert.equal(isWidgetExcludedPath("/privacy/"), true);
  assert.equal(isWidgetExcludedPath("/terms"), true);
  assert.equal(isWidgetExcludedPath("/terms/"), true);
});

test("widget renders on normal pages", () => {
  assert.equal(isWidgetExcludedPath("/"), false);
  assert.equal(isWidgetExcludedPath("/pricing/"), false);
  assert.equal(isWidgetExcludedPath("/destinations/cancun-indian-wedding/"), false);
});

test("destination slug is extracted only on destination detail pages", () => {
  assert.equal(
    extractDestinationSlug("/destinations/cancun-indian-wedding/"),
    "cancun-indian-wedding",
  );
  assert.equal(
    extractDestinationSlug("/destinations/jamaica-indian-wedding"),
    "jamaica-indian-wedding",
  );
  assert.equal(extractDestinationSlug("/destinations/"), null);
  assert.equal(extractDestinationSlug("/pricing/"), null);
});

test("destination name maps from slug", () => {
  assert.equal(destinationNameFromSlug("cancun-indian-wedding"), "Cancún");
  assert.equal(destinationNameFromSlug("punta-cana-indian-wedding"), "Punta Cana");
  assert.equal(destinationNameFromSlug(null), null);
  // Fallback title-casing for an unknown slug.
  assert.equal(destinationNameFromSlug("tulum-indian-wedding"), "Tulum");
});

test("escalation thresholds match the system spec", () => {
  assert.equal(ceremonyVerseWidgetConfig.escalation.guestMin, 75);
  assert.equal(ceremonyVerseWidgetConfig.escalation.budgetMin, 60000);
  assert.equal(ceremonyVerseWidgetConfig.escalation.monthsMax, 8);
  assert.equal(ceremonyVerseWidgetConfig.whatsappNumber, "12153419990");
});
