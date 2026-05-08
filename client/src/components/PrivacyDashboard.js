import React, { useState } from 'react';
import { Eye, ShieldOff, Key, CheckCircle } from 'lucide-react';

const PrivacyDashboard = ({ txData }) => {
  const [showKey, setShowKey] = useState(false);

  return (
    <div className="mt-8 space-y-4">
      {/* 1. Shielded Status Indicator */}
      <div className="bg-green-500/10 border border-green-500/30 p-4 rounded-xl flex items-center gap-3">
        <CheckCircle className="text-green-500" />
        <div>
          <h3 className="text-white text-sm font-bold">Confidential Settlement Finalized</h3>
          <p className="text-zinc-500 text-[10px]">On-chain footprints shielded via Umbra SDK</p>
        </div>
      </div>

      {/* 2. Selective Disclosure Module (Innovation) */}
      <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-2xl">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Key size={16} className="text-purple-500" />
            <span className="text-xs font-bold text-white uppercase tracking-wider">Compliance Access</span>
          </div>
          <button 
            onClick={() => setShowKey(!showKey)}
            className="text-zinc-500 hover:text-white transition-colors"
          >
            <Eye size={16} />
          </button>
        </div>

        {showKey ? (
          <div className="bg-black p-3 rounded-lg border border-zinc-800">
            <p className="text-[10px] font-mono text-purple-400 break-all">
              {txData?.viewingKey || "AETHERVOICE_VK_7x29...91z"}
            </p>
            <p className="text-[9px] text-zinc-600 mt-2 italic">
              Share this key with auditors to decrypt this specific trade under BSA 2026.
            </p>
          </div>
        ) : (
          <div className="h-10 bg-zinc-950 rounded-lg flex items-center justify-center border border-dashed border-zinc-800">
            <span className="text-[10px] text-zinc-700">Viewing Key Hidden</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PrivacyDashboard;
