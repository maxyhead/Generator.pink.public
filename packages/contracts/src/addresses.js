// This address points to a dummy ERC20 contract deployed on Ethereum Mainnet,
// Goerli, Kovan, Rinkeby and Ropsten. Replace it with your smart contracts.
const addresses = {
  // kovan 
  42: { 
    generator: "0x05f86E43540214245B2E7096Fc897Fc9165e205d" 
  },
  // mainnet
  1: {
    generator: "0x3700367bAa14B198BAa8591B4C38A17cD9599568"
  }
};

export default addresses;
