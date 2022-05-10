import React from "react";
import NavBar from "../NavBar";
import NavBar2 from "../NavBar2";
import SwapInterface from "../SwapInterface";
import styled from "styled-components";
import "./FractalBuy.css";

class FractalBuy extends React.Component {
  render() {
    const { logo1, navBarProps, navBarProps2, navBarProps22 } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="fractalbuy screen">
          <FlexRow>
            <Logo src={logo1} />
            <NavBar swap={navBarProps.swap} pool={navBarProps.pool} chart={navBarProps.chart} />
            <NavBar2>{navBarProps2.children}</NavBar2>
          </FlexRow>
          <SwapInterface
            interfacetitle={navBarProps22.interfacetitle}
            targetvalue={navBarProps22.targetvalue}
            originvalue={navBarProps22.originvalue}
            logo={navBarProps22.logo}
            switchbtn={navBarProps22.switchbtn}
            connectWallet={navBarProps22.connectWallet}
            swapbtntext={navBarProps22.swapbtntext}
          />
        </div>
      </div>
    );
  }
}

const FlexRow = styled.div`
  height: 56px;
  position: relative;
  margin-right: 116px;
  display: flex;
  align-items: flex-start;
  min-width: 1164px;
`;

const Logo = styled.img`
  width: 41px;
  height: 41px;
  object-fit: cover;
`;

export default FractalBuy;
