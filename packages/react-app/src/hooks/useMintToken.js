import React from 'react';
import { useWeb3React } from '@web3-react/core';
import { addresses, abis } from "@project/contracts";
import { getGeneratorContract } from '../utils/contracts'
import useCurrentPrice from './useCurrentPrice';
import { useToasts } from 'react-toast-notifications'

const useMintToken = (
    uuid,
    title, 
    description, 
    uri, 
    validationDate, 
    name,
    fullAddress,
    email, 
    website, 
    ipAddress
) => {
    const { account, library, chainId } = useWeb3React()
    const fee = useCurrentPrice();
    const { addToast } = useToasts();


    const addDocument = async (
        _uuid,
        _title, 
        _description, 
        _uri, 
        _validationDate, 
        _name,
        _fulladdress,
        _email, 
        _website, 
        _ipAddress
    ) => {
        addToast('Waiting for transaction succes...', {
            appearance: 'info',
            autoDismiss: true,
        })
        const contract = getGeneratorContract(library, chainId);
        await contract.methods.addDocument(
            _uuid,
            _title, 
            _description, 
            _uri, 
            _validationDate, 
            _name,
            _fulladdress,
            _email, 
            _website, 
            _ipAddress
        ).send({from: account, value: fee.toString()}).then(()=> {
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

    const handleMint = React.useCallback(
      async () => {
        await addDocument(
            uuid.toString(),
            title.toString(), 
            description.toString(), 
            uri.toString(), 
            validationDate.toString(), 
            name.toString(),
            fullAddress.toString(),
            email.toString(), 
            website.toString(), 
            ipAddress.toString()
        )
      },
      [account, title, description, uri, validationDate, email, name, fullAddress, website, ipAddress],
    )
  
    return {  onMint: handleMint }
  }
  
  export default useMintToken