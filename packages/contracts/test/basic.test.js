const traveler = require("ganache-time-traveler");
const Contract = artifacts.require("");
let accounts;
let contract;

const MAX_UINT = '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff';
const ZERO_ADDRESS = "0x" + "0".repeat(40);

const makeContract = (abi, address) => {
    return new web3.eth.Contract(abi, address);
}


contract('BASIC', accounts => {

    before('Make contract instances', async() => {
        let accounts = await web3.eth.getAccounts();
        
     
        contract = await Contract.deployed();
        
    }) 

    beforeEach(async() => {
     
    });

    afterEach(async() => {
        
    });  
    

    it('', async()=> {
        

    });

   

  
})
