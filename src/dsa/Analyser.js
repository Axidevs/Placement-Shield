// src/dsa/Analyser.js
// 
import HashMap, { searchWithHashMap } from "./Hashmap";
import { keywords } from "../data/Keywords";
import { companies } from "../data/Companies";
import { phrases } from "../data/Pattern";

// import { searchKeywords } from "./Kmp";
// import { kmpSearch, searchKeywords } from "./Kmp";
import { kmpSearch } from "./Kmp";
import { findSimilarWords } from "./EditDistance";
import { calculateRisk } from "./RiskCalculator";

export function analyseMessage(companyName, message) {
  companyName = (companyName || "").trim().toLowerCase();
  message = (message || "").trim().toLowerCase();

  // Check if company exists
  const companyFound = companies.some(
    company => company.toLowerCase() === companyName
  );

  // Scam phrases
  let phraseScore = 0;
  const matchedPhrases = [];

  // for (const phrase in phrases) {
  //   if (message.includes(phrase.toLowerCase())) {
  //     phraseScore += phrases[phrase];
  //     matchedPhrases.push(phrase);
  //   }
  // }
  for (const phrase in phrases) {
    if (kmpSearch(message, phrase)) {
        phraseScore += phrases[phrase];
        matchedPhrases.push(phrase);
    }
}

  // Extract keywords from phrases
  // const keywords = [];

  // Object.keys(phrases).forEach(phrase => {
  //   phrase.split(" ").forEach(word => {
  //     if (word.length > 3) {
  //       keywords.push(word);
  //     }
  //   });
  // });

  // const uniqueKeywords = [...new Set(keywords)];
  const uniqueKeywords = Object.keys(keywords);
  const keywordMap = new HashMap();
  uniqueKeywords.forEach((word) => {
  keywordMap.insert(word, keywords[word]);
});

  // Exact matches using KMP
  // const keywordMatches = searchKeywords(message, uniqueKeywords);
  const keywordMatches = searchWithHashMap(
  message,
  keywordMap
);

  // Similar words using Edit Distance
  const similarWords = findSimilarWords(
    message,
    uniqueKeywords,
    2
  );

  // Final Risk
  const risk = calculateRisk({
    phraseScore,
    companyFound,
    keywordMatches,
    similarWords
  });

  return {
    companyFound,
    matchedPhrases,
    keywordMatches,
    similarWords,
    ...risk
  };
}

export default analyseMessage;
