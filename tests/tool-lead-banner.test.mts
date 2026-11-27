import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import { createRequire } from "node:module"
import test from "node:test"
import React, { Children, isValidElement, type ReactNode } from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { ToolLeadBanner } from "../components/planning-tools/ToolLeadBanner"
import { toolLeadBanners } from "../lib/tool-lead-banners"

const load = createRequire(import.meta.url)
const clients = {
  "budget-tracker": load("../app/planning-tools/budget-tracker/budget-tracker-client").BudgetTrackerClient,
  "vendor-manager": load("../app/planning-tools/vendor-manager/vendor-manager-client").VendorManagerClient,
  "guest-list": load("../app/planning-tools/guest-list/guest-list-client").GuestListClient,
  "wedding-checklist": load("../app/planning-tools/wedding-checklist/wedding-checklist-client").WeddingChecklistClient,
  "vision-boards": load("../app/planning-tools/vision-boards/vision-boards-client").VisionBoardsClient,
}

type ClickLink = { href?: string; onClick?: () => void; children?: ReactNode }
function links(tree: ReactNode): ClickLink[] {
  return Children.toArray(tree).flatMap(node => {
    if (!isValidElement<ClickLink>(node)) return []
    return [...(node.props.href ? [node.props] : []), ...links(node.props.children)]
  })
}

for (const tool of Object.keys(toolLeadBanners) as (keyof typeof toolLeadBanners)[]) {
  test(`${tool} renders one contextual, non-gating banner`, () => {
    const html = renderToStaticMarkup(React.createElement(clients[tool]))
    const banner = toolLeadBanners[tool]
    const source = new URL(banner.primaryCtaHref, "https://www.ceremonyverse.com").searchParams.get("from")!
    assert.equal((html.match(/data-tool-lead-banner=/g) || []).length, 1)
    assert.ok(html.includes(`data-tool-lead-banner="${source}"`))
    // Next Link omits trailing slashes outside Next's configured runtime.
    assert.ok(html.includes(banner.primaryCtaHref.replace("/schedule/", "/schedule")) || html.includes(banner.primaryCtaHref))
    assert.match(html, /Free 30-minute introductory consultation/)
    assert.match(html, /separate paid services/)
    assert.doesNotMatch(html, /15-Min|\$35|\$80|70–80%|Save money on customs|spot every hidden fee/i)
    assert.doesNotMatch(renderToStaticMarkup(React.createElement(ToolLeadBanner, banner)), /<input|<form|position:\s*fixed|role="dialog"/)
  })
}

test("banners occupy the requested contextual positions without replacing tools", () => {
  const file = (tool: string) => readFileSync(new URL(`../app/planning-tools/${tool}/${tool}-client.tsx`, import.meta.url), "utf8")
  const budget = file("budget-tracker")
  assert.ok(budget.indexOf("totals.remaining]].map") < budget.indexOf("<ToolLeadBanner"))
  assert.ok(budget.indexOf("<ToolLeadBanner") < budget.indexOf(">Add line item</h2>"))
  const vendor = file("vendor-manager")
  assert.ok(vendor.indexOf(">Add vendor</button>") < vendor.indexOf("<ToolLeadBanner"))
  assert.ok(vendor.indexOf("<ToolLeadBanner") < vendor.indexOf(">Your vendors</h2>"))
  const guest = file("guest-list")
  assert.ok(guest.indexOf("stats.partyCount]].map") < guest.indexOf("<ToolLeadBanner"))
  assert.ok(guest.indexOf("<ToolLeadBanner") < guest.indexOf(">Add guest or household</h2>"))
  for (const [tool, marker] of [["wedding-checklist", "{groups.map"], ["vision-boards", "{boards.map"]]) {
    const text = file(tool)
    assert.ok(text.indexOf("<ToolLeadBanner") > text.indexOf(marker))
    assert.ok(text.indexOf("<ToolLeadBanner") < text.indexOf("Saved locally in your browser."))
  }
})

test("optional badge and secondary CTA are omitted unless their values are supplied", () => {
  const basic = {
    title: "Need help?", description: "An optional conversation.",
    primaryCtaText: "Talk to Mini", primaryCtaHref: "/schedule/?from=tool-test",
  }
  for (const partial of [{}, { secondaryCtaText: "Ask" }, { secondaryCtaHref: "https://wa.me/12153419990" }]) {
    const html = renderToStaticMarkup(React.createElement(ToolLeadBanner, { ...basic, ...partial }))
    assert.equal((html.match(/<a /g) || []).length, 1)
    assert.doesNotMatch(html, /tracking-\[0.16em\]/)
  }
})

test("primary and WhatsApp clicks emit intent with source, never personal tool data or a lead event", t => {
  const prior = Object.getOwnPropertyDescriptor(globalThis, "window")
  const ga = t.mock.fn()
  Object.defineProperty(globalThis, "window", { configurable: true, value: { gtag: ga } })
  t.after(() => {
    if (prior) Object.defineProperty(globalThis, "window", prior)
    else Reflect.deleteProperty(globalThis, "window")
  })
  const nodes = links(ToolLeadBanner(toolLeadBanners["budget-tracker"]))
  assert.equal(nodes.length, 2)
  nodes[0].onClick!()
  nodes[1].onClick!()
  assert.equal(ga.mock.calls.length, 2)
  for (const [i, nextStep] of ["consultation", "whatsapp"].entries()) {
    assert.deepEqual(ga.mock.calls[i].arguments, ["event", "calculator_cta_click", {
      calculator_name: "budget-tracker", source: "tool-budget-tracker", placement: "tool_lead_banner",
      cta_position: i === 0 ? "primary" : "secondary", next_step: nextStep,
    }])
  }
})

test("blocked analytics cannot prevent CTA navigation", t => {
  const prior = Object.getOwnPropertyDescriptor(globalThis, "window")
  Object.defineProperty(globalThis, "window", { configurable: true, value: { gtag: () => { throw new Error("blocked") } } })
  t.after(() => {
    if (prior) Object.defineProperty(globalThis, "window", prior)
    else Reflect.deleteProperty(globalThis, "window")
  })
  const primary = links(ToolLeadBanner(toolLeadBanners["guest-list"]))[0]
  assert.equal(primary.href, "/schedule/?from=tool-guest-list")
  assert.doesNotThrow(() => primary.onClick!())
})
