import React from "react";
import styled from "styled-components";
import Web3 from 'web3';
import { SegoeuiRegularNormalWhite20px } from "../../styledMixins";


class NavBar2 extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        <OverlapGroup3>
          <AddToMetamask onClick={addToken}>{children}</AddToMetamask>
        </OverlapGroup3>
      </div>
    );
  }
}
const addToken = async () => {
const tokenAddress = '0x7D8fc24e0235b3237b970962D6335912C942B0d4';
const tokenSymbol = 'ICEB';
const tokenDecimals = 18;
const tokenImage = 'https://icebergcrypto.com/wp-content/uploads/2021/05/Iceberg-copy.png';

try {
  // wasAdded is a boolean. Like any RPC method, an error may be thrown.
  const wasAdded = await ethereum.request({
    method: 'wallet_watchAsset',
    params: {
      type: 'ERC20', // Initially only supports ERC20, but eventually more!
      options: {
        address: tokenAddress, // The address that the token is at.
        symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
        decimals: tokenDecimals, // The number of decimals in the token
        image: tokenImage, // A string url of the token logo
      },
    },
  });

  if (wasAdded) {
    console.log('Thanks for your interest!');
  } else {
    console.log('Your loss!');
  }
} catch (error) {
  console.log(error);
}
};

const NavBar = styled.div`
  height: 56px;
  margin-left: 145px;
  display: flex;
  padding: 0 5px;
  align-items: center;
  min-width: 204px;
  background-color: var(--eerie-black);
  border-radius: 17px;
`;

const OverlapGroup3 = styled.button`
  height: 46px;
  display: flex;
  padding: 11px 17px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 194px;
  background-color: var(--shark);
  border-radius: 17px;
`;

const AddToMetamask = styled.button`
  ${SegoeuiRegularNormalWhite20px}
  min-height: 22px;
  min-width: 158px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

export default NavBar2;
