import React from 'react'
import Navbar from './Navbar'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Center } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import Footer from "../assets/footer-cropped.png";
import titleGoldBg from "../assets/LOH_LONG_CURVED_COLOR_2.png";
import drysift from "../assets/dry-sift.png";
import melt from "../assets/melt.png";
import rosin from "../assets/rosin.png";
import { useNavigate } from 'react-router-dom'
import { Container } from '@chakra-ui/react'
import keplrLogo from "../assets/keplrlogo.png";
import { useWallet } from '@cosmos-kit/react'



function VotingCategories() {

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

  let navigate = useNavigate()

  function toRosin() {
    navigate('/Voting-Entries-Rosin')
  }
  function toWater() {
    navigate('/Voting-Entries-MELT')

  }
  function toSift() {
    navigate('/Voting-Entries-Sift')
  }

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
      <div className='container'>
        <div className='holder'>
          <div className='instructions'>
            <p className='steps-to-mint'>Voting Categories</p>
            <SimpleGrid rows={3} spacing={4}>
              <Card variant='outline' onClick={toRosin}>
                <CardHeader >
                  <Center>
                    <Heading color="white" size='xl'> Hash Rosin </Heading>
                  </Center>
                </CardHeader>
                <Center>
                  <CardBody>
                    <Center><Image borderradius='full' boxSize='250px' src={rosin} alt='Water Hash' /></Center>
                    <Center><Heading color="white" size='md'>View all Hash Rosin</Heading></Center>
                  </CardBody>
                </Center>
                <CardFooter>
                </CardFooter>
              </Card>
              <Card variant='outline' onClick={toWater}>
                <CardHeader>
                  <Center><Heading color="white" size='xl'>Water Hashish </Heading></Center>
                </CardHeader>
                <CardBody>
                  <Center><Image borderradius='full' boxSize='250px' src={melt} alt='Water Hash' /></Center>
                  <Center><Heading color="white" size='md'>View All Water Hash</Heading> </Center>
                </CardBody>
                <CardFooter>

                </CardFooter>
              </Card>
              <Card variant='outline' onClick={toSift}>
                <CardHeader>
                  <Center><Heading color="white" size='xl'> Dry Sift Entries</Heading></Center>
                </CardHeader >
                <CardBody>
                  <Center><Image borderradius='full' boxSize='250px' src={drysift} alt='Water Hash' /></Center>
                  <Center><Heading color="white" size='md'>View all Dry Sift</Heading></Center>
                </CardBody>

              </Card>
            </SimpleGrid>
          </div>
        </div>
      </div>
      <img className="footer" src={Footer} />
    </div>
  ) : (
    <Container>
      {" "}
      <div className="base-wallet-gate">
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

export default VotingCategories