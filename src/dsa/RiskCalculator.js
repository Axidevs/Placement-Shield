// src/dsa/RiskCalculator.js

// Calculate final risk score
export function calculateRisk({
  phraseScore = 0,
  companyFound = false,
  keywordMatches = [],
  similarWords = []
}) {
  let score = phraseScore;

  // Exact keyword matches
  score += keywordMatches.length * 5;

  // Similar (misspelled) words
  score += similarWords.length * 3;

  // Unknown company increases suspicion
  if (!companyFound) {
    score += 15;
  }

  // Cap score at 100
  score = Math.min(score, 100);

  let level = "";
  let color = "";
  let recommendation = "";

  if (score >= 70) {
    level = "High Risk";
    color = "#e53935";
    recommendation =
      "This message is highly suspicious. Avoid sharing personal details or making any payment.";
  } else if (score >= 40) {
    level = "Medium Risk";
    color = "#fb8c00";
    recommendation =
      "Some scam indicators were detected. Verify the company through its official website.";
  } else {
    level = "Low Risk";
    color = "#43a047";
    recommendation =
      "No major scam indicators detected, but always verify before applying.";
  }

  return {
    score,
    level,
    color,
    recommendation
  };
}
