const Contract = artifacts.require("");
const MAX_UINT = '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff';

module.exports = async function (deployer) {
    const accounts = await web3.eth.getAccounts();
    const addresses = { 
        dev: accounts[0],
        alice: accounts[1],
        dave: accounts[2], 
        kate: accounts[3],
        luke: accounts[4]
    };

  
    await deployer.deploy(
        Contract,
        {from: addresses.dev}
    );

    const contract = await Contract.deployed();
    console.log('Contract deployed at: ', contract.address);


};
