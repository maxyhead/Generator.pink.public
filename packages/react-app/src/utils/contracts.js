import { addresses, abis } from "@project/contracts";
import { makeContract } from './utils';

export const getGeneratorContract = (library, chainId) => {
    return makeContract(library, abis.generator, addresses[chainId].generator);
}