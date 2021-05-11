import React from 'react';
import { useWeb3React } from '@web3-react/core';
import { addresses, abis } from "@project/contracts";
import { getGeneratorContract } from '../utils/contracts'
import { useToasts } from 'react-toast-notifications'

const useApprove = (id) => {
    const { account, library, chainId } = useWeb3React()
    const { addToast } = useToasts();


    const approve = async (_id) => {
        addToast('Waiting for transaction succes...', {
            appearance: 'info',
            autoDismiss: true,
        })
        const contract  = getGeneratorContract(library, chainId);
        await contract.methods.approve(
            account, 
            _id
        ).send({from: account}).then(()=> {
            addToast('Transaction Succes', {
                appearance: 'succes',
                autoDismiss: true,
            })

        }).catch((err) => {
          if(err.message.includes("User denied transaction signature")) {
            addToast('Something went wrong...', {
              appearance: 'error',
              autoDismiss: true,
            })
            
          }
        })
    }

    const handleApprove = React.useCallback(
      async () => {
        await approve(
            id
        )
        // console.log(message);
      },
      [account, id, chainId],
    )
  
    return { onApprove: handleApprove }
  }
  
  export default useApprove