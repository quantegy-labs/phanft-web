import { MerkleTree } from 'merkletreejs'
import keccak256 from 'keccak256'
import whitelistAddresses from './whitelist.json'

class Whitelist {
	private merkleTree!: MerkleTree

	private getMerkleTree(): MerkleTree {
		if (this.merkleTree === undefined) {
			const leafNodes = whitelistAddresses.map(addr => keccak256(addr))

			this.merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true })
		}
		return this.merkleTree
	}

	public getProofForAddress(address: string): string[] {
		console.log('get proof for address', address)
		return this.getMerkleTree().getHexProof(keccak256(address))
	}

	public getRawProofForAddress(address: string): string {
		console.log('get raw proof for address', address)
		return this.getProofForAddress(address).toString().replaceAll("'", '').replaceAll(' ', '')
	}

	public contains(address: string): boolean {
		console.log('check if merkle tree contains address', address)
		const isWhitelisted = this.getMerkleTree().getLeafIndex(Buffer.from(keccak256(address))) >= 0
		console.log(({isWhitelisted}))
		return isWhitelisted
	}
}

export default new Whitelist()
