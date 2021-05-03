import React, { useCallback, useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core';
import { getGeneratorContract } from '../utils/contracts';
import useBlock from './useBlock'

import useTotalDocuments from './useTotalDocuments'
import useGetDocument from './useGetDocument';
import useOwnerOf from './useOwnerOf';


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
    }, [account, library, totalDocuments])


    useEffect(() => {
        if (account && library && totalDocuments !== 0) {
            fetchInfo()
        }
       
    }, [account, library, totalDocuments, chainId, block])

    return info
}

export default useGetAllDocuments;
