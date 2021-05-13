import React from 'react';
import { useWeb3React } from '@web3-react/core';
import { addresses, abis } from "@project/contracts";
import { ipfs, pinHashtoPinata } from '../utils/utils';
import CID from 'cids'
import { useToasts } from 'react-toast-notifications'

const Hash = require('ipfs-only-hash');

const useGetHash = (fileBuffer) => {
    const { account, library, chainId } = useWeb3React()

    const [ hash, setHash ] = React.useState();
    const { addToast } = useToasts()

    const fetchInfo = React.useCallback(async (_fileBuffer) => {
        const hash = await Hash.of(_fileBuffer)
        // console.log(hash);
        const cidv0 = new CID(hash);
        const cidv1 = cidv0.toV1();
        setHash(cidv1.toBaseEncodedString());
        
    }, [account, library, fileBuffer])

    React.useEffect(() => {

        if (account && library && fileBuffer ) {
            fetchInfo(fileBuffer)
        }
       
    }, [account, library, fileBuffer, chainId])


    
    return hash;
  }
  
  export default useGetHash