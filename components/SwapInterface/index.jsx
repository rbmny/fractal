import React from "react";
import styled from "styled-components";
import {
  SegoeuiRegularNormalQuickSilver25px,
  SegoeuiRegularNormalWhite25px,
  SegoeuiRegularNormalWhite20px,
} from "../../styledMixins";


class SwapInterface extends React.Component {
  render() {
    const { interfacetitle, targetvalue, originvalue, logo, switchbtn, connectWallet, swapbtntext } = this.props;

    return (
      <SwapInterface1>
        <InterfaceTitle>{interfacetitle}</InterfaceTitle>
        <OverlapGroup1>
          <TargetSquare>
            <TargetValue>{targetvalue}</TargetValue>
          </TargetSquare>
          <OriginSquare>
            <OriginValue>{originvalue}</OriginValue>
          </OriginSquare>
          <Logo src={logo} />
          <SwitchBtn src={switchbtn} />
        </OverlapGroup1>
        <OverlapGroup>
          <ConnectBtn>
            <ConnectWallet>{connectWallet}</ConnectWallet>
          </ConnectBtn>
          <SwapBtn>
            <SwapBtnText>{swapbtntext}</SwapBtnText>
          </SwapBtn>
        </OverlapGroup>
      </SwapInterface1>
    );
  }
}

const SwapInterface1 = styled.div`
  width: 475px;
  margin-top: 118px;
  margin-left: 1px;
  display: flex;
  flex-direction: column;
  padding: 6px 5px;
  align-items: flex-end;
  min-height: 300px;
  background-color: var(--eerie-black);
  border-radius: 17px;
`;

const InterfaceTitle = styled.div`
  ${SegoeuiRegularNormalWhite20px}
  min-height: 22px;
  align-self: flex-start;
  margin-top: 11px;
  margin-left: 17px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const OverlapGroup1 = styled.div`
  width: 464px;
  height: 176px;
  position: relative;
  margin-top: 11px;
`;

const TargetSquare = styled.div`
  position: absolute;
  height: 70px;
  top: 106px;
  left: 0;
  display: flex;
  padding: 17px 14px;
  align-items: flex-end;
  min-width: 464px;
  background-color: var(--shark);
  border-radius: 17px;
`;

const TargetValue = styled.h1`
  ${SegoeuiRegularNormalQuickSilver25px}
  width: 46px;
  height: 34px;
  letter-spacing: 0;
  line-height: 25px;
`;

const OriginSquare = styled.div`
  position: absolute;
  height: 100px;
  top: 0;
  left: 0;
  display: flex;
  padding: 25px 15px;
  align-items: flex-start;
  min-width: 464px;
  background-color: var(--shark);
  border-radius: 17px;
`;

const OriginValue = styled.div`
  ${SegoeuiRegularNormalQuickSilver25px}
  min-height: 27px;
  letter-spacing: 0;
  line-height: 25px;
  white-space: nowrap;
`;

const Logo = styled.img`
  position: absolute;
  width: 41px;
  height: 41px;
  top: 30px;
  left: 390px;
  object-fit: cover;
`;

const SwitchBtn = styled.img`
  position: absolute;
  width: 40px;
  height: 30px;
  top: 91px;
  left: 212px;
  object-fit: cover;
`;

const OverlapGroup = styled.div`
  width: 464px;
  height: 62px;
  position: relative;
  margin-top: 6px;
  border-radius: 17px;
`;

const ConnectBtn = styled.div`
  position: absolute;
  height: 62px;
  top: 0;
  left: 0;
  display: flex;
  padding: 16px 146px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 464px;
  background-color: #143d6dd9;
  border-radius: 17px;
`;

const ConnectWallet = styled.div`
  ${SegoeuiRegularNormalWhite25px}
  min-height: 27px;
  min-width: 171px;
  letter-spacing: 0;
  line-height: 25px;
  white-space: nowrap;
`;

const SwapBtn = styled.div`
  position: absolute;
  height: 62px;
  top: 0;
  left: 0;
  display: flex;
  padding: 16px 198px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 464px;
  background-color: #383b64;
  border-radius: 17px;
`;

const SwapBtnText = styled.div`
  ${SegoeuiRegularNormalWhite25px}
  min-height: 27px;
  min-width: 65px;
  letter-spacing: 0;
  line-height: 25px;
  white-space: nowrap;
`;

export default SwapInterface;
