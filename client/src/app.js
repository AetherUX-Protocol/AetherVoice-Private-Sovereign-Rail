import React, { useState } from 'react';
import SovereignAudit from './components/SovereignAudit';
import PrivacyDashboard from './components/PrivacyDashboard';
import { useUmbraShield } from './hooks/useUmbraShield';

function App() {
  const [auditResult, setAuditResult] = useState(null);
  const [settlementData, setSettlementData] = useState(null);
  const { executeShieldedPayment, isShielding } = useUmbraShield();

  const handleSettlement = async () => {
    const data = await executeShieldedPayment(auditResult.hash, 1000, "RECIPIENT_WALLET");
    setSettlementData(data);
  };

  return (
    <div className="min-h-screen bg-black text-zinc-300 p-8 flex flex-col items-center justify-center font-sans">
      <div className="w-full max-w-md">
        <header className="mb-8 flex justify-between items-end border-b border-zinc-800 pb-4">
          <div>
            <h1 className="text-3xl font-black text-white tracking-tighter uppercase italic">AetherVoice</h1>
            <p className="text-purple-500 text-[10px] font-bold tracking-[0.2em] uppercase">Private Trade Rail</p>
          </div>
          <div className="text-right">
            <span className="text-[9px] text-zinc-600 font-mono">STATUS: SOVEREIGN</span>
          </div>
        </header>

        {/* Intelligence Layer */}
        <SovereignAudit onVerified={setAuditResult} />

        {/* Umbra Execution Layer */}
        {auditResult && !settlementData && (
          <button
            onClick={handleSettlement}
            disabled={isShielding}
            className="w-full mt-6 py-4 bg-white text-black font-bold rounded-xl hover:bg-zinc-200 transition-all flex items-center justify-center gap-2"
          >
            {isShielding ? "Shielding Payment..." : "Execute Private Settlement"}
          </button>
        )}

        {/* Confidentiality Dashboard */}
        {settlementData && <PrivacyDashboard txData={settlementData} />}
      </div>
    </div>
  );
}

export default App;
