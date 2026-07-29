// src/dsa/EditDistance.js

// Calculates Levenshtein Edit Distance
export function editDistance(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  const rows = str1.length + 1;
  const cols = str2.length + 1;

  const dp = Array.from({ length: rows }, () =>
    Array(cols).fill(0)
  );

  // Initialize first row and first column
  for (let i = 0; i < rows; i++) {
    dp[i][0] = i;
  }

  for (let j = 0; j < cols; j++) {
    dp[0][j] = j;
  }

  // Fill DP table
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] =
          1 +
          Math.min(
            dp[i - 1][j],     // Delete
            dp[i][j - 1],     // Insert
            dp[i - 1][j - 1]  // Replace
          );
      }
    }
  }

  return dp[str1.length][str2.length];
}

// Checks if two words are similar within a limit
export function isSimilar(word1, word2, maxDistance = 2) {
  return editDistance(word1, word2) <= maxDistance;
}

// Returns all similar keywords found in a message
export function findSimilarWords(text, keywords, maxDistance = 2) {
  const words = text
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .split(/\s+/);

  const matched = [];

  for (const keyword of keywords) {
    const lowerKeyword = keyword.toLowerCase();

    for (const word of words) {
      if (isSimilar(word, lowerKeyword, maxDistance)) {
        matched.push(keyword);
        break;
      }
    }
  }

  return [...new Set(matched)];
}
