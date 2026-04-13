@AGENTS.md

# NyayaSetu — Project Brief for Claude

> **Nyaya** = Justice | **Setu** = Bridge  
> AI-Powered Legal Aid for Every Indian

---

## What This Project Is

NyayaSetu is a full-stack AI web application that helps any Indian citizen understand legal documents in plain Hindi and English. The user pastes or speaks any legal document — rent agreement, offer letter, RTI, terms & conditions, government notice — and three AI personas analyse it simultaneously and return a structured verdict with flagged risks, plain-language explanations, and clear action steps.

The project is built for a college hackathon under the **Open Innovation** track. The target users are students, first-jobbers, tenants, and low-income citizens who cannot afford legal consultation.

---

## The Problem

- 90% of Indians cannot understand legal language
- 1.5 crore+ court cases are pending due to uninformed decisions
- Access to a lawyer costs ₹2,000/hour — unaffordable for most
- Students sign internship bonds they don't understand
- Tenants sign rent agreements with hidden penalty clauses
- Citizens miss RTI deadlines and government scheme eligibility
- First-jobbers accept T&Cs that waive critical rights

**Root cause:** Legal language is intentionally complex, and legal aid is financially inaccessible.

---

## The Solution

NyayaSetu convenes an AI "Sabha" (council) of three expert personas that analyse any legal document simultaneously:

### The Three Voices

| Persona | Name | Role |
|---|---|---|
| ⚖️ The Lawyer | **Vakil** | Identifies risky clauses, illegal terms, and what the user can legally challenge |
| 🧑‍🌾 The Common Man | **Aam Aadmi** | Explains every clause in plain, simple Hindi — no jargon |
| 🏛️ The Judge | **Nyayaadheesh** | Delivers final verdict, risk score (1–10), and clear next action steps |

### The Unseen
A fourth layer — the AI also proactively flags risks the user never even asked about. Hidden clauses, unusual terms, legal traps that most people would miss entirely.

### Output
- Risky clauses highlighted in red
- Plain Hindi explanation of every section
- Risk score (1–10)
- Top 3 action items
- Downloadable PDF summary (for bank, HR, court, or landlord use)

---

## Technical Architecture

### Stack
- **Frontend:** React.js (Vite)
- **Backend:** Node.js + Express
- **AI:** Claude API (Anthropic) or Gemini API — three parallel prompt chains
- **Hindi Input:** Web Speech API (voice-to-text)
- **PDF Export:** Puppeteer or jsPDF (server-side)
- **Styling:** Tailwind CSS

### How It Works — Step by Step

```
User Input (paste or speak)
        ↓
Frontend (React) sends document text to backend via REST API
        ↓
Backend (Node.js) runs 3 parallel API calls to Claude:
    → Prompt Chain 1: Vakil system prompt → Legal analysis
    → Prompt Chain 2: Aam Aadmi system prompt → Plain Hindi explanation
    → Prompt Chain 3: Nyayaadheesh system prompt → Verdict + risk score
        ↓
Responses merged + risk score computed
        ↓
Flagged clauses rendered in red on frontend
        ↓
User downloads PDF summary
```

### API Prompt Design

Each persona has a distinct system prompt engineered for its role:

**Vakil prompt (example):**
```
You are Vakil, an expert Indian lawyer. Analyse the following legal document.
Identify every risky, unusual, or potentially illegal clause.
For each clause: quote it, explain why it is risky, and state what the user can do legally.
Also flag anything the user did not ask about but should know — call this "The Unseen".
Respond in English. Be precise and direct.
```

**Aam Aadmi prompt (example):**
```
You are Aam Aadmi, a helpful friend who explains legal documents in simple Hindi.
The user is not a lawyer. Explain every section of this document in plain Hindi (Devanagari script).
Use simple words. No jargon. Imagine you are explaining to a Class 10 student.
```

**Nyayaadheesh prompt (example):**
```
You are Nyayaadheesh, a senior judge reviewing this legal document.
Give a final verdict:
1. Risk score out of 10 (10 = extremely risky)
2. Top 3 things the user must act on immediately
3. Whether they should sign, negotiate, or reject
4. One-line summary in both Hindi and English
```

### Flow Timing
- Voice input → text: ~1 second
- 3 parallel API calls: ~5–8 seconds
- PDF generation: ~1–2 seconds
- **Total: under 12 seconds end to end**

---

## Key Features

| Feature | Description |
|---|---|
| Multi-language input | Paste text or speak in Hindi / English |
| 3-voice Sabha | Parallel AI analysis from 3 distinct personas |
| The Unseen | Proactive risk detection beyond what user asked |
| Red clause highlighting | Risky sections visually flagged in the UI |
| Risk score | 1–10 numerical score for the overall document |
| PDF export | Downloadable plain-English / Hindi summary |
| No login required | Fully accessible, no account needed |
| Mobile friendly | Works on any smartphone browser |
| Zero data storage | Document is not stored after analysis |

---

## Pages / Screens

1. **Landing Page** — Hero, problem statement, how it works, CTA
2. **App Page** — Document input (paste or speak), language toggle
3. **Results Page** — 3-voice output, flagged clauses in red, risk score
4. **Export Page** — PDF preview and download
5. **(Optional) History Page** — Past analyses saved locally in browser

---

## Design Language

- **Color palette:** Navy (`#1A2B4A`) + Saffron (`#E8762D`) + Cream (`#F4F1EB`)
- **Typography:** Georgia (headings) + Calibri / Inter (body)
- **Tone:** Authoritative but accessible — like a trusted advisor, not a cold legal tool
- **Inspiration:** Varant (varant.vercel.app) — culturally rooted Indian AI product design
- **Hindi script:** Used throughout for labels, persona names, and output text

---

## Personas & Target Users

| User | Use Case |
|---|---|
| College student | Internship offer letter with bond clause |
| Tenant | Rent agreement with hidden penalties |
| First-jobber | Employment contract with NDA or non-compete |
| Citizen | RTI application or government notice |
| Consumer | App/service terms & conditions |
| Farmer / rural user | Loan agreement or land lease (Hindi input) |

---

## What Makes This Win a Hackathon

1. **Live demo is instant** — paste a real rent agreement on stage, get results in 10 seconds
2. **Every judge has signed something they didn't understand** — universal relatability
3. **Culturally rooted** — Indian naming (Vakil, Aam Aadmi, Nyayaadheesh) makes it memorable
4. **Real social impact** — not a toy, solves a genuine access-to-justice gap in India
5. **"The Unseen" is the wow moment** — AI flags what you didn't even know to ask
6. **Buildable in 1–2 weeks** — React + Node + Claude API, no complex infra needed

---

## Team Split (Suggested)

| Role | Tasks |
|---|---|
| Frontend Dev | React UI, results page, red clause highlighting, PDF preview |
| Backend Dev | Node.js API, Claude prompt chains, PDF generation |
| AI/Prompt Engineer | System prompt design for all 3 personas, response parsing |
| Designer / Presenter | UI polish, pitch deck, demo script, presentation |

---

## Pitch — One Line

> "90% of Indians sign documents they don't understand. NyayaSetu fixes that."

## Tagline

> **न्याय सबके लिए — Justice for All**

---

## Project Status

- [ ] Repo setup (React + Node monorepo)
- [ ] Landing page
- [ ] Document input UI (paste + voice)
- [ ] Claude API integration (3 parallel chains)
- [ ] Results rendering (red flags, risk score)
- [ ] PDF export
- [ ] Hindi voice input
- [ ] Mobile responsiveness
- [ ] Demo preparation
- [ ] Pitch deck (done ✅)
- [ ] Pitch script (done ✅)

---

*Built for Open Innovation Hackathon 2025 · Greater Noida · Full Stack + AI Track*
