import React, { ReactElement, useContext, useEffect, useState } from 'react';
import { ethers, BigNumber } from 'ethers'
import { ExternalProvider, Web3Provider } from '@ethersproject/providers';
import detectEthereumProvider from '@metamask/detect-provider'
import { CircularProgress } from '@mui/material';
import CollectionConfig from '../collection/smart-contract/config/CollectionConfig';
import Whitelist from '../collection/minting-dapp/src/scripts/lib/Whitelist'
import { EnlightenedLizards as NftContractType } from '../collection/smart-contract/typechain/index';
import type { NetworkConfigInterface } from './minting/MintingForm';

const ContractAbi = require('../collection/smart-contract/artifacts/contracts/' + CollectionConfig.contractName + '.sol/' + CollectionConfig.contractName + '.json').abi;

export type Web3Data = {
  web3Provider: Web3Provider | null
  contract: NftContractType | null
  otherState: OtherState
  contractState: ContractState
  refreshContractState: () => Promise<void>
  connectWallet: () => void
  disconnectWallet: () => void
  connected: boolean
  connectedAddress: string
  web3Error: JSX.Element | string | null
};

export type Web3ContextData = {
  web3ProviderData: Web3Data;
};

export const Web3Context = React.createContext({} as Web3ContextData);

interface ContractState {
  totalSupply: number;
  maxSupply: number;
  maxMintAmountPerTx: number;
  tokenPrice: BigNumber;
  isPaused: boolean;
  isWhitelistMintEnabled: boolean;
  isUserInWhitelist: boolean;
}

interface OtherState {
  userAddress: string|null;
  network: ethers.providers.Network|null;
  networkConfig: NetworkConfigInterface;
}

const defaultContractState: ContractState = {
  totalSupply: 0,
  maxSupply: 0,
  maxMintAmountPerTx: 0,
  tokenPrice: BigNumber.from(0),
  isPaused: true,
  isWhitelistMintEnabled: false,
  isUserInWhitelist: false,
};

const defaultOtherState: OtherState = {
  userAddress: null,
  network: null,
  networkConfig: CollectionConfig.mainnet,
}

export const Web3ContextProvider: React.FC<{ children: ReactElement }> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [connected, setConnected] = useState<boolean>(false);
	const [connectedAddress, setConnectedAddress] = useState<string>('');
  const [web3Error, setWeb3Error] = useState<JSX.Element | string | null>(null)
  const [web3Provider, setWeb3Provider] = useState<Web3Provider | null>(null)
  const [contract, setContract] = useState<NftContractType | null>(null)
  const [contractState, setContractState] = useState<ContractState>(defaultContractState)
  const [otherState, setOtherState] = useState<OtherState>(defaultOtherState)

  useEffect(() => {
    const getWeb3 = async () => {
      const browserProvider = await detectEthereumProvider() as ExternalProvider
      if (browserProvider) {
        console.log('Ethereum successfully detected!')
        const ethersProvider = new ethers.providers.Web3Provider(browserProvider);
        setWeb3Provider(ethersProvider)
        registerWalletEvents(browserProvider);
        await initWallet();
        setLoading(false)
      } else {
        // if the provider is not detected, detectEthereumProvider resolves to null
        console.error('Please install MetaMask!')
        setWeb3Error(
          <>
            We were not able to detect <strong>MetaMask</strong>. We value <strong>privacy and security</strong> a lot so we limit the wallet options on our minting dapp.<br />
            <br />
            But don&apos;t worry! <span className="emoji">😃</span> You can always interact with the smart-contract through <a href={generateContractUrl()} target="_blank" rel="noreferrer">{state.networkConfig.blockExplorer.name}</a> and <strong>we do our best to provide you with the best user experience possible</strong>, even from there.<br />
            <br />
            You can also get your <strong>Whitelist Proof</strong> manually, using the tool below.
          </>,
        );
      }
    }
    getWeb3()
  }, [])

  // Refreshes the contract data in state with the most lastest data from contract state, useful for updating UIs after transactions
  const refreshContractState = async (): Promise<void> => {
    setContractState({
      maxSupply: (await contract?.maxSupply() ?? BigNumber.from(0)).toNumber(),
      totalSupply: (await contract?.totalSupply() ?? BigNumber.from(0)).toNumber(),
      maxMintAmountPerTx: (await contract?.maxMintAmountPerTx() ?? BigNumber.from(0)).toNumber(),
      tokenPrice: await contract?.cost() ?? BigNumber.from(0),
      isPaused: await contract?.paused() ?? true,
      isWhitelistMintEnabled: await contract?.whitelistMintEnabled() ?? false,
      isUserInWhitelist: Whitelist.contains(otherState.userAddress ?? ''),
    });
  }

  // Initializes wallet, network, & contract data
  const initWallet = async () => {
    // Reset contract state
    setContractState(defaultContractState);

    // Get connected wallets
    const walletAccounts = await web3Provider?.listAccounts() ?? [];
    if (walletAccounts.length === 0) {
      return;
    }

    // Get network
    const network = await web3Provider?.getNetwork();
    let networkConfig: NetworkConfigInterface;
    if (!network) {
      setWeb3Error('Unsupported network!');
      return;
    } else if (network.chainId === CollectionConfig.mainnet.chainId) {
      networkConfig = CollectionConfig.mainnet;
    } else if (network.chainId === CollectionConfig.testnet.chainId) {
      networkConfig = CollectionConfig.testnet;
    } else {
      setWeb3Error('Unsupported network!');
      return;
    }

    // Set network and connected address data
    setOtherState({
      userAddress: walletAccounts[0],
      network,
      networkConfig,
    });
    setConnectedAddress(walletAccounts[0])

    // Get/Set contract data
    if (await web3Provider?.getCode(CollectionConfig.contractAddress!) === '0x') {
      setWeb3Error('Could not find the contract, are you connected to the right chain?');
      return;
    }
    const enlightenedLizards = new ethers.Contract(
      CollectionConfig.contractAddress!,
      ContractAbi,
      web3Provider?.getSigner(),
    ) as NftContractType;
    console.log({enlightenedLizards, addy: CollectionConfig.contractAddress, signer: web3Provider?.getSigner()})
    setContract(enlightenedLizards)
    refreshContractState();
  }

  const registerWalletEvents = (browserProvider: ExternalProvider): void => {
    // @ts-ignore
    browserProvider.on('accountsChanged', () => {
      initWallet();
    });

    // @ts-ignore
    browserProvider.on('chainChanged', () => {
      window.location.reload();
    });
  }

  const connectWallet = async (): Promise<void> => {
    try {
        await web3Provider?.provider.request!({ method: 'eth_requestAccounts' });
        await initWallet();
      	setConnected(true)
    } catch (e: any) {
      setWeb3Error(e);
    }
  }

	const disconnectWallet = () => {
		setConnected(false)
		setConnectedAddress('')
	}

	return (
    <Web3Context.Provider
      value={{
        web3ProviderData: {
          web3Provider,
          contract,
          otherState,
          contractState,
          refreshContractState,
          connectWallet,
          disconnectWallet,
          connected,
					connectedAddress,
          web3Error,
        },
      }}
    >
      {loading ? <CircularProgress /> : children}
    </Web3Context.Provider>
  );
}

export const useWeb3Context = () => {
  const { web3ProviderData } = useContext(Web3Context);

  if (Object.keys(web3ProviderData).length === 0) {
    throw new Error(
      'useWeb3Context() can only be used inside of <Web3ContextProvider />, ' +
        'please declare it at a higher level.'
    );
  }

  return web3ProviderData;
};