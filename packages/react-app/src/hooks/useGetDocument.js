import { useCallback, useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core';
import { getGeneratorContract } from '../utils/contracts';

const useGetDocument = (id) => {
    const { account, library, chainId } = useWeb3React()
    const [ info, setInfo ] = useState(new BigNumber(0))

    const fetchInfo = useCallback(async () => {
        const contract = getGeneratorContract(library, chainId);   
        const data = await contract.methods.getDocument(id).call();
        console.log('INFO: ', data);
        setInfo(data);
    }, [account, library, id])

    useEffect(() => {

        if (account && library && id ) {
            fetchInfo()
        }
       
    }, [account, library, id, chainId])

    return info
}

export default useGetDocument
