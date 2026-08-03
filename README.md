# 🛡️ Placement Shield

> **A DSA-Powered Recruitment Scam Detection System**

Placement Shield is a web application that helps students identify fake placement and internship offers before they become victims of recruitment scams.

The application analyzes placement messages using **Data Structures and Algorithms (DSA)** instead of AI, making the detection process fast, lightweight, and explainable.

---

## 🚀 Features

- ✅ Detects fake placement and internship messages
- 🏢 Verifies company names against trusted companies
- 🔍 Detects suspicious keywords using **HashMap**
- ⚡ Detects scam phrases using **KMP String Matching**
- ✏️ Detects intentionally misspelled scam words using **Edit Distance (Levenshtein Distance)**
- 📊 Generates a Scam Risk Score (0–100)
- 🚨 Classifies messages as **Low**, **Medium**, or **High Risk**
- 💡 Provides recommendations to the user
- 🎨 Modern React-based user interface

---

# 🖥️ Tech Stack

- React.js
- JavaScript (ES6+)
- CSS3
- Vite

---

# 📚 Data Structures & Algorithms Used

## 1️⃣ HashMap

Used for fast lookup of suspicious keywords.

Examples:

- OTP
- Telegram
- Registration
- Payment
- Security Deposit

**Time Complexity**

- Search → **O(1)** (Average)

---

## 2️⃣ KMP (Knuth-Morris-Pratt Algorithm)

Used to efficiently detect complete scam phrases.

Examples:

- Pay Registration Fee
- Selected Without Interview
- Join Telegram Group

**Time Complexity**

- Pattern Matching → **O(n + m)**

---

## 3️⃣ Edit Distance (Levenshtein Distance)

Detects intentionally misspelled words used by scammers.

Examples:

- Telegrm → Telegram
- Gooogle → Google
- Microsft → Microsoft

**Time Complexity**

- **O(m × n)**



# ⚙️ How It Works

1. User enters the company name.
2. User pastes the placement message.
3. Company is verified using the trusted company database.
4. HashMap detects suspicious keywords.
5. KMP detects complete scam phrases.
6. Edit Distance detects misspelled scam words.
7. Risk Calculator generates the final score.
8. The application displays:

- Risk Score
- Risk Level
- Company Status
- Matched Keywords
- Matched Scam Phrases
- Recommendation

---

# 🏗️ System Architecture

```text
User Input
      │
      ▼
React Frontend
      │
      ▼
Analyser.js
      │
 ┌────┼──────────────┐
 ▼    ▼              ▼
HashMap   KMP   Edit Distance
      │
      ▼
Risk Calculator
      │
      ▼
Result Dashboard
```

---

# 📊 Risk Levels

| Score | Risk Level |
|--------|------------|
| 0 – 39 | 🟢 Low Risk |
| 40 – 69 | 🟠 Medium Risk |
| 70 – 100 | 🔴 High Risk |

---

# 🎯 Functional Requirements

- Accept placement messages
- Verify company names
- Detect scam keywords
- Detect scam phrases
- Detect misspelled words
- Calculate scam risk score
- Display recommendations

---

# 🔒 Non-Functional Requirements

- Fast response time
- Accuracy
- Reliability
- Scalability
- User-friendly interface
- Maintainability
- Lightweight architecture

---

# 🌟 Future Enhancements

- AI/ML-based scam detection
- Browser extension support
- Email scam detection
- QR Code analysis
- Real-time scam database
- Admin dashboard
- Cloud database integration

---

# 👥 Team Members

- Aayushi Chaudhary
- Gaurika Chandna
- Tannu Choudhary
- Avni Attri
- Bhoomi Kalra

---

# 📸 Project Preview

> Add screenshots of your application here.

Example:

- Home Page
- Risk Analysis Result
- High Risk Detection
- Low Risk Detection

---

# 💡 Motivation

Recruitment scams are increasing rapidly, especially among students searching for internships and placements.

Placement Shield aims to provide a simple, fast, and explainable solution using Data Structures and Algorithms to help users identify suspicious recruitment messages before sharing personal information or making payments.

---

# ⭐ If you like this project

If you found this project useful, don't forget to ⭐ star the repository!

---

## 📜 License

This project is developed for educational and academic purposes.
