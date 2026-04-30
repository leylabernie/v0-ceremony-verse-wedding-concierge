"use client";

import { useState } from "react";

interface CalculatorResult {
  itemValue: number;
  baseRate: number;
  baseDuty: number;
  section122Surcharge: number;
  mpf: number;
  brokerageFee: number;
  totalDuties: number;
  totalLandedCost: number;
  boutiqueCost: number;
  savings: number;
}

export function CustomsCalculator() {
  const [itemCategory, setItemCategory] = useState("bridal-lehenga");
  const [itemValue, setItemValue] = useState(2000);
  const [shippingMethod, setShippingMethod] = useState("air");
  const [result, setResult] = useState<CalculatorResult | null>(null);

  const categoryRates: Record<string, number> = {
    "bridal-lehenga": 0.18,
    "sherwani": 0.18,
    "silk-saree": 0.15,
    "imitation-jewelry": 0.11,
    "precious-jewelry": 0.07,
    "ceremonial-items": 0.18,
  };

  const categoryMarkups: Record<string, number> = {
    "bridal-lehenga": 2.5,
    "sherwani": 2.0,
    "silk-saree": 2.2,
    "imitation-jewelry": 2.5,
    "precious-jewelry": 1.5,
    "ceremonial-items": 2.0,
  };

  const calculateCosts = () => {
    const baseRate = categoryRates[itemCategory] || 0.18;
    const baseDuty = itemValue * baseRate;
    const section122Surcharge = itemValue * 0.15;
    const mpf = Math.max(32, itemValue * 0.003464);
    const brokerageFee = 75;
    const totalDuties = baseDuty + section122Surcharge + mpf + brokerageFee;
    const totalLandedCost = itemValue + totalDuties;
    const boutiqueCost = itemValue * (categoryMarkups[itemCategory] || 2.5);
    const savings = boutiqueCost - totalLandedCost;

    setResult({
      itemValue,
      baseRate,
      baseDuty,
      section122Surcharge,
      mpf,
      brokerageFee,
      totalDuties,
      totalLandedCost,
      boutiqueCost,
      savings,
    });
  };

  return (
    <section id="customs-calculator" style={{ padding: "3rem 1.5rem", background: "#f9f6f3" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "2rem",
            fontWeight: 600,
            color: "#2f2f2f",
            marginBottom: "1rem",
            textAlign: "center",
          }}
        >
          2026 US Customs & Tariff Calculator
        </h2>
        <p style={{ textAlign: "center", color: "#6a5c55", marginBottom: "2rem" }}>
          Estimate the total landed cost for your Indian wedding outfit with 2026 tariff rates, Section 122 surcharge, and processing fees.
        </p>

        {/* Input Section */}
        <div style={{ background: "#fff", padding: "2rem", borderRadius: "8px", border: "1px solid #e6dfd5", marginBottom: "2rem" }}>
          <div style={{ marginBottom: "1.5rem" }}>
            <label style={{ display: "block", fontWeight: 600, marginBottom: "0.5rem", color: "#2f2f2f" }}>
              Item Category
            </label>
            <select
              value={itemCategory}
              onChange={(e) => setItemCategory(e.target.value)}
              style={{
                width: "100%",
                padding: "0.75rem",
                border: "1px solid #e6dfd5",
                borderRadius: "4px",
                fontSize: "1rem",
              }}
            >
              <option value="bridal-lehenga">Bridal Lehenga (Silk)</option>
              <option value="sherwani">Sherwani/Groom Attire</option>
              <option value="silk-saree">Silk Saree</option>
              <option value="imitation-jewelry">Imitation Jewelry</option>
              <option value="precious-jewelry">Precious Jewelry</option>
              <option value="ceremonial-items">Ceremonial Items</option>
            </select>
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <label style={{ display: "block", fontWeight: 600, marginBottom: "0.5rem", color: "#2f2f2f" }}>
              Item Value (USD): ${itemValue}
            </label>
            <input
              type="range"
              min="100"
              max="10000"
              step="100"
              value={itemValue}
              onChange={(e) => setItemValue(Number(e.target.value))}
              style={{ width: "100%" }}
            />
            <input
              type="number"
              value={itemValue}
              onChange={(e) => setItemValue(Number(e.target.value))}
              style={{
                width: "100%",
                padding: "0.75rem",
                border: "1px solid #e6dfd5",
                borderRadius: "4px",
                fontSize: "1rem",
                marginTop: "0.5rem",
              }}
            />
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <label style={{ display: "block", fontWeight: 600, marginBottom: "0.5rem", color: "#2f2f2f" }}>
              Shipping Method
            </label>
            <div style={{ display: "flex", gap: "1rem" }}>
              <label style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <input
                  type="radio"
                  name="shipping"
                  value="air"
                  checked={shippingMethod === "air"}
                  onChange={(e) => setShippingMethod(e.target.value)}
                />
                Air Courier (DHL/FedEx/UPS)
              </label>
              <label style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <input
                  type="radio"
                  name="shipping"
                  value="sea"
                  checked={shippingMethod === "sea"}
                  onChange={(e) => setShippingMethod(e.target.value)}
                />
                Sea Freight
              </label>
            </div>
          </div>

          <button
            onClick={calculateCosts}
            style={{
              width: "100%",
              padding: "1rem",
              background: "#c7b28a",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              fontSize: "1rem",
              fontWeight: 600,
              cursor: "pointer",
              transition: "opacity 0.3s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.opacity = "0.9")}
            onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Calculate Landed Cost
          </button>
        </div>

        {/* Results Section */}
        {result && (
          <div style={{ background: "#f0ebe5", padding: "2rem", borderRadius: "8px", border: "2px solid #c7b28a" }}>
            <h3 style={{ fontWeight: 600, color: "#2f2f2f", marginBottom: "1.5rem" }}>
              2026 Cost Breakdown
            </h3>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.5rem" }}>
              <div>
                <p style={{ fontSize: "0.9rem", color: "#6a5c55", marginBottom: "0.25rem" }}>Item Value</p>
                <p style={{ fontSize: "1.3rem", fontWeight: 600, color: "#2f2f2f" }}>
                  ${result.itemValue.toFixed(2)}
                </p>
              </div>
              <div>
                <p style={{ fontSize: "0.9rem", color: "#6a5c55", marginBottom: "0.25rem" }}>Base Duty Rate</p>
                <p style={{ fontSize: "1.3rem", fontWeight: 600, color: "#2f2f2f" }}>
                  {(result.baseRate * 100).toFixed(0)}%
                </p>
              </div>
              <div>
                <p style={{ fontSize: "0.9rem", color: "#6a5c55", marginBottom: "0.25rem" }}>Base Duty (18% India)</p>
                <p style={{ fontSize: "1.3rem", fontWeight: 600, color: "#2f2f2f" }}>
                  ${result.baseDuty.toFixed(2)}
                </p>
              </div>
              <div>
                <p style={{ fontSize: "0.9rem", color: "#6a5c55", marginBottom: "0.25rem" }}>Section 122 Surcharge (15%)</p>
                <p style={{ fontSize: "1.3rem", fontWeight: 600, color: "#2f2f2f" }}>
                  ${result.section122Surcharge.toFixed(2)}
                </p>
              </div>
              <div>
                <p style={{ fontSize: "0.9rem", color: "#6a5c55", marginBottom: "0.25rem" }}>Processing Fee (MPF)</p>
                <p style={{ fontSize: "1.3rem", fontWeight: 600, color: "#2f2f2f" }}>
                  ${result.mpf.toFixed(2)}
                </p>
              </div>
              <div>
                <p style={{ fontSize: "0.9rem", color: "#6a5c55", marginBottom: "0.25rem" }}>Brokerage Fee</p>
                <p style={{ fontSize: "1.3rem", fontWeight: 600, color: "#2f2f2f" }}>
                  ${result.brokerageFee.toFixed(2)}
                </p>
              </div>
            </div>

            <div style={{ background: "#fff", padding: "1.5rem", borderRadius: "4px", marginBottom: "1.5rem", border: "1px solid #e6dfd5" }}>
              <p style={{ fontSize: "0.9rem", color: "#6a5c55", marginBottom: "0.25rem" }}>Total Duties & Fees</p>
              <p style={{ fontSize: "2rem", fontWeight: 700, color: "#c7b28a", marginBottom: "1rem" }}>
                ${result.totalDuties.toFixed(2)}
              </p>
              <p style={{ fontSize: "0.9rem", color: "#6a5c55", marginBottom: "0.25rem" }}>Total Landed Cost (Item + All Duties)</p>
              <p style={{ fontSize: "2rem", fontWeight: 700, color: "#2f2f2f" }}>
                ${result.totalLandedCost.toFixed(2)}
              </p>
            </div>

            <div style={{ background: "#e8f5e9", padding: "1.5rem", borderRadius: "4px", border: "1px solid #4caf50" }}>
              <p style={{ fontSize: "0.9rem", color: "#2e7d32", marginBottom: "0.25rem" }}>Typical US Boutique Cost (2.5x markup)</p>
              <p style={{ fontSize: "1.5rem", fontWeight: 600, color: "#2e7d32", marginBottom: "1rem" }}>
                ${result.boutiqueCost.toFixed(2)}
              </p>
              <p style={{ fontSize: "1rem", fontWeight: 600, color: "#2e7d32" }}>
                💰 You Save: ${result.savings.toFixed(2)} ({((result.savings / result.boutiqueCost) * 100).toFixed(0)}%)
              </p>
            </div>

            <button
              onClick={() => {
                const text = `2026 US Customs Calculator Results:\n\nItem Value: $${result.itemValue.toFixed(2)}\nTotal Duties & Fees: $${result.totalDuties.toFixed(2)}\nTotal Landed Cost: $${result.totalLandedCost.toFixed(2)}\nUS Boutique Cost: $${result.boutiqueCost.toFixed(2)}\nYou Save: $${result.savings.toFixed(2)}\n\nCalculated at CeremonyVerse.com`;
                navigator.clipboard.writeText(text);
                alert("Results copied to clipboard!");
              }}
              style={{
                width: "100%",
                padding: "0.75rem",
                background: "#c7b28a",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                fontSize: "0.9rem",
                fontWeight: 600,
                cursor: "pointer",
                marginTop: "1rem",
              }}
            >
              Copy Results
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
