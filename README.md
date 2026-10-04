# NyayaPraman

> **“Where Law Meets Evidence.”**

NyayaPraman is a legal intelligence and forensic evidentiary verification platform. It converts court orders into structured obligations, connects them with law, case facts, and evidence in a unified graph, compares the **EXPECTED** state with the **OBSERVED** state, detects missing evidence and contradictions, and produces an explainable review package.

A human professional always makes the final legal decision.

---

## 🏛️ Pipeline Architecture

$$\text{Case} \rightarrow \text{Legal Issue} \rightarrow \text{Law} \rightarrow \text{Court Order} \rightarrow \text{Obligation} \rightarrow \text{Expected State} \rightarrow \text{Evidence} \rightarrow \text{Observed State} \rightarrow \text{Verification} \rightarrow \text{Human Review} \rightarrow \text{Next Action}$$

---

## 🚀 How to Run

1. **Start the local server**:
   ```bash
   npm start
   ```
2. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000).
3. **Experience the Landing Page**:
   Enjoy the full-screen cinematic gavel video with the bold `NYAYAPRAMAAN` typography and tagline.
4. **Enter the Application**:
   Click **"TAP TO START"** at the bottom to transition into the NyayaPraman workspace.

---

## 📂 Folder Structure

```
nyaya/
├── index.html                   # Untouched Welcome / Landing Page (pure full-screen video)
├── styles.css                   # Welcome page styling tokens
├── script.js                    # Landing page video & navigation handler
├── home.html                    # Application mount shell
├── server.js                    # Zero-dependency HTTP range-streaming server
├── build.js                     # Lightning-fast esbuild bundler
├── test-safety.js               # Hard safety guard unit test scanner
├── package.json                 # Project configuration & npm scripts
├── src/
│   ├── types.ts                 # Strongly-typed legal & graph schema
│   ├── index.tsx                # React application entry point
│   ├── App.tsx                  # Pipeline screen router & global modals
│   ├── state/
│   │   └── store.tsx            # Global state (modes, case switching, review actions)
│   ├── seed/
│   │   ├── demoCase.ts          # Primary Demo Case: Sharma v. QuickElectro (7 docs)
│   │   ├── altCases.ts          # Alternative Cases: Verma v. NexaHome, Gupta v. AirFly
│   │   └── legalDatabase.ts     # CPA 2019, BSA 2023, BNS/BNSS, NI Act 138, citations
│   ├── engines/
│   │   ├── compiler.ts          # Order-to-Outcome Compiler
│   │   ├── differenceEngine.ts  # Expected vs Observed State Difference Engine
│   │   ├── missingEvidence.ts   # Missing evidence detector
│   │   ├── contradiction.ts     # Cross-document contradiction detector
│   │   ├── askEngine.ts         # "Ask NyayaPraman" 10-step animated reasoning pipeline
│   │   └── safetyGuard.ts       # Runtime scanner for forbidden judicial conclusions
│   └── components/
│       ├── Layout.tsx           # App header, mode switcher, pipeline stepper, persistent footer
│       ├── InnovationBadge.tsx  # Subtle innovation chips
│       ├── SourceDrawer.tsx     # Evidentiary provenance & snippet drawer
│       ├── TrustSafetyModal.tsx # AI vs Human responsibility matrix & safety bounds
│       ├── AskNyayaModal.tsx    # Natural language query modal with animated stepper
│       ├── GraphCanvas.tsx      # Unified Case + Law + Evidence interactive graph
│       └── screens/
│           ├── ScreenA_ModeSelect.tsx        # Screen A: Citizen / Lawyer / Compliance
│           ├── ScreenB_CaseCreate.tsx        # Screen B: Case metadata & Load Demo Case
│           ├── ScreenC_UploadDocs.tsx        # Screen C: Drag & Drop with simulated OCR
│           ├── ScreenD_CaseUnderstanding.tsx # Screen D: Parties, Dates, Claims, Facts, Issues
│           ├── ScreenE_IssueMatrix.tsx       # Screen E: Sortable lawyer matrix with gaps & CSV
│           ├── ScreenF_RAGSearch.tsx         # Screen F: Statutory RAG & Temporal Resolver (15 Aug 2024)
│           ├── ScreenG_GraphView.tsx         # Screen G: Interactive Graph & Reasoning Path
│           ├── ScreenH_Timeline.tsx          # Screen H: Chronological timeline with date flags
│           ├── ScreenI_OrderCompiler.tsx     # Screen I: Animated text-to-obligation compiler
│           ├── ScreenJ_ExpectedVsObserved.tsx# Screen J: Diff panels, gap calculations & authority
│           ├── ScreenK_Verification.tsx      # Screen K: Status badges, missing evidence & contradictions
│           ├── ScreenL_HumanReview.tsx       # Screen L: Human adjudication & live audit trail
│           └── ScreenM_GenerateReport.tsx    # Screen M: 4 report archetypes & PDF/MD export
```

---

## 🛡️ Hard Safety Rules Enforced

- **Zero Conclusory Words**: Runtime scanner permanently guards against words like `guilty`, `fraud`, `contempt`, `liable`, or `violated the order`.
- **Allowed Status Taxonomy**: `VERIFIED`, `PARTIAL`, `INSUFFICIENT EVIDENCE`, `POSSIBLE CONTRADICTION`, `NOT YET VERIFIED`, `HUMAN REVIEW REQUIRED`.
- **Safe Abstention Rule**:
  > *"The available evidence is insufficient to establish complete compliance. Additional evidence is required for human review."*
- **Persistent Footer on Every Screen**:
  > *"AI-assisted analysis. Final legal determination rests with a human professional."*
- **To run safety unit tests**:
  ```bash
  npm run test:safety
  ```

---

## 🔌 Swapping Real LLM / OCR / Backend Later

All engine modules (`compiler.ts`, `differenceEngine.ts`, `missingEvidence.ts`, `askEngine.ts`) are structured as **pure functions with typed inputs and outputs**:
1. **Replace OCR**: In `ScreenC_UploadDocs.tsx`, swap the simulated timer with an asynchronous call to a cloud OCR / document parser (e.g. AWS Textract or Azure Document Intelligence).
2. **Replace RAG / Embeddings**: In `ScreenF_RAGSearch.tsx` and `askEngine.ts`, replace the local keyword/rerank lookup with vector queries against an external Pinecone/Qdrant vector database indexed with the Indian Code or state Gazettes.
3. **Replace Compiler**: In `ScreenI_OrderCompiler.tsx`, send the raw court order text to a structured LLM prompt (e.g. Gemini 1.5 Pro) with function calling / JSON Schema output matching the `Obligation` type.
4. **Add Database Persistence**: In `store.tsx`, swap the in-memory React state with PostgreSQL / Supabase REST API endpoints for persistent multi-tenant audit logs.

---

## ⏱️ Click-by-Click 3-Minute Demo Script

| Timestamp | Screen | Action | Key Takeaway to Present |
|---|---|---|---|
| **0:00 - 0:20** | **Landing Page** | Open `http://localhost:3000`. Click **"TAP TO START"**. | Untouched cinematic welcome experience transitions into NyayaPraman. |
| **0:20 - 0:40** | **Screen A & B** | Select **Lawyer Mode**. Click **"Load Demo Case"** in Screen B and proceed. | Seamless multi-stakeholder adaptation and pre-seeded case schema. |
| **0:40 - 1:00** | **Screen C & D** | View 7 attached demo docs with OCR scores. Click **"Inspect"** to open the Source Drawer. Move to Screen D. | Document classification chips, tamper-evident hash, and structured entity synthesis. |
| **1:00 - 1:25** | **Screen E & F** | In Screen E, inspect the amber highlighted gaps and click **"Export CSV"**. In Screen F, click **"Temporal Legal Resolver (15 Aug 2024 Demo)"**. | Demonstrates BNS/BNSS/BSA transition post-1 July 2024 and Citation Auditor warnings. |
| **1:25 - 1:50** | **Screen G, H & I** | In Screen G, toggle **"Reasoning Path"**. In Screen H, view the 5-day late badge. In Screen I, click **"Re-Compile Order"**. | Animated text-to-obligation compiler extracts ₹2,00,000 within 30 days. |
| **1:50 - 2:20** | **Screen J & K** | In Screen J, inspect Expected (₹2,00,000) vs Observed (₹1,25,000) gap. In Screen K, view the **PARTIAL / INSUFFICIENT EVIDENCE** badge and cross-document contradictions. | Authority ranking (Bank > Receipt > Affidavit) and missing evidence detection. |
| **2:20 - 2:40** | **Screen L & M** | In Screen L, add a comment and click **"Accept Flag"**, then **"Mark Reviewed"**. In Screen M, click **"Compliance Review Report"** and export. | Live audit trail, official human verification record, and court-ready exports. |
| **2:40 - 3:00** | **Ask NyayaPraman** | Click the **"Ask NyayaPraman"** top button. Run the benchmark query: *"Has the respondent definitely violated the court order...?"* | Watch the **10-step animated reasoning stepper**, ethical reframing, and neutral evidentiary finding. |
