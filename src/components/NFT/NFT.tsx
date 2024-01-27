import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
export default function NFTComponent() {
  return (
    <>
      <Link to="/detail">
        {/* Thay thế ThirdwebNftMedia bằng một hình ảnh giả mạo */}
        <img src="logo192.png" className="nftImage" />
        <p className="nftTokenId">Token ID #1</p>
        <p className="nftName">Circle</p>
        <div className="priceContainer">
          {true ? (
            <div className="nftPriceContainer">
              <div>
                <p className="nftPriceLabel">Price</p>
                <p className="nftPriceValue">done</p>
              </div>
            </div>
          ) : true ? (
            <div className="nftPriceContainer">
              <div>
                <p className="nftPriceLabel">Minimum Bid</p>
                <p className="nftPriceValue">done</p>
              </div>
            </div>
          ) : (
            <div className="nftPriceContainer">
              <div>
                <p className="nftPriceLabel">Price</p>
                <p className="nftPriceValue">Not for sale</p>
              </div>
            </div>
          )}
        </div>
      </Link>
    </>
  );
}
