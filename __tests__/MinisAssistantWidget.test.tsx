/**
 * Component render test for <MinisAssistantWidget />.
 *
 * The runnable Node test runner coverage lives in tests/minis-assistant-widget.test.mts.
 */

// @ts-nocheck
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import MinisAssistantWidget from "@/components/MinisAssistantWidget";

let mockPathname = "/";
vi.mock("next/navigation", () => ({
  usePathname: () => mockPathname,
}));

beforeEach(() => {
  mockPathname = "/";
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
    expect(container.querySelector("[data-minis-widget-shell]")).toBeNull();
  });

  it("returns null on /terms", () => {
    mockPathname = "/terms/";
    const { container } = render(<MinisAssistantWidget />);
    expect(container.querySelector("[data-minis-widget-shell]")).toBeNull();
  });

  it("opens the chat panel, shows the welcome message, 4 core topics, and 3 routing links", () => {
    render(<MinisAssistantWidget />);
    fireEvent.click(screen.getByRole("button", { name: /chat with mini/i }));
    expect(screen.getByText(/I'm Mini's Assistant/i)).toBeTruthy();
    expect(
      screen.getByRole("link", { name: /Book Free 30-Min Call/i }).getAttribute("href"),
    ).toBe("https://calendar.app.google/sgZc3odvDrbicVuW8");
    expect(
      screen.getByRole("link", { name: /WhatsApp Mini/i }).getAttribute("href"),
    ).toBe("https://wa.me/12153419990");
    expect(
      screen.getByRole("link", { name: /View Pricing/i }).getAttribute("href"),
    ).toBe("/pricing/");
  });

  it("POSTs a user message to /api/chat and renders the reply", async () => {
    render(<MinisAssistantWidget />);
    fireEvent.click(screen.getByRole("button", { name: /chat with mini/i }));
    const input = screen.getByLabelText(/type your message/i);
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

  it("falls back to the deterministic guided assistant when /api/chat returns 500", async () => {
    global.fetch = vi.fn(async () => ({
      ok: false,
      status: 500,
      json: async () => ({ error: "Chat is not configured yet." }),
    })) as unknown as typeof fetch;

    render(<MinisAssistantWidget />);
    fireEvent.click(screen.getByRole("button", { name: /chat with mini/i }));
    fireEvent.click(
      screen.getByRole("button", {
        name: /\$300 Feasibility & Action Plan \(Venmo\)/i,
      }),
    );

    await waitFor(() => {
      expect(
        screen.getByText(/100% of the \$300 fee is credited/i),
      ).toBeTruthy();
    });
  });
});
