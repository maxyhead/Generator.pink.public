import React from 'react';
import { useWeb3React } from '@web3-react/core';
import { addresses, abis } from "@project/contracts";
import { getGeneratorContract } from '../utils/contracts'
import useCurrentPrice from './useCurrentPrice';

const useMintToken = (
    uuid,
    title, 
    description, 
    uri, 
    validationDate, 
    email, 
    website, 
    ipAddress
) => {
    const { account, library, chainId } = useWeb3React()
    const fee = useCurrentPrice();
    React.useEffect(() => {
       
    }, [])

    const addDocument = async (
        _uuid,
        _title, 
        _description, 
        _uri, 
        _validationDate, 
        _email, 
        _website, 
        _ipAddress
    ) => {
       
        const contract = getGeneratorContract(library, chainId);
        await contract.methods.addDocument(
            _uuid,
            _title, 
            _description, 
            _uri, 
            _validationDate, 
            _email, 
            _website, 
            _ipAddress
        ).send({from: account, value: fee.toString()}).then(()=> {
           
        }).catch((err) => {
        if(err.message.includes("User denied transaction signature")) {
                
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
            email.toString(), 
            website.toString(), 
            ipAddress.toString()
        )
      },
      [account, title, description, uri, validationDate, email, website, ipAddress],
    )
  
    return {  onMint: handleMint }
  }
  
  export default useMintToken