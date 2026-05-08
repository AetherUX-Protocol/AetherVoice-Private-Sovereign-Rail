# AetherVoice: Private AI Trust Rail (Umbra + QVAC) 🛡️⛓️

**"Verify with Intelligence. Settle with Silence."**

AetherVoice is a context-aware, privacy-preserving trust infrastructure for high-risk B2B transactions. It solves the strategic vulnerability of public ledgers by merging **Tether QVAC’s local-first AI** with **Umbra’s confidential settlement layer**.

## 🚀 The Innovation: Intelligence-Gated Privacy
Most privacy protocols are passive. AetherVoice introduces **Conditional Confidentiality**. A transaction cannot be shielded or settled via the Umbra SDK unless it is first audited by the QVAC local-first AI. This ensures that the privacy layer is only utilized for verified, legitimate business intent.

## 🛠️ The Tech Stack
- **Privacy Layer:** [Umbra SDK](https://umbraprivacy.com) – Utilizing Confidential Transfers, Shielded Balances, and encrypted state updates powered by Arcium MXE.
- **Intelligence Layer:** [Tether QVAC](https://tether.io) – Local-first OCR and semantic analysis for fraud detection (Urgency Manipulation & Payment Diversion).
- **Compliance Layer:** **BSA 2026** – Utilizing Umbra **Viewing Keys** to provide selective disclosure for tax and legal audits without exposing the full treasury.

## 📂 Repository Architecture
- `/client`: Dashboard for managing shielded balances and viewing keys.
- `/qvac-engine`: Rust-based local inference engine for document auditing.
- `/umbra-bridge`: Core integration logic for Umbra’s confidential SPL standard.
- `/legal-kb`: Documentation and logic for BSA 2026 compliant "Compliance Packs."

## ⚙️ Setup & Deployment
1. **Clone & Install:**
   ```bash
   git clone [https://github.com/yourusername/AetherVoice-Private-Sovereign-Rail.git](https://github.com/yourusername/AetherVoice-Private-Sovereign-Rail.git)
   cd AetherVoice-Private-Sovereign-Rail
   npm install
   Environment Configuration:
   cp env.example .env
# Add your ARCIUM_CLUSTER_OFFSET and UMBRA_MXE_PROGRAM_ID
Run Audit & Settlement Simulation:
npm run start
⚖️ Institutional Utility
AetherVoice is designed for Global Trade (Fuel, Minerals, Procurement). By shielding transaction amounts and counterparty identities while maintaining a "Viewing Key" for auditors, we allow businesses to operate with absolute confidentiality while remaining 100% tax and legally compliant.

Built for the 2026 Umbra x Tether Frontier Track.
