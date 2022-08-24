interface Props {
  userAddress: string|null;
  totalSupply: number;
  maxSupply: number;
  isPaused: boolean;
  isWhitelistMintEnabled: boolean;
  isUserInWhitelist: boolean;
  isSoldOut: boolean;
}

const MintingStatus = (props: Props): JSX.Element => {
  const isSaleOpen = (): boolean => {
    return (props.isWhitelistMintEnabled || !props.isPaused) && !props.isSoldOut;
  }

  return (
    <>
      <div className="collection-status">
        <div className="user-address">
          <span className="label">Wallet address:</span>
          <span className="address">{props.userAddress}</span>
        </div>

        <div className="supply">
          <span className="label">Supply</span>
          {props.totalSupply}/{props.maxSupply}
        </div>

        <div className="current-sale">
          <span className="label">Sale status</span>
          {isSaleOpen() ?
            <>
              {props.isWhitelistMintEnabled ? 'Whitelist only' : 'Open'}
            </>
            :
            'Closed'
          }
        </div>
      </div>
    </>
  );
}

export default MintingStatus