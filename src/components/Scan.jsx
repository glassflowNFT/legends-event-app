import React from 'react'
import { useEffect, useState, useRef } from 'react';
import Navbar from './Navbar'
import Footer from "../assets/footer-cropped.png";
import titleGoldBg from "../assets/LOH_LONG_CURVED_COLOR_2.png";
import { Center, Text } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import Button from 'react-bootstrap/Button';
import { Heading } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react';
import { SimpleGrid } from '@chakra-ui/react'
import { Textarea } from '@chakra-ui/react'
import keplrLogo from "../assets/keplrlogo.png";
import BarcodeScanner from './BarcodeScanner';
import QRCode from 'qrcode';
import { useWallet } from '@cosmos-kit/react'
import { queryGuestType, getGuestType } from '../contracts/guestType';

function Scan() {

  const walletManager = useWallet()
  const {
    currentChainName,
    currentWalletName,
    walletStatus,
    username,
    address,
    message,
    connect,
    disconnect,
    openView,
    setCurrentChain,
    getSigningCosmWasmClient
  } = walletManager;

  async function connectOnClick() {
    setCurrentChain("juno")
    await connect()
  }

  return address && walletStatus === "Connected" ? (
    <div className='base'>

      <Navbar />
      <div>
        <img className="connect-title-gold-bg mt-5" src={titleGoldBg} />
      </div>
      <BarcodeScanner />
      <img className="footer" src={Footer} />
    </div>
  ) : (
    <Container>
      {" "}
      <div className="base">
        <div>
          <Center>
            <Container>
              <img className="connect-title-gold-bg" src={titleGoldBg} />
              <Heading color='white' textAlign='center' mb={10} px="7" noOfLines={2}>
                Connect To Access Event Application{" "}
              </Heading>
            </Container>{" "}
          </Center>
        </div>

        <div className="container">
          <Center>
            <img borderradius="full" className="icon" src={keplrLogo} />
          </Center>
          <Center>
            <Button
              colorScheme="whiteAlpha"
              color="white"
              mb={130}
              onClick={connectOnClick}
              size='lg'
            >
              Connect Keplr
            </Button>
          </Center>
        </div>
      </div>
    </Container>
  )
}


export default Scan