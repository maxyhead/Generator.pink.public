import React from 'react';
import { useWeb3React } from '@web3-react/core';
import { addresses, abis } from "@project/contracts";
import { ipfs, pinHashtoPinata } from '../utils/utils';
import CID from 'cids'
import { useNotification } from '../components/notifications/provider/Provider.component'

const useUploadFile = (fileBuffer, documentTitle ,UUID) => {
    const { account, library, chainId } = useWeb3React()
    const [ message, setMessage ] = React.useState();
    const [ hash, setHash ] = React.useState();

    const handleUpload = React.useCallback(
      async () => {
        console.log(fileBuffer);
        console.log(documentTitle);
        console.log(UUID);
        const { cid } = await ipfs.add(fileBuffer);
        const cidv0 = new CID(cid);
        const cidv1 = cidv0.toV1();
        setHash(cidv1.toBaseEncodedString())  
        setMessage(`Uploaded to IPFS ${cid} || https://gateway.pinata.cloud/ipfs/${cidv1.toBaseEncodedString()}`);
        await pinHashtoPinata(cid, documentTitle, UUID);
        console.log('pushed to ipfs');
      },
      [fileBuffer, documentTitle ,UUID],
    )
    
    return { hash, onUpload: handleUpload }
  }
  
  export default useUploadFile