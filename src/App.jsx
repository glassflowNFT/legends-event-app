import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from "./components/ScrollToTop";
import Home from './components/Home'
import Connect from './components/Connect'
import Mothership from './components/Mothership'
import Mint from './components/Mint'
import Register from './components/Register'
import Scan from './components/Scan'
import Shop from './components/Shop.tsx'
import Fourohfour from './components/Fourohfour'
import Results from './components/Results'
import VotingCategories from "./components/VotingCategories";
import VotingEntriesWater from "./components/VotingEntriesWater";
import VotingEntriesRosin from "./components/VotingEntriesRosin";
import VotingEntriesDry from "./components/VotingEntriesDry";
import Vote from "./components/Vote";
import AllImages from "./components/AllImages"
import { ChakraProvider } from '@chakra-ui/react';
import { ChainProvider, WalletProvider, useW } from '@cosmos-kit/react';
import { chains, assets, ibc } from 'chain-registry';
import { wallets as keplrWallets } from '@cosmos-kit/keplr';
import { createLocalStorageManager } from "@chakra-ui/react";



function App() {

  return (
    <ChakraProvider
      /* theme={defaultThemeWithoutCSSReset}  */
      resetCSS={true}
      colorModeManager={createLocalStorageManager('chakra-ui-color-mode')}>
      <WalletProvider
        chains={[...chains]}
        assetLists={[...assets]}
        wallets={[...keplrWallets]}
      >
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/connect' element={<Connect />}></Route>
            <Route path='/mothership' element={<Mothership />}></Route>
            <Route path='/mint' element={<Mint />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/scan' element={<Scan />}></Route>
            <Route path='/404' element={<Fourohfour />}></Route>
            <Route path='/voting-categories' element={<VotingCategories />}></Route>
            <Route path='/voting-entries-melt' element={<VotingEntriesWater />}></Route>
            <Route path='/voting-entries-rosin' element={<VotingEntriesRosin />}></Route>
            <Route path='/voting-entries-sift' element={<VotingEntriesDry />}></Route>
            <Route path='/vote/:category/:id/:src' element={<Vote />}></Route>
            <Route path='/browse' element={<AllImages />}></Route>
            <Route path='/results' element={<Results />}></Route>
          </Routes>
        </Router>
      </WalletProvider>
    </ChakraProvider>
  );
}

export default App;
