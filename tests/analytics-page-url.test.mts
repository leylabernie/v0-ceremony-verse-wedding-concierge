import assert from "node:assert/strict";
import test from "node:test";
import { analyticsPageUrl } from "../lib/analytics-page-url";

test("visitor analytics retains public paths without query values or fragments", () => {
  assert.equal(analyticsPageUrl("https://www.ceremonyverse.com/contact/?email=private%40example.com&token=secret#details"), "https://www.ceremonyverse.com/contact/");
  assert.equal(analyticsPageUrl("https://www.ceremonyverse.com/"), "https://www.ceremonyverse.com/");
});

test("private workflow routes and invalid URLs are excluded", () => {
  for (const path of ["api/consultation", "internal-resources/", "consultation-questionnaire/", "checklist-preferences/", "nurture-preferences/"]) {
    assert.equal(analyticsPageUrl(`https://www.ceremonyverse.com/${path}?token=secret`), null);
  }
  assert.equal(analyticsPageUrl("invalid"), null);
});
