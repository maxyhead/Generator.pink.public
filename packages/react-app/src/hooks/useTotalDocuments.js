import { useCallback, useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core';
import { getGeneratorContract } from '../utils/contracts';
import useBlock from './useBlock'

const useTotalDocuments = () => {
    const { account, library, chainId } = useWeb3React()
    const [ info, setInfo ] = useState(new BigNumber(0))
    const block = useBlock()

    const fetchInfo = useCallback(async () => {
        const contract = getGeneratorContract(library, chainId);   
        const data = await contract.methods.totalSupply().call();
        setInfo(data);
    }, [library, chainId])

    useEffect(() => {

        if (account && library  ) {
            fetchInfo()
        }
       
    }, [account, library, chainId, block])

    return info
}

export default useTotalDocuments
