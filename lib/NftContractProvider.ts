// The name below ("EnlightenedLizards") should match the name of your Solidity contract.
// It can be updated using the following command:
// yarn rename-contract NEW_CONTRACT_NAME
// Please DO NOT change it manually!
import { EnlightenedLizards as ContractType } from '../typechain/index';

import '@nomiclabs/hardhat-ethers'
import hre from 'hardhat';
import CollectionConfig from '../config/CollectionConfig';

export default class NftContractProvider {
  public static async getContract(): Promise<ContractType> {
    // Check configuration
    if (null === CollectionConfig.contractAddress) {
      throw '\x1b[31merror\x1b[0m ' + 'Please add the contract address to the configuration before running this command.';
    }

    if (await hre.ethers.provider.getCode(CollectionConfig.contractAddress) === '0x') {
      throw '\x1b[31merror\x1b[0m ' + `Can't find a contract deployed to the target address: ${CollectionConfig.contractAddress}`;
    }

    return await hre.ethers.getContractAt(CollectionConfig.contractName, CollectionConfig.contractAddress) as ContractType;
  }
};

export type NftContractType = ContractType;
