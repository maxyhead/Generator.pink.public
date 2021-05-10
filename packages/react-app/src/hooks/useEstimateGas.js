import { useCallback, useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core';
import { getGeneratorContract } from '../utils/contracts'
import useCurrentPrice from '../hooks/useCurrentPrice';

const useEstimateGas = (
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
    const [gas, setGas ] = useState();
    const fee = useCurrentPrice();

    const fetchGas = useCallback(async (
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
        ).estimateGas({from: account, value: fee }).then((gas)=> {
           console.log('GAS', gas )
           setGas(gas)
        }).catch((err) => {
            

        });
    }, [ library, chainId])

    useEffect(() => {

        if (account && library && fee !== undefined ) {
            fetchGas(
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
            )
        }
       
    }, [account, library, chainId]);
  
    return gas;
  }
  
  export default useEstimateGas