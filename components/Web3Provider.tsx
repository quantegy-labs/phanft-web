import React, { ReactElement, useContext, useEffect, useState } from 'react';
import { ethers } from 'ethers'
import detectEthereumProvider from '@metamask/detect-provider'
import { ExternalProvider, Web3Provider } from '@ethersproject/providers';

export type Web3Data = {
  provider: Web3Provider;
  connectWallet: () => void;
  disconnectWallet: () => void;
  connectedAddress: string;
  connected: boolean;
  loading: boolean;
};

export type Web3ContextData = {
  web3ProviderData: Web3Data;
};

export const Web3Context = React.createContext({} as Web3ContextData);

export const Web3ContextProvider: React.FC<{ children: ReactElement }> = ({ children }) => {
  const [connected, setConnected] = useState<boolean>(false);
	const [connectedAddress, setConnectedAddress] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [provider, setProvider] = useState<ExternalProvider>()

  useEffect(() => {
    const getWeb3 = async () => {
      const browserProvider = await detectEthereumProvider() as ExternalProvider

      if (browserProvider) {
        console.log('Ethereum successfully detected!')
        const web3Provider = new ethers.providers.Web3Provider(browserProvider);

        console.log(browserProvider, web3Provider)
        setProvider(web3Provider)

        // From now on, this should always be true:
        // provider === window.ethereum

        // Legacy providers may only have ethereum.sendAsync
        // const chainId = await web3Provider.request({
        //   method: 'eth_chainId'
        // })
        // console.log({chainId})
      } else {
        // if the provider is not detected, detectEthereumProvider resolves to null
        console.error('Please install MetaMask!')
      }
    }

    getWeb3()
  }, [])

  const initWallet = async () => {
    // const walletAccounts = await this.provider.listAccounts();

    // this.setState(defaultState);

    // if (walletAccounts.length === 0) {
    //   return;
    // }

    // const network = await this.provider.getNetwork();
    // let networkConfig: NetworkConfigInterface;

    // if (network.chainId === CollectionConfig.mainnet.chainId) {
    //   networkConfig = CollectionConfig.mainnet;
    // } else if (network.chainId === CollectionConfig.testnet.chainId) {
    //   networkConfig = CollectionConfig.testnet;
    // } else {
    //   this.setError('Unsupported network!');

    //   return;
    // }

    // this.setState({
    //   userAddress: walletAccounts[0],
    //   network,
    //   networkConfig,
    // });

    // if (await this.provider.getCode(CollectionConfig.contractAddress!) === '0x') {
    //   this.setError('Could not find the contract, are you connected to the right chain?');

    //   return;
    // }

    // this.contract = new ethers.Contract(
    //   CollectionConfig.contractAddress!,
    //   ContractAbi,
    //   this.provider.getSigner(),
    // ) as NftContractType;

    // this.refreshContractState();
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

	const connectWallet = async () => {
		console.log('connect wallet')
		setConnected(true)
		setConnectedAddress('0x00000123456789')
	}

	const disconnectWallet = () => {
		console.log('disconnect wallet')
		setConnected(false)
		setConnectedAddress('')
	}

	return (
    <Web3Context.Provider
      value={{
        web3ProviderData: {
          provider,
          connectWallet,
          disconnectWallet,
          connected,
					connectedAddress,
          loading,
        },
      }}
    >
      {children}
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