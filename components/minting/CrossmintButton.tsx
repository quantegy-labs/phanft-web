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
				collectionTitle="Enlightened Lizards Test"
				collectionDescription="The crossmint enlightened lizards description will show up here"
				clientId="5babf5bb-a4f3-4367-bcf7-0077a81e0aa1"
				environment="staging"
				// collectionTitle="Enlightened Lizards"
				// collectionDescription="Enlightened Lizards is a NFT collection of utility-driven, digital collectibles that celebrate and unify our amazing community centered around music, art, and positivity. As the genesis collection from PhanFT, created for phans by phans, these NFTs grant membership access into the PhanFT ecosystem and unlock all the benefits that come with it. It's your web3 pass to 4.0 phandom!"
				// collectionPhoto="https://gateway.pinata.cloud/ipfs/QmVbyzrSTb8HNZ96FALJMntEgPyjLscxfMRhst8NJ4D4wM/50.png"
				// clientId="1e29006f-d959-4976-86a5-a836c52c25d4"
				// totalPrice should contain the total price of all NFTs to mint in a single transaction - in ETH as string * mintAmount 0.9 * 2 = "0.18"
				mintConfig={{
					type: 'erc-721',
					totalPrice:
						typeof tokenPrice === 'string'
							? (parseFloat(tokenPrice) * mintAmount).toFixed(2)
							: utils.formatEther(tokenPrice.mul(mintAmount)),
					_mintAmount: mintAmount.toString(),
				}}
				mintTo={connected ? connectedAddress : undefined}
			/>
		</Box>
	)
}

export default CrossmintButton
