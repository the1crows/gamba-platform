import { PublicKey } from '@solana/web3.js'
import { FAKE_TOKEN_MINT, PoolToken, TokenMeta, makeHeliusTokenFetcher } from 'gamba-react-ui-v2'

// Get RPC from the .env file or default to the public RPC.
export const RPC_ENDPOINT = import.meta.env.VITE_RPC_ENDPOINT ?? 'https://mainnet.helius-rpc.com/'

// Solana address that will receive fees when somebody plays on this platform
export const PLATFORM_CREATOR_ADDRESS = new PublicKey(
  'E8tzfzDJa2CVc2BVXu6mmg83sp2JV4mXeVTvR5GwCJyu'
)

// Gamba explorer URL - Appears in RecentPlays
export const EXPLORER_URL = `https://explorer.gamba.so/`;

// Platform URL - Appears in ShareModal
export const PLATFORM_SHARABLE_URL = 'https://solbets.app'

// Creator fee (in %)
export const PLATFORM_CREATOR_FEE = 0.05 // 1% (1/100 = 0.01)

// Jackpot fee (in %)
export const PLATFORM_JACKPOT_FEE = 0.001 // 0.1% (0.1/100 = 0.001)

// Just a helper function
const lp = (tokenMint: PublicKey | string, poolAuthority?: PublicKey | string): PoolToken => ({
  token: new PublicKey(tokenMint),
  authority: poolAuthority !== undefined ? new PublicKey(poolAuthority) : undefined,
})

/**
 * List of pools supported by this platform
 * Make sure the token you want to list has a corresponding pool on https://explorer.gamba.so/pools
 * For private pools, add the creator of the Liquidity Pool as a second argument
 */
export const POOLS = [
  // SBC
  lp('AAWGz6ufbwssULAzdSpkrK9UTFhkf3Nfg9j2WqJFvBDk'),
  // Besa
  lp('FQMoiNiQGLngizBVdhxqD1o2k6rvcX9ComxjKucgBByH'),
  // SOL:
  lp('So11111111111111111111111111111111111111112'),
  // USDC:
  lp('EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'),
  // Wormhole:
  lp('85VBFQZC9TZkfaptBWjvUw7YbZjy52A6mjtPGjstQAmQ'),
]

// The default token to be selected
export const DEFAULT_POOL = POOLS[0]

/**
 * List of token metadata for the supported tokens
 * Alternatively, we can provide a fetcher method to automatically fetch metdata. See TOKEN_METADATA_FETCHER below.
 */
export const TOKEN_METADATA: (Partial<TokenMeta> & {mint: PublicKey})[] = [
  {
    mint: new PublicKey("AAWGz6ufbwssULAzdSpkrK9UTFhkf3Nfg9j2WqJFvBDk"),
    symbol: 'SBC',
    name: 'SolBets',
    image: "https://i.postimg.cc/RFgHkqVr/Design-uten-navn-1.png",
    decimals: 9,
    baseWager: 1 * 1e9,
  },
  {
    mint: new PublicKey("FQMoiNiQGLngizBVdhxqD1o2k6rvcX9ComxjKucgBByH"),
    symbol: 'BESA',
    name: 'Besa Gaming',
    image: "https://ipfs.coinsult.app/ipfs/QmTX3HRcNLVVbGsjMEAhNkfZtNH8xyDeVKLhMm7jgw5AmT",
    decimals: 9,
    baseWager: 1 * 1e9,
  }, 
  {
    mint: new PublicKey("So11111111111111111111111111111111111111112"),
    symbol: 'SOL',
    name: 'Solana',
    image: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png",
    decimals: 9,
    baseWager: 0.01 * 1e9,
  }, 
  {
    mint: new PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"),
    symbol: 'USDC',
    name: 'Usdc',
    image: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png",
    decimals: 6,
    baseWager: 1 * 1e6,
  }, 
  {
    mint: new PublicKey("85VBFQZC9TZkfaptBWjvUw7YbZjy52A6mjtPGjstQAmQ"),
    symbol: 'W',
    name: 'Wormhole',
    image: "https://img.fotofolio.xyz/?url=https%3A%2F%2Fwormhole.com%2Ftoken.png&width=200",
    decimals: 6,
    baseWager: 1 * 1e6,
  }, 
]

/**
 * A method for automatically fetching Token Metadata.
 * Here we create a fetcher that uses Helius metadata API, if an API key exists as an environment variable.
 */
export const TOKEN_METADATA_FETCHER = (
  () => {
    if (import.meta.env.VITE_HELIUS_API_KEY) {
      return makeHeliusTokenFetcher(
        import.meta.env.VITE_HELIUS_API_KEY,
        { dollarBaseWager: 1 },
      )
    }
  }
)()
