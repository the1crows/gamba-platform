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
    image: "https://bafkreihq6igoxo5jxvn4vrffusbw6cc5hvo4g4tc66bivqza3jo6nkq2bu.ipfs.nftstorage.link/",
    decimals: 9,
    baseWager: 1 * 1e9,
   }
   {
    mint: new PublicKey("JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN"),
    symbol: 'JUP',
    name: 'Jupiter',
    image: "https://static.jup.ag/jup/icon.png",
    decimals: 6,
    baseWager: 1 * 1e6,
   },
]
