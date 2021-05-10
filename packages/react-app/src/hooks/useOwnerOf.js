import { useCallback, useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core';
import { getGeneratorContract } from '../utils/contracts';
import useBlock from './useBlock'

const useOwnerOf = (id) => {
    const { account, library, chainId } = useWeb3React()
    const [ info, setInfo ] = useState(new BigNumber(0))
    const block = useBlock()

    const fetchInfo = useCallback(async () => {
        const contract = getGeneratorContract(library, chainId);   
        const data = await contract.methods.ownerOf(id).call();
        setInfo(data);
    }, [chainId, library, id])

    useEffect(() => {

        if (account && library && id ) {
            fetchInfo()
        }
       
    }, [account, library, id, chainId, block])

    return info
}

export default useOwnerOf
