// src/dsa/Kmp.js

// Build Longest Prefix Suffix (LPS) array
function buildLPS(pattern) {
  const lps = new Array(pattern.length).fill(0);

  let length = 0;
  let i = 1;

  while (i < pattern.length) {
    if (pattern[i] === pattern[length]) {
      length++;
      lps[i] = length;
      i++;
    } else {
      if (length !== 0) {
        length = lps[length - 1];
      } else {
        lps[i] = 0;
        i++;
      }
    }
  }

  return lps;
}

// KMP Search
export function kmpSearch(text, pattern) {
  text = text.toLowerCase();
  pattern = pattern.toLowerCase();

  if (pattern.length === 0) return true;
  if (text.length === 0) return false;

  const lps = buildLPS(pattern);

  let i = 0; // text index
  let j = 0; // pattern index

  while (i < text.length) {
    if (text[i] === pattern[j]) {
      i++;
      j++;
    }

    if (j === pattern.length) {
      return true;
    } else if (i < text.length && text[i] !== pattern[j]) {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i++;
      }
    }
  }

  return false;
}

// Search multiple patterns
export function searchKeywords(text, keywords) {
  const found = [];

  for (const keyword of keywords) {
    if (kmpSearch(text, keyword)) {
      found.push(keyword);
    }
  }

  return found;
}
