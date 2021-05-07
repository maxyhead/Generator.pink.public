import React from 'react';
import { useWeb3React } from '@web3-react/core';
import { getGeneratorContract } from '../utils/contracts'
import useCurrentPrice from './useCurrentPrice';
import { useToasts } from 'react-toast-notifications'

const useTransfer = (id, receiver) => {
    const { account, library, chainId } = useWeb3React()
    const fee = useCurrentPrice();
    const { addToast } = useToasts();


    const transfer = async (
        _receiver, 
        _id
        ) => {
            addToast('Waiting for transaction succes...', {
                appearance: 'info',
                autoDismiss: true,
            })
        const contract = getGeneratorContract(library, chainId);
        await contract.methods.transferFrom(
            account, 
            _receiver, 
            _id
        ).send({from: account}).then(()=> {
            addToast('Transaction Succes!', {
                appearance: 'success',
                autoDismiss: true,
            })
        }).catch((err) => {
            if(err.message.includes("User denied transaction signature")) {
                addToast('Denied Transaction', {
                    appearance: 'error',
                    autoDismiss: true,
                })
              } else {
                addToast('Transaction Failed', {
                    appearance: 'error',
                    autoDismiss: true,
                })
              }
        });
    }

    const handleTransfer = React.useCallback(
      async () => {
        await transfer(
            receiver, 
            id
        )
      },
      [account, id, receiver],
    )
  
    return {  onTransfer: handleTransfer }
  }
  
  export default useTransfer