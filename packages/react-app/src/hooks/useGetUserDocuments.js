import { useCallback, useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core';
import useBlock from './useBlock'
import { getGeneratorContract } from '../utils/contracts'
import useGetAllDocuments from './useGetAllDocuments'

const useGetUserDocuments = () => {
    const { account, library, chainId } = useWeb3React();
    const [ info, setInfo ] = useState([]);

    const block = useBlock();
    const docs = useGetAllDocuments([]);
    
    const fetchInfo = useCallback(async () => {
        const arr = []; 
        const contract = getGeneratorContract(library, chainId);

        for(let i = 0; i < docs.length; i++) {
            let owner = false; 
            if(docs[i].timestamp !== '0') {
                try {
                    owner = await contract.methods.ownerOf(i).call();
                } catch (err) {
                     owner = false;
                }
            }
            
            if(owner === account) {
                arr.push(docs[i]);
            }
        }
        setInfo(arr);
    }, [ account, docs.length, block])


    useEffect(() => {
        if (account && library && docs.length > 0) {
            fetchInfo()
        }
       
    }, [account, library, docs.length, chainId, block])

    return info
}

export default useGetUserDocuments;
