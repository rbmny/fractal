import React from "react";
import styled from "styled-components";
import { SegoeuiRegularNormalWhite20px } from "../../styledMixins";


class NavBar extends React.Component {
  render() {
    const { swap, pool, chart } = this.props;

    return (
      <NavBar1>
        <OverlapGroup2>
          <Swap>{swap}</Swap>
        </OverlapGroup2>
        <Pool>{pool}</Pool>
        <Chart>{chart}</Chart>
      </NavBar1>
    );
  }
}

const NavBar1 = styled.div`
  ${SegoeuiRegularNormalWhite20px}
  height: 56px;
  margin-left: 424px;
  display: flex;
  padding: 0 5px;
  align-items: center;
  min-width: 350px;
  background-color: var(--eerie-black);
  border-radius: 17px;
`;

const OverlapGroup2 = styled.div`
  height: 46px;
  display: flex;
  padding: 11px 23px;
  align-items: flex-end;
  min-width: 100px;
  background-color: var(--shark);
  border-radius: 17px;
`;

const Swap = styled.div`
  ${SegoeuiRegularNormalWhite20px}
  min-height: 22px;
  min-width: 52px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const Pool = styled.div`
  min-height: 22px;
  margin-left: 47px;
  margin-top: 2px;
  min-width: 42px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const Chart = styled.div`
  min-height: 22px;
  margin-left: 77px;
  margin-top: 2px;
  min-width: 51px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

export default NavBar;
