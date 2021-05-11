import React from 'react';
import { useWeb3React } from '@web3-react/core';
import { addresses, abis } from "@project/contracts";
import { ipfs, pinHashtoPinata } from '../utils/utils';
import CID from 'cids'
import { Link } from '@material-ui/core'
import { useToasts } from 'react-toast-notifications'

const useUploadFile = (fileBuffer, documentTitle ,UUID) => {
    const { account, library, chainId } = useWeb3React()
    const [ message, setMessage ] = React.useState();
    const [ hash, setHash ] = React.useState();
    const { addToast } = useToasts()

    const handleUpload = React.useCallback(
      async () => {
        addToast('Uploading File to IPFS...', {
            appearance: 'info',
            autoDismiss: true,
        })  
       
        const { cid } = await ipfs.add(fileBuffer);

          if(cid !== undefined) {
            addToast(`Uploaded to IPFS || ${cid}`, {
                appearance: 'success',
                autoDismiss: true,
            })
          } else {
            addToast('Failed to Upload to IPFS', {
              appearance: 'error',
              autoDismiss: true,
            })
          }

        const cidv0 = new CID(cid);
        const cidv1 = cidv0.toV1();
        setHash(cidv1.toBaseEncodedString());
        addToast('Pinning Hash to Pinata...', {
            appearance: 'info',
            autoDismiss: true,
        })  
        await pinHashtoPinata(cid, documentTitle, UUID);

          addToast(<Link href={`https://gateway.pinata.cloud/ipfs/${cidv1.toBaseEncodedString()}`} target='_blank'>{`https://gateway.pinata.cloud/ipfs/${cidv1.toBaseEncodedString()}`}</Link>, {
            appearance: 'success',
            autoDismiss: true,
          });

        
      },
      [fileBuffer, documentTitle ,UUID],
    )
    
    return { hash, onUpload: handleUpload }
  }
  
  export default useUploadFile