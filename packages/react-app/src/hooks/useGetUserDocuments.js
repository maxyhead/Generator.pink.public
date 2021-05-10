import { useCallback, useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core';
import useBlock from './useBlock'

import useGetAllDocuments from './useGetAllDocuments'

const useGetUserDocuments = () => {
    const { account, library, chainId } = useWeb3React();
    const [ info, setInfo ] = useState([]);

    const block = useBlock();
    const docs = useGetAllDocuments([]);

    const fetchInfo = useCallback(async () => {
        const arr = []; 
        for(let i = 0; i < docs.length; i++) {
            if(docs[i].minter === account) {
                arr.push(docs[i]);
            }
        }
        setInfo(arr);
    }, [ account, docs])


    useEffect(() => {
        if (account && library && docs.length > 0) {
            fetchInfo()
        }
       
    }, [account, library, docs, chainId, block])

    return info
}

export default useGetUserDocuments;
