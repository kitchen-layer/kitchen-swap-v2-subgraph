import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts/index'

export const FACTORY_ADDRESS = '0x7B5aF4Ef061DBF061488f7da3ADC418b8E4a99A5'

// WHYPE
export const REFERENCE_TOKEN = '0x4200000000000000000000000000000000000006'

// USDT / WHYPE
export const STABLE_TOKEN_PAIRS = ['0x9fDED442A608f220D61a1a7CF9f38D48B56C29Ca']

// token where amounts should contribute to tracked volume and liquidity
export const WHITELIST: string[] = [
  '0x4200000000000000000000000000000000000006', // WHYPE
  '0x5739988Bc59cAbB99168Df2A5483b80D76D88808', // USDT
  '0x8c168cD0B207Dfc0f7a195D88CE7F1A4370e3050', // USDC
]

export const STABLECOINS = [
  '0x5739988Bc59cAbB99168Df2A5483b80D76D88808', // USDT
  '0x8c168cD0B207Dfc0f7a195D88CE7F1A4370e3050', // USDC
]

// minimum liquidity required to count towards tracked volume for pairs with small # of Lps
export const MINIMUM_USD_THRESHOLD_NEW_PAIRS = BigDecimal.fromString('10000')

// minimum liquidity for price to get tracked
export const MINIMUM_LIQUIDITY_THRESHOLD_ETH = BigDecimal.fromString('1')

export class TokenDefinition {
  address: Address
  symbol: string
  name: string
  decimals: BigInt
}

export const STATIC_TOKEN_DEFINITIONS: TokenDefinition[] = []

export const SKIP_TOTAL_SUPPLY: string[] = []
