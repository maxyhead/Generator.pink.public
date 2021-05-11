import { useCallback, useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core';
import { addresses, abis } from "@project/contracts";
import { makeContract, MAX_UINT } from '../utils/utils';
import { getGeneratorContract } from '../utils/contracts';
import useBlock from './useBlock'

const useAllowance = (id) => {
    const { account, library, chainId } = useWeb3React()
    const [ allowance, setAllowance] = useState(new BigNumber(0))
    const block = useBlock()

    const fetchAllowance = useCallback(async () => {
        const contract = getGeneratorContract(library, chainId);   
        const allowance = await contract.methods.getApproved(id).call();
        setAllowance(allowance.toString());
    }, [account, library, id])

    useEffect(() => {

        if (account && library && id ) {
            fetchAllowance()
        }
       
    }, [account, library, id])

    return allowance
}

export default useAllowance
