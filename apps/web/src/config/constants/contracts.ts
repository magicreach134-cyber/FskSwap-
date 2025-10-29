import { ChainId } from '@pancakeswap/sdk'

export const fskSwapContracts = {
  [ChainId.BSC_TESTNET]: {
    factory: '0xa02A534CdA0E24bE54f9d06Ca005d4611eE5a6bd',
    router: '0x148A41098cF2200d3FD145f2d81bb634e6c0Ff75',
    fskToken: '0x784f97B0c8116727F8B6417b86975F77411e219B',
    fusdtToken: '0x02F1303f087C6D78F4142bc2dE8430348982d549',
    lpTokenFusdt: '0x859F055bC3FAF7f151CEf60dE3407A4C9e2739f5',
    lpStakingFusdt: '0x7282bb643c58C23503DAD922B165f694c8Fe9eD1',
    lpTokenBnb: '0xd6ecc90db6f6997ee0da0f1f362545201192fd41',
    lpStakingBnb: '0x43cacAfDf758af9D42c2f7Bb54A0b98F83ba1616',
    wbnb: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
  },
}
