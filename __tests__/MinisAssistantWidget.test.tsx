/**
 * Component render test for <MinisAssistantWidget />.
 *
 * ⚠️ REQUIRES a JSX test framework that is NOT yet configured in this repo.
 * The project's `npm test` uses the Node built-in test runner via tsx, which
 * cannot render React JSX. To run THIS file you must install jest (or vitest)
 * plus @testing-library/react and jsdom, e.g.:
 *
 *   npm i -D vitest @testing-library/react @testing-library/jest-dom jsdom
 *
 * and add a "test:components" script (e.g. `vitest run __tests__`).
 *
 * This directory is intentionally excluded from `tsconfig.json` and the ESLint
 * config so the missing test-only dependencies never break `next build` or
 * `npm run lint`. The runnable logic coverage for the widget's excluded-path /
 * destination-slug behaviour lives in tests/minis-assistant-widget.test.mts.
 */

// @ts-nocheck
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import MinisAssistantWidget from "@/components/MinisAssistantWidget";

// Mock next/navigation's usePathname so we can drive route context.
let mockPathname = "/";
vi.mock("next/navigation", () => ({
  usePathname: () => mockPathname,
}));

// Render next/script as a plain <script> so we can assert on it.
vi.mock("next/script", () => ({
  __esModule: true,
  default: (props: Record<string, unknown>) => <script {...props} />,
}));

describe("MinisAssistantWidget", () => {
  it("renders without errors on an allowed path", () => {
    mockPathname = "/";
    const { container } = render(<MinisAssistantWidget />);
    expect(container).toBeTruthy();
  });

  it("renders the embed script tag on an allowed path", () => {
    mockPathname = "/pricing/";
    render(<MinisAssistantWidget />);
    expect(document.getElementById("minis-assistant-embed")).toBeTruthy();
    expect(document.getElementById("minis-assistant-root")).toBeTruthy();
  });

  it("returns null on excluded paths (no script)", () => {
    mockPathname = "/privacy";
    const { container } = render(<MinisAssistantWidget />);
    expect(container.querySelector("#minis-assistant-embed")).toBeNull();
  });

  it("returns null on /terms", () => {
    mockPathname = "/terms/";
    const { container } = render(<MinisAssistantWidget />);
    expect(container.querySelector("#minis-assistant-root")).toBeNull();
  });
});
