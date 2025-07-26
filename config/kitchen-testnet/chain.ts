import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts/index'

export const FACTORY_ADDRESS = '0x1fb625ba3c45642d4485c45e90757d147a230054'

// WHYPE
export const REFERENCE_TOKEN = '0xaea851d35f86cd36efc573b7fb771d0756a67537'

// USDT / WHYPE
export const STABLE_TOKEN_PAIRS = ['0x1ebb8960610070ef41783d129e414d26b1aaf318']

// token where amounts should contribute to tracked volume and liquidity
export const WHITELIST: string[] = [
  '0xaea851d35f86cd36efc573b7fb771d0756a67537', // WHYPE
  '0x8c168cd0b207dfc0f7a195d88ce7f1a4370e3050', // USDT
  '0x5739988bc59cabb99168df2a5483b80d76d88808', // USDC
]

export const STABLECOINS = [
  '0x8c168cd0b207dfc0f7a195d88ce7f1a4370e3050', // USDT
  '0x5739988bc59cabb99168df2a5483b80d76d88808', // USDC
]

// minimum liquidity required to count towards tracked volume for pairs with small # of Lps
export const MINIMUM_USD_THRESHOLD_NEW_PAIRS = BigDecimal.fromString('0')

// minimum liquidity for price to get tracked
export const MINIMUM_LIQUIDITY_THRESHOLD_ETH = BigDecimal.fromString('0')

export class TokenDefinition {
  address: Address
  symbol: string
  name: string
  decimals: BigInt
}

export const STATIC_TOKEN_DEFINITIONS: TokenDefinition[] = []

export const SKIP_TOTAL_SUPPLY: string[] = []
