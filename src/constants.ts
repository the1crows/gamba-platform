import { GambaStandardTokens, TokenMeta } from 'gamba-react-ui-v2'
import { PublicKey } from '@solana/web3.js'

// Can be configured in .env
export const RPC_ENDPOINT = 'https://mainnet.helius-rpc.com/?api-key=4746c733-040f-4e41-9835-c20b26d4ec67'

// Change this value to your Solana address
export const PLATFORM_CREATOR_ADDRESS = new PublicKey('E8tzfzDJa2CVc2BVXu6mmg83sp2JV4mXeVTvR5GwCJyu')

// Appears in ShareModal
export const PLATFORM_SHARABLE_URL = 'https://solbets.app'

// List of tokens supported by this platform
export const TOKENS: TokenMeta[] = [
  GambaStandardTokens.sol,
  GambaStandardTokens.usdc
  {
    mint: new PublicKey("AAWGz6ufbwssULAzdSpkrK9UTFhkf3Nfg9j2WqJFvBDk"),
    symbol: 'SBC',
    name: 'SolBets',
    image: "https://i.postimg.cc/RFgHkqVr/Design-uten-navn-1.png",
    decimals: 9,
    baseWager: 1
  }
]
