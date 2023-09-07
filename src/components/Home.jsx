import React from 'react'
import { Box } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Card, CardBody, CardFooter } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import { Center } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, } from '@chakra-ui/react'
import Footer from "../assets/footer-cropped.png";
import { Heading } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, } from '@chakra-ui/react'
import Navbar from './Navbar';
import { Stack, HStack, VStack } from '@chakra-ui/react'
import two from '../assets/Compressed pics/two.png'
import sponsors1 from "../assets/sponsors1.png";
import { Text } from '@chakra-ui/react'
import titleGoldBg from "../assets/LOH_LONG_CURVED_COLOR_2.png";
import keplrLogo from "../assets/keplrlogo.png";
import { useDisclosure } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { queryAdmin, getAdmin } from '../contracts/adminType'
import { useWallet } from '@cosmos-kit/react'


function Home() {
  const walletManager = useWallet()

  let navigate = useNavigate()

  const [loading, setLoading] = useState(false)
  const [adminStatus, setAdminStatus] = useState(null)

  const {
    currentChainName,
    currentWalletName,
    walletStatus,
    username,
    address,
    message,
  } = walletManager

  const {
    connect,
    disconnect,
    openView,
    setCurrentChain,
    getSigningCosmWasmClient
  } = walletManager;

  console.log(walletManager);

  async function connectOnClick() {
    setCurrentChain("juno")
    await connect()

  }

  useEffect(() => {
    const query = async () => {
      if (address) {
        const client = await getSigningCosmWasmClient()

        const adminResponse = await queryAdmin(client, address)
        setAdminStatus(adminResponse.weight)

        localStorage.setItem('admin?', JSON.stringify(getAdmin(adminResponse.weight)))
      }
    }
    query()
  }, [address])
  
  function toRegister() {
    navigate('/register')
  }
  function toConnect() {
    navigate('/connect')
  }
  function toVoteCategories() {
    navigate('/voting-categories')
  }
  function toResults() {
    navigate('/results')
  }
  function toMothership() {
    navigate('/mothership')
  }

  const { isOpen, onOpen, onClose } = useDisclosure()

  return address && walletStatus === "Connected" ? (

    <div className='base'>
      <Navbar />
      <Center><div>
        <img className="title-gold-bg mt-5" src={titleGoldBg} />
      </div>
      </Center>

      <Center><Heading color="white" mb={4}>Transparent Judging  for The Legends of Hashish</Heading></Center>
      <div className='container me-3'>
        <div className="row">
          <div className='col'>
          </div>


        </div>

        <Box p='2'>
          <Card direction='row' overflow='hidden' variant='outline'>
            <Image
              objectFit='cover'
              maxW='150px'
              src="https://static.wixstatic.com/media/bf939a_b013ec07669d43b7b8e3c69a2bfee731~mv2.jpeg/v1/crop/x_65,y_0,w_1039,h_1140/fill/w_320,h_351,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_6F87080121FA-1.jpeg"
              alt='Categories'
            />
            <Stack>
              <CardBody>
                <Heading color='white' size='md'>Register for 2023</Heading>
                <Text color='white' py='2'>
                  Register to be able to purchase a ticket to the 2023 Legends of Hashish.

                </Text>
                <Button variant='solid' colorScheme='yellow' p='2' onClick={toRegister}>
                  Register Now!
                </Button>
              </CardBody>
            </Stack>
          </Card>
        </Box>

        <Box p='2'>
          <Card direction='row' overflow='hidden' variant='outline'>
            <Image
              objectFit='cover'
              maxW='150px'
              src={two}
              alt='Categories'
            />
            <Stack>
              <CardBody>
                <Heading color='white' size='md'>View This Year's Entries</Heading>
                <Text color='white' py='2'>
                  Judge allocates points for each of this years entries, not including their own.

                </Text>
                <Button variant='solid' colorScheme='yellow' p='2' onClick={toResults}>
                  2022 LA Results
                </Button>
              </CardBody>
              <CardFooter>
                <Button variant='solid' colorScheme='blue' onClick={toVoteCategories}>
                  All Entries
                </Button>


              </CardFooter>
            </Stack>
          </Card>
        </Box>

        <Box p='2'>
          <Card direction='row' variant='outline'>
            <Image
              objectFit='cover'
              maxW='150px'
              src="https://bafkreiet6izx5ts3n5mi4fuw6h626t44wzbkgfkxwq4cyqllwvuzjwarue.ipfs.nftstorage.link/"
              alt='Couch Locked'
            />
            <Stack>
              <CardBody>
                <Heading color='white' size='md'>NFT Drop's</Heading>
                <Text py='2' color="white">
                  View All NFT Collections

                </Text>
              </CardBody>
              <CardFooter>
                <Button variant='solid' colorScheme='blue' onClick={toMothership}>
                  View
                </Button>
              </CardFooter>
            </Stack>
          </Card>
        </Box>

        <Box p='2'>
          <Card direction='row' overflow='hidden' variant='outline'>
            <Image
              objectFit='cover'
              maxW='150px'
              src="https://bafybeigyltl2mqxvenvuxt6ypchmb3s5o4wcq3w7c2kexxbr4b4tzbcghe.ipfs.nftstorage.link/"
              alt='NFT Ticket'
            />
            <Stack>
              <CardBody>
                <Heading color="white" size='md'>Display QR Ticekt.</Heading>
                <Text color="white" py='2'>
                  Ensure you have already installed & imported your Legends Event Mnemonic Seed to Keplr Mobile.
                </Text>
              </CardBody>
              <CardFooter>
                <Button variant='solid' colorScheme='blue' onClick={toConnect}>
                  Display
                </Button>
              </CardFooter>
            </Stack>
          </Card>
        </Box>

        <Box p='2'>

          <Card direction='row' overflow='hidden' variant='outline'>
            <Image
              objectFit='cover'
              maxW='150px'
              src="https://nftstorage.link/ipfs/bafybeif7p5pwt6deaf43jg6v7ohxa4s6rlk7koq5dkkiizzpxcvhz662qq"
              alt='gflow_no_bg'
            />
            <Stack>
              <CardBody>
                <Heading color="white" size='md'>Info / FAQ</Heading>
                <Text color="white" py='2'>
                  Information and frequently asked questions.

                </Text>
              </CardBody>
              <CardFooter>
                <Button variant='solid' colorScheme='blue' onClick={onOpen}>Learn More</Button>
              </CardFooter>
            </Stack>
          </Card>
        </Box>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>FAQ</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex='1' textAlign='left'>
                        1. Why did we build this application?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Applications powered by smart contracts and cryptographic wallets unlocks true censorship resistant technology that our culture needs, now.
                    Our use case of providing transparency within a voting system is just one small example of how we can, as a community build and own smart contract applications.
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex='1' textAlign='left'>
                        2. How do I find my Wallet QR Code?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    You can find the QR code needed to access the Legends event in two places.
                    The first place is in the connect page within the application. Simple return to the home page, and the first button you see will take you to where a QR code will
                    be automatically generated for the wallet connected to the application.
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2><AccordionButton>
                    <Box flex='1' textAlign='left'>3. I am a judge, How do I vote?</Box>
                    <AccordionIcon />
                  </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Simply browse each entry within their respective categories, choose one that you have sampled and are ready to vote on, set the points for each of the entry's elements and broadcast the message via keplr.
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2><AccordionButton>
                    <Box flex='1' textAlign='left'>4. Can I mint any NFT's?</Box>
                    <AccordionIcon />
                  </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Every Guest now owns a 2022 Legends Attendance Token. Only Those who are either owners of the gz1 x mothershp collab pipes, or was one of the first 20 people to buy a gz1 x Mothership collaboration shirt can mint those tokens.
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost'><Text>

                <Link color='teal.500' href='https://zenith-oval-36e.notion.site/The-Official-Legends-Event-Judging-Ticket-Application-Wiki-fd55a4fc1eaf4f8291d1b3afd37614b2'>View Wiki</Link>
              </Text></Button>
            </ModalFooter>
          </ModalContent>
        </Modal>


      </div>

      <div className='holder'>
        <Center><p className="transparent-judging">
        </p></Center>
        <img className="sponsors-1" src={sponsors1} />
      </div>
      <img className="footer" src={Footer} />

    </div>
  ) : (
    <div >
      <Center>
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
      </Center>
    </div>
  )
}
function BasicUsage() {


}

export default Home