
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import FractalBuy from "./components/FractalBuy";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/:path(|fractalbuy)">
            <FractalBuy
              logo1="https://anima-uploads.s3.amazonaws.com/projects/6277525ba144c3f8ae6f46f0/releases/62775272fce77fef236e24b6/img/logo-1@1x.png"
              navBarProps={fractalBuyData.navBarProps}
              navBarProps2={fractalBuyData.navBarProps2}
              navBarProps22={fractalBuyData.navBarProps22}
            />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
const navBarData = {
    swap: "Swap",
    pool: "Pool",
    chart: "Chart",
};

const navBar2Data = {
    children: "Add to Metamask",
};

const swapInterfaceData = {
    interfacetitle: "Swap",
    targetvalue: "0.0",
    originvalue: "0.0",
    logo: "https://anima-uploads.s3.amazonaws.com/projects/6277525ba144c3f8ae6f46f0/releases/62775272fce77fef236e24b6/img/logo-1@1x.png",
    switchbtn: "https://anima-uploads.s3.amazonaws.com/projects/6277525ba144c3f8ae6f46f0/releases/62775272fce77fef236e24b6/img/switchbtn@1x.png",
    connectWallet: "Connect Wallet",
    swapbtntext: "Swap",
};

const fractalBuyData = {
    navBarProps: navBarData,
    navBarProps2: navBar2Data,
    navBarProps22: swapInterfaceData,
};
