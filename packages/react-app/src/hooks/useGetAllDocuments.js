import { useCallback, useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core';
import { getGeneratorContract } from '../utils/contracts';
import useBlock from './useBlock'

import useTotalDocuments from './useTotalDocuments'

const useGetAllDocuments = () => {
    const { account, library, chainId } = useWeb3React()
    const [ info, setInfo ] = useState([])
    const totalDocuments = useTotalDocuments();
    const block = useBlock();
    const fetchInfo = useCallback(async () => {
        const contract = getGeneratorContract(library, chainId);  
        const arr = []; 
        for(let i = 0; i < totalDocuments; i++) {
            const res = await contract.methods.getDocument(i).call();
            arr.push(res);
        }
        setInfo(arr);
    }, [ library, totalDocuments, chainId ])


    useEffect(() => {

        if (account && library && totalDocuments !== 0) {
            fetchInfo()
        }
       
    }, [account, library, totalDocuments, chainId, block])

    return info
}

export default useGetAllDocuments;
