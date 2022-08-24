import { useState } from 'react';
import { toast } from 'react-toastify';
import CollectionConfig from '../../collection/smart-contract/config/CollectionConfig';
import Whitelist from '../../collection/minting-dapp/src/scripts/lib/Whitelist'
import MintingStatus from './MintingStatus';
import MintingForm from './MintingForm';
import { useWeb3Context } from '../Web3Provider';

const MintingContainer = (): JSX.Element => {
  let merkleProofManualAddressInput!: HTMLInputElement;

  const [loading, setLoading] = useState<boolean>(false)
  const [mintError, setMintError] = useState<string | null>(null)
  const [merkleProofManualAddress, setMerkleProofManualAddress] = useState<string>('')
  const [merkleProofManualAddressFeedbackMessage, setMerkleProofManualAddressFeedbackMessage] = useState<JSX.Element | null>(null)

  const web3Context = useWeb3Context()
  const { web3Error, web3Provider, contract, contractState, refreshContractState, connectWallet, connected, connectedAddress, otherState } = web3Context


  const mintTokens = async (amount: number): Promise<void> => {
    try {
      setLoading(true)
      const transaction = await contract?.mint(amount, {value: contractState.tokenPrice.mul(amount)});

      toast.info(<>
        Transaction sent! Please wait...<br/>
        <a href={generateTransactionUrl(transaction?.hash ?? '')} target="_blank" rel="noopener noreferrer">View on {otherState.networkConfig.blockExplorer.name}</a>
      </>);

      const receipt = await transaction?.wait();

      toast.success(<>
        Success!<br />
        <a href={generateTransactionUrl(receipt?.transactionHash ?? '')} target="_blank" rel="noopener noreferrer">View on {otherState.networkConfig.blockExplorer.name}</a>
      </>);

      await refreshContractState();
      setLoading(false)
    } catch (e) {
      setError(e);
      setLoading(false)
    }
  }

  const whitelistMintTokens = async (amount: number): Promise<void> => {
    try {
      setLoading(true)
      const transaction = await contract?.whitelistMint(amount, Whitelist.getProofForAddress(connectedAddress!), {value: contractState.tokenPrice.mul(amount)});

      toast.info(<>
        Transaction sent! Please wait...<br/>
        <a href={generateTransactionUrl(transaction?.hash ?? '')} target="_blank" rel="noopener noreferrer">View on {otherState.networkConfig.blockExplorer.name}</a>
      </>);

      const receipt = await transaction?.wait();

      toast.success(<>
        Success!<br />
        <a href={generateTransactionUrl(receipt?.transactionHash ?? '')} target="_blank" rel="noopener noreferrer">View on {otherState.networkConfig.blockExplorer.name}</a>
      </>);

      await refreshContractState();
      setLoading(false)
    } catch (e) {
      setError(e);
      setLoading(false)
    }
  }

  const setError = (error: any = null): void => {
    let errorMessage = 'Unknown error...';

    if (null === error || typeof error === 'string') {
      setMintError(null)
      return
    } else if (typeof error === 'object') {
      // Support any type of error from the Web3 Provider...
      if (error?.error?.message !== undefined) {
        errorMessage = error.error.message;
      } else if (error?.data?.message !== undefined) {
        errorMessage = error.data.message;
      } else if (error?.message !== undefined) {
        errorMessage = error.message;
      } else if (React.isValidElement(error)) {
        setMintError(error.toString());
        return;
      }
    }
    setMintError(errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1));
  }

  const isWalletConnected = (): boolean => {
    return connected;
  }

  const isContractReady = (): boolean => {
    return contract !== undefined;
  }

  const isSoldOut = (): boolean => {
    return contractState.maxSupply !== 0 && contractState.totalSupply >= contractState.maxSupply;
  }

  const isNotMainnet = (): boolean => {
    return otherState.network !== null && otherState.network?.chainId !== CollectionConfig.mainnet.chainId;
  }

  const copyMerkleProofToClipboard = (): void => {
    const merkleProof = Whitelist.getRawProofForAddress(connectedAddress ?? merkleProofManualAddress);

    if (merkleProof.length < 1) {
      setMerkleProofManualAddressFeedbackMessage(<>The given address is not in the whitelist, please double-check.</>);
      return;
    }

    navigator.clipboard.writeText(merkleProof);

    setMerkleProofManualAddressFeedbackMessage(
      <>
        <strong>Congratulations!</strong> <span className="emoji">🎉</span><br />
        Your Merkle Proof <strong>has been copied to the clipboard</strong>. You can paste it into <a href={generateContractUrl()} target="_blank" rel="noreferrer">{otherState.networkConfig.blockExplorer.name}</a> to claim your tokens.
      </>,
    );
  }

  const generateContractUrl = (): string => {
    return otherState.networkConfig.blockExplorer.generateContractUrl(CollectionConfig.contractAddress!);
  }

  const generateMarketplaceUrl = (): string => {
    return CollectionConfig.marketplaceConfig.generateCollectionUrl(CollectionConfig.marketplaceIdentifier, !isNotMainnet());
  }

  const generateTransactionUrl = (transactionHash: string): string => {
    return otherState.networkConfig.blockExplorer.generateTransactionUrl(transactionHash);
  }

  return (
    <>
      {isNotMainnet() ?
        <div className="not-mainnet">
          You are not connected to the main network.
          <span className="small">Current network: <strong>{otherState.network?.name}</strong></span>
        </div>
        : null}

      {connected && web3Error && <div className="error"><p>{web3Error}</p></div>}
      {mintError && <div className="error"><p>{mintError}</p><button onClick={() => setError()}>Close</button></div>}

      {isWalletConnected() ?
        <>
          {isContractReady() ?
            <>
              <MintingStatus
                userAddress={connectedAddress}
                maxSupply={contractState.maxSupply}
                totalSupply={contractState.totalSupply}
                isPaused={contractState.isPaused}
                isWhitelistMintEnabled={contractState.isWhitelistMintEnabled}
                isUserInWhitelist={contractState.isUserInWhitelist}
                isSoldOut={isSoldOut()}
              />
              {!isSoldOut() ?
                <MintingForm
                  networkConfig={otherState.networkConfig}
                  maxSupply={contractState.maxSupply}
                  totalSupply={contractState.totalSupply}
                  tokenPrice={contractState.tokenPrice}
                  maxMintAmountPerTx={contractState.maxMintAmountPerTx}
                  isPaused={contractState.isPaused}
                  isWhitelistMintEnabled={contractState.isWhitelistMintEnabled}
                  isUserInWhitelist={contractState.isUserInWhitelist}
                  mintTokens={(mintAmount) => mintTokens(mintAmount)}
                  whitelistMintTokens={(mintAmount) => whitelistMintTokens(mintAmount)}
                  loading={loading}
                />
                :
                <div className="collection-sold-out">
                  <h2>Tokens have been <strong>sold out</strong>! <span className="emoji">🥳</span></h2>

                  You can buy from our beloved holders on <a href={generateMarketplaceUrl()} target="_blank" rel="noreferrer">{CollectionConfig.marketplaceConfig.name}</a>.
                </div>
              }
            </>
            :
            <div className="collection-not-ready">
              <svg className="spinner" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>

              Loading collection data...
            </div>
          }
        </>
      :
        <div className="no-wallet">
          {!isWalletConnected() ? <button className="primary" disabled={web3Provider === undefined} onClick={connectWallet}>Connect Wallet</button> : null}

          <div className="use-block-explorer">
            Hey, looking for a <strong>super-safe experience</strong>? <span className="emoji">😃</span><br />
            You can interact with the smart-contract <strong>directly</strong> through <a href={generateContractUrl()} target="_blank" rel="noreferrer">{otherState.networkConfig.blockExplorer.name}</a>, without even connecting your wallet to this DAPP! <span className="emoji">🚀</span><br />
            <br />
            Keep safe! <span className="emoji">❤️</span>
          </div>

          {!isWalletConnected() || contractState.isWhitelistMintEnabled ?
            <div className="merkle-proof-manual-address">
              <h2>Whitelist Proof</h2>
              <p>
                Anyone can generate the proof using any public address in the list, but <strong>only the owner of that address</strong> will be able to make a successful transaction by using it.
              </p>

              {merkleProofManualAddressFeedbackMessage && <div className="feedback-message">{merkleProofManualAddressFeedbackMessage}</div>}

              <label htmlFor="merkle-proof-manual-address">Public address:</label>
              <input id="merkle-proof-manual-address" type="text" placeholder="0x000..." disabled={connectedAddress !== ""} value={connectedAddress ?? merkleProofManualAddress} ref={(input) => merkleProofManualAddressInput = input!} onChange={() => setMerkleProofManualAddress(merkleProofManualAddressInput.value)} /> <button onClick={copyMerkleProofToClipboard}>Generate and copy to clipboard</button>
            </div>
            : null}
        </div>
      }
    </>
  );
}

export default MintingContainer