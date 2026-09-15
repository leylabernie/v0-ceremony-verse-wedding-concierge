/**
 * Component render test for <MinisAssistantWidget />.
 *
 * ⚠️ REQUIRES a JSX test framework that is NOT yet configured in this repo.
 * The project's `npm test` uses the Node built-in test runner via tsx, which
 * cannot render React JSX. To run THIS file you must install vitest plus
 * @testing-library/react and jsdom, e.g.:
 *
 *   npm i -D vitest @testing-library/react @testing-library/jest-dom jsdom
 *
 * and add a "test:components" script (e.g. `vitest run __tests__`).
 *
 * This directory is intentionally excluded from `tsconfig.json` and the ESLint
 * config so the missing test-only dependencies never break `next build` or
 * `npm run lint`. The runnable logic coverage for the widget's excluded-path /
 * destination-slug behaviour lives in tests/minis-assistant-widget.test.mts.
 *
 * These tests exercise the new architecture: the widget talks to /api/chat
 * (mocked below) — never to Abacus directly.
 */

// @ts-nocheck
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import MinisAssistantWidget from "@/components/MinisAssistantWidget";

// Mock next/navigation's usePathname so we can drive route context.
let mockPathname = "/";
vi.mock("next/navigation", () => ({
  usePathname: () => mockPathname,
}));

beforeEach(() => {
  mockPathname = "/";
  // Mock the /api/chat proxy.
  global.fetch = vi.fn(async (url: string) => {
    if (String(url).includes("/api/chat")) {
      return {
        ok: true,
        json: async () => ({
          reply: "Thanks! Could you share your name and email?",
          conversationId: "test-conv-1",
        }),
      } as Response;
    }
    return { ok: true, json: async () => ({ success: true }) } as Response;
  }) as unknown as typeof fetch;
});

describe("MinisAssistantWidget", () => {
  it("renders the launcher on an allowed path", () => {
    mockPathname = "/pricing/";
    render(<MinisAssistantWidget />);
    expect(
      screen.getByRole("button", { name: /chat with mini/i }),
    ).toBeTruthy();
  });

  it("returns null on excluded paths (no launcher)", () => {
    mockPathname = "/privacy-policy";
    const { container } = render(<MinisAssistantWidget />);
    expect(container.querySelector(".minis-fab")).toBeNull();
  });

  it("returns null on /terms", () => {
    mockPathname = "/terms/";
    const { container } = render(<MinisAssistantWidget />);
    expect(container.querySelector(".minis-fab")).toBeNull();
  });

  it("opens the chat panel and shows the opening message", () => {
    render(<MinisAssistantWidget />);
    fireEvent.click(screen.getByRole("button", { name: /chat with mini/i }));
    expect(screen.getByText(/I'm Mini's assistant for CeremonyVerse/i)).toBeTruthy();
  });

  it("POSTs a user message to /api/chat and renders the reply", async () => {
    render(<MinisAssistantWidget />);
    fireEvent.click(screen.getByRole("button", { name: /chat with mini/i }));
    const input = screen.getByPlaceholderText(/type your message/i);
    fireEvent.change(input, { target: { value: "Hello" } });
    fireEvent.submit(input.closest("form"));
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        "/api/chat/",
        expect.objectContaining({ method: "POST" }),
      );
      expect(screen.getByText(/share your name and email/i)).toBeTruthy();
    });
  });
});
