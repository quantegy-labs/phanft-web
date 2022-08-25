/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC721A, ERC721AInterface } from "../ERC721A";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ApprovalCallerNotOwnerNorApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "ApprovalQueryForNonexistentToken",
    type: "error",
  },
  {
    inputs: [],
    name: "ApprovalToCurrentOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "ApproveToCaller",
    type: "error",
  },
  {
    inputs: [],
    name: "BalanceQueryForZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "MintToZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "MintZeroQuantity",
    type: "error",
  },
  {
    inputs: [],
    name: "OwnerQueryForNonexistentToken",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferCallerNotOwnerNorApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferFromIncorrectOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferToNonERC721ReceiverImplementer",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferToZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "URIQueryForNonexistentToken",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001286380380620012868339810160408190526200003491620001df565b8151620000499060029060208501906200006c565b5080516200005f9060039060208401906200006c565b5050600080555062000286565b8280546200007a9062000249565b90600052602060002090601f0160209004810192826200009e5760008555620000e9565b82601f10620000b957805160ff1916838001178555620000e9565b82800160010185558215620000e9579182015b82811115620000e9578251825591602001919060010190620000cc565b50620000f7929150620000fb565b5090565b5b80821115620000f75760008155600101620000fc565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200013a57600080fd5b81516001600160401b038082111562000157576200015762000112565b604051601f8301601f19908116603f0116810190828211818310171562000182576200018262000112565b816040528381526020925086838588010111156200019f57600080fd5b600091505b83821015620001c35785820183015181830184015290820190620001a4565b83821115620001d55760008385830101525b9695505050505050565b60008060408385031215620001f357600080fd5b82516001600160401b03808211156200020b57600080fd5b620002198683870162000128565b935060208501519150808211156200023057600080fd5b506200023f8582860162000128565b9150509250929050565b600181811c908216806200025e57607f821691505b602082108114156200028057634e487b7160e01b600052602260045260246000fd5b50919050565b610ff080620002966000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80636352211e1161008c578063a22cb46511610066578063a22cb465146101d6578063b88d4fde146101e9578063c87b56dd146101fc578063e985e9c51461020f57600080fd5b80636352211e146101a857806370a08231146101bb57806395d89b41146101ce57600080fd5b8063095ea7b3116100c8578063095ea7b31461015757806318160ddd1461016c57806323b872dd1461018257806342842e0e1461019557600080fd5b806301ffc9a7146100ef57806306fdde0314610117578063081812fc1461012c575b600080fd5b6101026100fd366004610ba3565b61024b565b60405190151581526020015b60405180910390f35b61011f61029d565b60405161010e9190610c18565b61013f61013a366004610c2b565b61032f565b6040516001600160a01b03909116815260200161010e565b61016a610165366004610c60565b610373565b005b600154600054035b60405190815260200161010e565b61016a610190366004610c8a565b6103fa565b61016a6101a3366004610c8a565b610405565b61013f6101b6366004610c2b565b610420565b6101746101c9366004610cc6565b610432565b61011f610481565b61016a6101e4366004610ce1565b610490565b61016a6101f7366004610d33565b610526565b61011f61020a366004610c2b565b610570565b61010261021d366004610e0f565b6001600160a01b03918216600090815260076020908152604080832093909416825291909152205460ff1690565b60006001600160e01b031982166380ac58cd60e01b148061027c57506001600160e01b03198216635b5e139f60e01b145b8061029757506301ffc9a760e01b6001600160e01b03198316145b92915050565b6060600280546102ac90610e42565b80601f01602080910402602001604051908101604052809291908181526020018280546102d890610e42565b80156103255780601f106102fa57610100808354040283529160200191610325565b820191906000526020600020905b81548152906001019060200180831161030857829003601f168201915b5050505050905090565b600061033a82610602565b610357576040516333d1c03960e21b815260040160405180910390fd5b506000908152600660205260409020546001600160a01b031690565b600061037e82610420565b9050806001600160a01b0316836001600160a01b031614156103b35760405163250fdee360e21b815260040160405180910390fd5b336001600160a01b038216146103ea576103cd813361021d565b6103ea576040516367d9dca160e11b815260040160405180910390fd5b6103f583838361062d565b505050565b6103f5838383610689565b6103f583838360405180602001604052806000815250610526565b600061042b82610878565b5192915050565b60006001600160a01b03821661045b576040516323d3ad8160e21b815260040160405180910390fd5b506001600160a01b031660009081526005602052604090205467ffffffffffffffff1690565b6060600380546102ac90610e42565b6001600160a01b0382163314156104ba5760405163b06307db60e01b815260040160405180910390fd5b3360008181526007602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b610531848484610689565b6001600160a01b0383163b1561056a5761054d84848484610994565b61056a576040516368d2bf6b60e11b815260040160405180910390fd5b50505050565b606061057b82610602565b61059857604051630a14c4b560e41b815260040160405180910390fd5b60006105af60408051602081019091526000815290565b90508051600014156105d057604051806020016040528060008152506105fb565b806105da84610a8c565b6040516020016105eb929190610e7d565b6040516020818303038152906040525b9392505050565b6000805482108015610297575050600090815260046020526040902054600160e01b900460ff161590565b60008281526006602052604080822080546001600160a01b0319166001600160a01b0387811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b600061069482610878565b9050836001600160a01b031681600001516001600160a01b0316146106cb5760405162a1148160e81b815260040160405180910390fd5b6000336001600160a01b03861614806106e957506106e9853361021d565b806107045750336106f98461032f565b6001600160a01b0316145b90508061072457604051632ce44b5f60e11b815260040160405180910390fd5b6001600160a01b03841661074b57604051633a954ecd60e21b815260040160405180910390fd5b6107576000848761062d565b6001600160a01b038581166000908152600560209081526040808320805467ffffffffffffffff1980821667ffffffffffffffff92831660001901831617909255898616808652838620805493841693831660019081018416949094179055898652600490945282852080546001600160e01b031916909417600160a01b4290921691909102178355870180845292208054919390911661082d57600054821461082d578054602086015167ffffffffffffffff16600160a01b026001600160e01b03199091166001600160a01b038a16171781555b50505082846001600160a01b0316866001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050505050565b60408051606081018252600080825260208201819052918101919091528160005481101561097b57600081815260046020908152604091829020825160608101845290546001600160a01b0381168252600160a01b810467ffffffffffffffff1692820192909252600160e01b90910460ff161515918101829052906109795780516001600160a01b03161561090f579392505050565b5060001901600081815260046020908152604091829020825160608101845290546001600160a01b038116808352600160a01b820467ffffffffffffffff1693830193909352600160e01b900460ff1615159281019290925215610974579392505050565b61090f565b505b604051636f96cda160e11b815260040160405180910390fd5b604051630a85bd0160e11b81526000906001600160a01b0385169063150b7a02906109c9903390899088908890600401610eac565b602060405180830381600087803b1580156109e357600080fd5b505af1925050508015610a13575060408051601f3d908101601f19168201909252610a1091810190610ee9565b60015b610a6e573d808015610a41576040519150601f19603f3d011682016040523d82523d6000602084013e610a46565b606091505b508051610a66576040516368d2bf6b60e11b815260040160405180910390fd5b805181602001fd5b6001600160e01b031916630a85bd0160e11b1490505b949350505050565b606081610ab05750506040805180820190915260018152600360fc1b602082015290565b8160005b8115610ada5780610ac481610f1c565b9150610ad39050600a83610f4d565b9150610ab4565b60008167ffffffffffffffff811115610af557610af5610d1d565b6040519080825280601f01601f191660200182016040528015610b1f576020820181803683370190505b5090505b8415610a8457610b34600183610f61565b9150610b41600a86610f78565b610b4c906030610f8c565b60f81b818381518110610b6157610b61610fa4565b60200101906001600160f81b031916908160001a905350610b83600a86610f4d565b9450610b23565b6001600160e01b031981168114610ba057600080fd5b50565b600060208284031215610bb557600080fd5b81356105fb81610b8a565b60005b83811015610bdb578181015183820152602001610bc3565b8381111561056a5750506000910152565b60008151808452610c04816020860160208601610bc0565b601f01601f19169290920160200192915050565b6020815260006105fb6020830184610bec565b600060208284031215610c3d57600080fd5b5035919050565b80356001600160a01b0381168114610c5b57600080fd5b919050565b60008060408385031215610c7357600080fd5b610c7c83610c44565b946020939093013593505050565b600080600060608486031215610c9f57600080fd5b610ca884610c44565b9250610cb660208501610c44565b9150604084013590509250925092565b600060208284031215610cd857600080fd5b6105fb82610c44565b60008060408385031215610cf457600080fd5b610cfd83610c44565b915060208301358015158114610d1257600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b60008060008060808587031215610d4957600080fd5b610d5285610c44565b9350610d6060208601610c44565b925060408501359150606085013567ffffffffffffffff80821115610d8457600080fd5b818701915087601f830112610d9857600080fd5b813581811115610daa57610daa610d1d565b604051601f8201601f19908116603f01168101908382118183101715610dd257610dd2610d1d565b816040528281528a6020848701011115610deb57600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b60008060408385031215610e2257600080fd5b610e2b83610c44565b9150610e3960208401610c44565b90509250929050565b600181811c90821680610e5657607f821691505b60208210811415610e7757634e487b7160e01b600052602260045260246000fd5b50919050565b60008351610e8f818460208801610bc0565b835190830190610ea3818360208801610bc0565b01949350505050565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090610edf90830184610bec565b9695505050505050565b600060208284031215610efb57600080fd5b81516105fb81610b8a565b634e487b7160e01b600052601160045260246000fd5b6000600019821415610f3057610f30610f06565b5060010190565b634e487b7160e01b600052601260045260246000fd5b600082610f5c57610f5c610f37565b500490565b600082821015610f7357610f73610f06565b500390565b600082610f8757610f87610f37565b500690565b60008219821115610f9f57610f9f610f06565b500190565b634e487b7160e01b600052603260045260246000fdfea26469706673582212209be4696b3acf77a4d3d4f65fcc40a643b2859a3e381837dc6de2117fdfead2d364736f6c63430008090033";

export class ERC721A__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC721A> {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<ERC721A>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  attach(address: string): ERC721A {
    return super.attach(address) as ERC721A;
  }
  connect(signer: Signer): ERC721A__factory {
    return super.connect(signer) as ERC721A__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721AInterface {
    return new utils.Interface(_abi) as ERC721AInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721A {
    return new Contract(address, _abi, signerOrProvider) as ERC721A;
  }
}