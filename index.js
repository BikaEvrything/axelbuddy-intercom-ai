import Intercom from '@tracsystems/intercom';
import Sidechannel from '@tracsystems/sidechannel';

console.clear();

console.log(`
========================================
        AXELNODE AI INTERCOM
========================================
Mode        : Web3 Signal + Education
Author      : Axel
Build       : Custom Intercom Node
========================================
`);

const peer = new Intercom({
  name: 'AxelNode',
});

const sidechannel = new Sidechannel(peer, {
  onMessage: (channel, payload) => {
    const text = String(payload?.message || payload || '').toLowerCase();
    let reply;

    // TOKENOMICS
    if (text.includes('tokenomics')) {
      reply = `📊 TOKENOMICS BREAKDOWN
• Total / Max Supply
• Distribution (Team vs Community)
• Utility & Real Use Case
• Inflation / Emission Model`;
    }

    // LIQUIDITY
    else if (text.includes('liquidity')) {
      reply = `💧 LIQUIDITY EXPLAINED
Liquidity pools allow token swaps.
Low liquidity = high volatility.
Always check LP lock status.`;
    }

    // SWAP GUIDE
    else if (text.includes('swap')) {
      reply = `🔁 SAFE SWAP GUIDE
1. Verify contract address
2. Confirm correct network
3. Adjust slippage carefully
4. Review before signing`;
    }

    // RISK CHECK
    else if (text.includes('is this safe') || text.includes('safe')) {
      reply = `⚠️ BASIC RISK CHECK
• Check contract verification
• Review holder distribution
• Look for liquidity lock
• Avoid anonymous devs`;
    }

    // DEFAULT RESPONSE
    else {
      reply = `🤖 AxelNode Active

Ask about:
• tokenomics
• liquidity
• swap
• is this safe`;
    }

    peer.sidechannel.broadcast(channel, {
      from: 'AxelNode',
      message: reply,
    });
  },
});

peer.on('ready', () => {
  console.log("AxelNode is LIVE and listening...");
  console.log("Peer Address:", peer.peerId);
});
