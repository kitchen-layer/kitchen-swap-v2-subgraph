import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts/index'

import { Factory as FactoryContract } from '../../generated/templates/Pair/Factory'
import { FACTORY_ADDRESS } from './chain'

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'

export const ZERO_BI = BigInt.fromI32(0)
export const ONE_BI = BigInt.fromI32(1)
export const ZERO_BD = BigDecimal.fromString('0')
export const ONE_BD = BigDecimal.fromString('1')
export const BI_18 = BigInt.fromI32(18)

export const factoryContract = FactoryContract.bind(Address.fromString(FACTORY_ADDRESS))
export const ALMOST_ZERO_BD = BigDecimal.fromString('0.000001')
