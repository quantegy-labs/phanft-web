import { Box } from '@mui/material'
import { CrossmintPayButton } from '@crossmint/client-sdk-react-ui'
import { BigNumber, utils } from 'ethers'
import { useWeb3Context } from '../Web3Provider'

type CrossmintButtonProps = {
	mintAmount: number
	tokenPrice: BigNumber | string
}

const CrossmintButton = ({ mintAmount, tokenPrice }: CrossmintButtonProps) => {
	const { connected, connectedAddress } = useWeb3Context()

	return (
		<Box sx={{ my: 2 }}>
			<CrossmintPayButton
				collectionTitle="Enlightened Lizards"
				collectionDescription="Your web 3.0 pass to 4.0 phandom. Help save the lizards from extinction!"
				collectionPhoto="ipfs://QmVpJjcba7VW2zDg1tPiKb7CJRLSL4qDsZGWxwFY2KexPg/hidden.png"
				clientId="f97b9c73-64c2-4b59-ad8d-31a1d5b36892"
				// totalPrice should contain the total price of all NFTs to mint in a single transaction - in ETH as string * mintAmount 0.9 * 2 = "0.18"
				mintConfig={{
					type: 'erc-721',
					totalPrice: typeof tokenPrice === 'string' ? (parseFloat(tokenPrice) * mintAmount).toFixed(2) : utils.formatEther(tokenPrice.mul(mintAmount)),
					_mintAmount: mintAmount.toString(),
				}}
				mintTo={connected ? connectedAddress : undefined}
			/>
		</Box>
	)
}

export default CrossmintButton
