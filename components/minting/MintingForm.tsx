import { useState } from 'react';
import { utils, BigNumber } from 'ethers';
import { Box, Button, Typography } from '@mui/material'

export interface NetworkConfigInterface {
  chainId: number;
  symbol: string;
  blockExplorer: {
    name: string;
    generateContractUrl: (contractAddress: string) => string;
    generateTransactionUrl: (transactionAddress: string) => string;
  };
};

interface MintingFormProps {
	networkConfig: NetworkConfigInterface;
  maxSupply: number;
  totalSupply: number;
  tokenPrice: BigNumber;
  maxMintAmountPerTx: number;
  isPaused: boolean;
  loading: boolean;
  isWhitelistMintEnabled: boolean;
  isUserInWhitelist: boolean;
  mintTokens(mintAmount: number): Promise<void>;
  whitelistMintTokens(mintAmount: number): Promise<void>;
}

interface State {
	mintAmount: number;
}

const defaultState: State = {
	mintAmount: 1,
};

const MintingForm = (props: MintingFormProps): JSX.Element => {
	const [state, setState] = useState(defaultState)

  const canMint = (): boolean => {
    return !props.isPaused || canWhitelistMint();
  }

  const canWhitelistMint = (): boolean => {
    return props.isWhitelistMintEnabled && props.isUserInWhitelist;
  }

  const incrementMintAmount = (): void => {
    setState({
      mintAmount: Math.min(props.maxMintAmountPerTx, state.mintAmount + 1),
    });
  }

  const decrementMintAmount = (): void => {
    setState({
      mintAmount: Math.max(1, state.mintAmount - 1),
    });
  }

  const mint = async (): Promise<void>  => {
    if (!props.isPaused) {
      await props.mintTokens(state.mintAmount);

      return;
    }

    await props.whitelistMintTokens(state.mintAmount);
  }

	return (
		<>
			{canMint() ?
				<Box className={`mint-widget ${props.loading ? 'animate-pulse saturate-0 pointer-events-none' : ''}`}>
					<Box className="preview">
						<img src="/build/images/preview.png" alt="Collection preview" />
					</Box>

					<Box className="price">
						<strong>Total price:</strong> {utils.formatEther(props.tokenPrice.mul(state.mintAmount))} {props.networkConfig.symbol}
					</Box>

					<Box className="controls">
						<Button className="decrease" disabled={props.loading} onClick={decrementMintAmount}>-</Button>
						<span className="mint-amount">{state.mintAmount}</span>
						<Button className="increase" disabled={props.loading} onClick={incrementMintAmount}>+</Button>
						<Button className="primary" disabled={props.loading} onClick={() => mint()}>Mint</Button>
					</Box>
				</Box>
				:
				<Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
					<Typography fontSize={36}>⏳</Typography>

					{props.isWhitelistMintEnabled
						? <Typography>You are not included in the <strong>whitelist</strong>.</Typography>
						: <Typography>The contract is <strong>paused</strong>.</Typography>
					}
					<Typography>Please come back during the next sale!</Typography>
				</Box>
			}
		</>
	);
}

export default MintingForm;
