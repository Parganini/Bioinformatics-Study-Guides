import React from "react";

export function LB1ProteinIcon({ className = "h-24 w-full" }) {
  return (
    <svg viewBox="0 0 180 110" className={className} role="img" aria-label="Protein profile and HMM path icon">
      <rect x="14" y="18" width="152" height="74" rx="24" fill="#f0fdfa" stroke="#0f766e" strokeWidth="4" />
      <path d="M36 70 C54 28, 77 91, 96 48 S135 24, 147 66" fill="none" stroke="#111827" strokeWidth="7" strokeLinecap="round" />
      <circle cx="38" cy="70" r="7" fill="#dc2626" />
      <circle cx="77" cy="82" r="7" fill="#0f766e" />
      <circle cx="96" cy="48" r="7" fill="#0284c7" />
      <circle cx="126" cy="34" r="7" fill="#d97706" />
      <path d="M39 24 H62 M72 24 H96 M106 24 H130 M140 24 H151" stroke="#0f766e" strokeWidth="5" strokeLinecap="round" />
      <text x="88" y="103" textAnchor="middle" fontSize="14" fontWeight="800" fill="#134e4a">LB1</text>
    </svg>
  );
}
