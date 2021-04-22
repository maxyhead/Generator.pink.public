const Contract = artifacts.require("GeneratorBase");
const MAX_UINT = '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff';

module.exports = async function (deployer) {
    const accounts = await web3.eth.getAccounts();
    const addresses = { 
        dev: accounts[0],
    };
    const fee = '5'; 
    const feeReciver = addresses.dev;
    const oracleReff  = "0xDA7a001b254CD22e46d3eAB04d937489c93174C3"; // KOVAN ADDRESS

    await deployer.deploy(
        Contract,
        fee, 
        feeReciver, 
        oracleReff, 
        {from: addresses.dev}
    );

    const contract = await Contract.deployed();
    console.log('Contract deployed at: ', contract.address);


};
