import React from 'react';
import { useWeb3React } from '@web3-react/core';
import { getGeneratorContract } from '../utils/contracts'
import useCurrentPrice from './useCurrentPrice';
import { useToasts } from 'react-toast-notifications'

const useBurn = (id) => {
    const { account, library, chainId } = useWeb3React()
    const { addToast } = useToasts();

    const burn = async (
        _id
        ) => {
            addToast('Waiting for transaction succes...', {
                appearance: 'info',
                autoDismiss: true,
            })
        const contract = getGeneratorContract(library, chainId);
        await contract.methods.burnDocument(
            _id
        ).send({from: account }).then(()=> {
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

    const handleBurn = React.useCallback(
      async () => {
        await burn(
            id
        )
      },
      [account, id],
    )
  
    return {  onBurn: handleBurn }
  }
  
  export default useBurn