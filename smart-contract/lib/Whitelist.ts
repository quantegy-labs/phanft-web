import { MerkleTree } from 'merkletreejs'
import keccak256 from 'keccak256'
import whitelistAddresses from './whitelist.json'

class Whitelist {
	private merkleTree!: MerkleTree
	private addresses: string[] = whitelistAddresses.map(a => a.toUpperCase())

	private getMerkleTree(): MerkleTree {
		if (this.merkleTree === undefined) {
			const leafNodes = this.addresses.map(addr => keccak256(addr))

			this.merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true })
		}
		return this.merkleTree
	}

	public getProofForAddress(address: string): string[] {
		console.log('get proof for address', address)
		return this.getMerkleTree().getHexProof(keccak256(address.toUpperCase()))
	}

	public getRawProofForAddress(address: string): string {
		console.log('get raw proof for address', address)
		return this.getProofForAddress(address.toUpperCase()).toString().replaceAll("'", '').replaceAll(' ', '')
	}

	public contains(address: string): boolean {
		console.log('check if merkle tree contains address', address)
		return this.getMerkleTree().getLeafIndex(Buffer.from(keccak256(address.toUpperCase()))) >= 0
	}
}

export default new Whitelist()
