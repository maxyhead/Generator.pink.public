import BigNumber from 'bignumber.js'

export const MAX_UINT= '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'

export const formatter = new Intl.NumberFormat('en-US', 
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    );

export const makeContract = (library, abi, address) => {
  return new library.eth.Contract(abi, address);
}

const blocksPerYear = new BigNumber(10518975); 



