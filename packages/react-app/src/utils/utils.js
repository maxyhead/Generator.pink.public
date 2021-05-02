import BigNumber from 'bignumber.js'
import pinataSDK from '@pinata/sdk';
import CID from 'cids'
import axios from 'axios'

const FileType = require('file-type/browser');
const PINATA_API_KEY= 'b1c5782db19f6b99439b';
const PINATA_API_SECRET= 'd0a4e88f9630c7ed2526415e229edf108a1e84918f3e7b14d5d9af9c12774744';
const pinata = pinataSDK(PINATA_API_KEY, PINATA_API_SECRET);

const ipfsClient = require('ipfs-http-client')
var uniqid = require('uniqid');

export const MAX_UINT= '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'

export const checkFileType = async (url) => {
    const response = await fetch(url);
    const fileType = await FileType.fromStream(response.body);
    return fileType;
    //=> {ext: 'jpg', mime: 'image/jpeg'}
}

export const formatter = new Intl.NumberFormat('en-US', 
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    );

export const makeContract = (library, abi, address) => {
  return new library.eth.Contract(abi, address);
}

export  const unixdate = (date) => { 
  return (parseInt(date.getTime() / 1000).toFixed(0))
};

export const getUniqueID = () => {
  return uniqid();
}

export const convertTimestamp = (timestamp) => {
  var d = new Date(timestamp * 1000),	// Convert the passed timestamp to milliseconds
      yyyy = d.getFullYear(),
      mm = ('0' + (d.getMonth() + 1)).slice(-2),	// Months are zero based. Add leading 0.
      dd = ('0' + d.getDate()).slice(-2),			// Add leading 0.
      hh = d.getHours(),
      h = hh,
      min = ('0' + d.getMinutes()).slice(-2),		// Add leading 0.
      ampm = 'AM',
      time;

  if (hh > 12) {
      h = hh - 12;
      ampm = 'PM';
  } else if (hh === 12) {
      h = 12;
      ampm = 'PM';
  } else if (hh == 0) {
      h = 12;
  }

  // ie: 2013-02-18, 8:35 AM	
  time = yyyy + '/' + mm + '/' + dd ;

  return time;
}


export const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' }) // leaving out the arguments will default to these values

export const pinHashtoPinata = (multihash, _name, minterAddress) => {
  const cidv0 = new CID(multihash);
  const cidv1 = cidv0.toV1();  
  const url = `https://api.pinata.cloud/pinning/pinByHash`;
  const body = {
      hashToPin: cidv1.toBaseEncodedString(),
      host_nodes: [
          '/ip4/hostNode1ExternalIP/tcp/4001/ipfs/hostNode1PeerId',
          '/ip4/hostNode2ExternalIP/tcp/4001/ipfs/hostNode2PeerId'
      ],
      pinataMetadata: {
          name: _name,
          keyvalues: {
              customKey: `Minter: ${minterAddress}`,
              customKey2: 'Generator.pink'
          }
      }
  };
  
  axios.post(url, body, {
          headers: {
              pinata_api_key: PINATA_API_KEY,
              pinata_secret_api_key: PINATA_API_SECRET
          }
      }).then(function (response) {
          //handle response here
            console.log(response);
          return response;
      })
      .catch(function (error) {
          //handle error 
          console.log(error)
      });

}

export const checkPinataConnection = async () =>{
  await pinata.testAuthentication().then((result) => {
      //handle successful authentication here
      console.log(result);
      return result; 
  }).catch((err) => {
      
  });
}
const blocksPerYear = new BigNumber(10518975); 



