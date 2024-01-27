// import type { NFT as NFTType } from '@thirdweb-dev/sdk'
// import Link from "next/link";
import React from 'react';
// import NFT from './NFT'
import './styles.scss';
import NFTComponent from './NFT';

type Props = {
  isLoading: boolean;
  data?: any[] | undefined;
};

export default function NFTGrid({ isLoading, data }: Props) {
  return (
    <div className="nftGridContainer">
      {isLoading ? (
        [...Array(20)].map((_, index) => (
          <div key={index} className="nftContainer">
            {/* <Skeleton key={index} width={'100%'} height='312px' /> */}
            <h2>Loading</h2>
          </div>
        ))
      ) : data && data.length > 0 ? (
        data.map(nft =>
          false ? (
            <div ref={`/token/${nft.id}`} key={nft.id} className="nftContainer">
              <NFTComponent />
            </div>
          ) : (
            <div key={nft.id} className="nftContainer">
              <NFTComponent />
            </div>
          ),
        )
      ) : (
        <p>kailaai</p>
      )}
    </div>
  );
}
