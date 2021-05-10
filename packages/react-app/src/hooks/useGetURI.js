import { useCallback, useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core';
import { getGeneratorContract } from '../utils/contracts';

const useGetURI = (id) => {
    const { account, library, chainId } = useWeb3React()
    const [ info, setInfo ] = useState('')

    const fetchInfo = useCallback(async () => {
        const contract = getGeneratorContract(library, chainId);   
        const data = await contract.methods.getURI(id).call();
        setInfo(data);
    }, [ library, id, chainId])

    useEffect(() => {

        if (account && library && id ) {
            fetchInfo()
        }
       
    }, [account, library, id, chainId])

    return info
}

export default useGetURI
