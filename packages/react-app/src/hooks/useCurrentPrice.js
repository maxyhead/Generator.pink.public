import { useCallback, useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core';
import { addresses, abis } from "@project/contracts";
import { makeContract } from '../utils/utils';
import { getGeneratorContract } from '../utils/contracts';
import useBlock from './useBlock'

const useCurrentPrice = () => {
    const { account, library, chainId } = useWeb3React()
    const [ info, setInfo ] = useState();
    const block = useBlock();

    const fetchInfo = useCallback(async () => {
        const contract = getGeneratorContract(library, chainId);
        const info = await contract.methods.getCurrentPriceInEth().call();
        setInfo(info)

    }, [account, library])

    useEffect(() => {

        if (account && library) {
            fetchInfo();
        }
    }, [account, library, block])

    return info
}

export default useCurrentPrice;
