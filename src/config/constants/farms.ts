import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [

  {
    pid: 0,
    risk: 2,
    isTokenOnly: true,    
    lpSymbol: 'CCT',
    lpAddresses: {
      97: '',
      56: '0xF70ca0f2588dafb463E63EE18A206cF2F6516B84', // ZEFI-BUSD LP
    },
    tokenSymbol: 'CCT',
    tokenAddresses: {
      97: '',
      56: '0x3eeb7af2f42ec2b16bb56bad91d831a69212b569',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
    {
    pid: 1,
    risk: 2,
    lpSymbol: 'CCT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x048Bda449A672c9668d6d874D5ABe59B70809033',
    },
    tokenSymbol: 'CCT',
    tokenAddresses: {
      97: '',
      56: '0x3eeb7af2f42ec2b16bb56bad91d831a69212b569',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },  
 {
    pid: 8,
    risk: 5,
    lpSymbol: 'CCD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x6d3DAB508eCd71Bd2AE53fbcC2fB67A12B5d597D',
    },
    tokenSymbol: 'CCD',
    tokenAddresses: {
      97: '',
      56: '0xca0b3eeba1a9960b757f20d572dd96b0ed1e990b',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },  
  {
    pid: 2,
    risk: 2,
    lpSymbol: 'CCT-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xF70ca0f2588dafb463E63EE18A206cF2F6516B84',
    },
    tokenSymbol: 'CCT',
    tokenAddresses: {
      97: '',
      56: '0x3eeb7af2f42ec2b16bb56bad91d831a69212b569',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
 {
    pid: 3,
    risk: 2,
    lpSymbol: 'CCC-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x4531168F7cFad6c2Ea7a0509452249e5f3C2e631',
    },
    tokenSymbol: 'CCC',
    tokenAddresses: {
      97: '',
      56: '0x86159586cb855eec533c452137f74bbd8530bbe9',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },   
   

  {
    pid: 5,
    risk: 2,
    lpSymbol: 'CCO-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xc8B6363C9e43FbbDae9EEA3eED1394bD65DA8448',
    },
    tokenSymbol: 'CCO',
    tokenAddresses: {
      97: '',
      56: '0xb8da1fc4cc5af6e2f8b707c76362b27c7e2c53b7',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },  
    
 {
    pid: 4,
    risk: 2,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  }, 
  {
    pid: 9,
    risk: 2,
    lpSymbol: 'CCDT-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xc14e17bbbd90da1f23588757bad588c771e1ade3',
    },
    tokenSymbol: 'CCDT',
    tokenAddresses: {
      97: '',
      56: '0xf5359086EeF96cbF0D081c1F454D237edd41e704',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  }, 
 


]

export default farms
