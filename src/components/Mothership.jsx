import React from "react"
import Navbar from "./Navbar"
import Footer from "../assets/footer-cropped.png"
import titleGoldBg from "../assets/LOH_LONG_CURVED_COLOR_2.png"
import msGz1Shirt from "../assets/msxgz1.png"
import msgzcollab from "../assets/gz1-collab-ms.png"
import mscamel from "../assets/ms-camel.png"
import { Center, Divider, Heading } from "@chakra-ui/react"
import { Button, ButtonGroup } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react"
import { useDisclosure } from "@chakra-ui/react"
import { Stack, HStack, VStack } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"
import { Box } from "@chakra-ui/layout"
import { Container } from "@chakra-ui/react"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react"
import keplrLogo from "../assets/keplrlogo.png"
import { checkMembership } from "../contracts/checkMembership"
import { useWallet } from '@cosmos-kit/react'
import { LinkBox, LinkOverlay } from '@chakra-ui/react'


function Mothership() {

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

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [scrollBehavior, setScrollBehavior] = React.useState("inside")
  const btnRef = React.useRef(null)

  const mintFreeNFT = async () => {
    try {
      const response = await checkMembership(
        getSigningCosmWasmClient,
        "juno1ss9tlfsj53uc5w6g45sjtu88uyc6nf7ar0k8wge8fmzz3588ceks2xvsnn",
        address
      )
      if (response.weight === null) {
        return alert("You are not a member")
      }
    } catch (error) {
      alert(error.message)
    }
  }

  const mintCollabDrop = async () => {
    try {
      const response = await checkMembership(
        getSigningCosmWasmClient,
        "juno1egnnvg6d60787rg2zdw8wua79s4f25zzc56nnv8hyvmq656jyeksrlug9r",
        address
      )
      if (response.weight === null) {
        return alert("You are not a member")
      }
    } catch (error) {
      alert(error.message)
    }
  }

  const mintTshirt = async () => {
    try {
      const response = await checkMembership(
        getSigningCosmWasmClient,
        "juno15aagx8wy9klpx9nn8l04vpydmksasexyl9yrgcqya8mcx2374rmskjt6v2",
        address
      )
      if (response.weight === null) {
        return alert("You are not a member")
      }
    } catch (error) {
      alert(error.message)
    }
  }

  async function connectOnClick() {
    setCurrentChain("juno")
    await connect()
  }

  return address && walletStatus === "Connected" ? (
    <div className="base">
      <Navbar />
      <div>
        <img className="title-gold-bg mt-5" src={titleGoldBg} />
      </div>
      <div className="container">
        <Card
          m={[2, 3]}
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
        >
          <Box boxSize='sm'>
            <Image
              objectFit="cover"
              maxW={{ base: "100%", sm: "400px" }}
              src="https://bafybeibu3vlqxaihlr4jqvb4trwulga4mmx2vv24azt5ybbgjezslbia7u.ipfs.nftstorage.link/"
              alt="Caffe Latte"
            />
          </Box>

          <Stack>
            <CardBody>
              <Heading color='white' size="xl" p="4">
                Claim Your Legends Event Access NFT .
              </Heading>
              <Text fontSize='xl' color='white' py="2">
                Each Legends guest can claim their guest specific NFT. Make sure you have a bit of $SCRT for gas!
              </Text>
            </CardBody>
            <Center>
              <CardFooter>
                <LinkBox as="button" maxW='sm' p='5' borderWidth='1px' rounded='md'>
                  <Heading size='md' my='2'>
                    <LinkOverlay href='https://stashh.io/collection/legends-of-hashish-event-access-tokens?tab=badges'>
                      <Button> Claim Your NFT</Button>
                    </LinkOverlay>
                  </Heading>
                  <Text>

                  </Text>
                </LinkBox>
              </CardFooter>
            </Center>
          </Stack>
        </Card>

        <Card
          m={[2, 3]}
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
        >
          <Box boxSize='sm'>
            <Image
              objectFit="cover"
              maxW={{ base: "100%", sm: "400px" }}
              src={mscamel}
              alt="Caffe Latte"
            />
          </Box>

          <Stack>
            <CardBody>
              <Heading color='white' size="xl" p="4">
                Claim Your Free 2022 Mothership x Legends NFT.
              </Heading>
              <Text fontSize='xl' color='white' py="2">
                Each Legends guest has been whitelisted for  one official attendance NFT in
                collaboartion with The Mothership Team.
              </Text>
            </CardBody>
            <Center>
              <CardFooter>
                <LinkBox as="button" maxW='sm' p='5' borderWidth='1px' rounded='md'>
                  <Heading size='md' my='2'>
                    <LinkOverlay href='https://stashh.io/asset/legends-of-hashish-event-access-tokens/LEGENDS_FREE_2022'>
                      <Button> View Your NFT</Button>
                    </LinkOverlay>
                  </Heading>
                  <Text>

                  </Text>
                </LinkBox>
              </CardFooter>
            </Center>
          </Stack>
        </Card>

        <Card
          m={[2, 3]}
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "400px" }}
            src={msgzcollab}
            alt="Caffe Latte"
          />

          <Stack>
            <CardBody>
              <Heading color='white' size="xl" p="4" >Gz-1 x Mothership Legends Drop </Heading>
              <Text color='white' fontSize='xl' py="2">
                A limited number of guests will be walking away with both a pipe
                and NFT from GZ1 and the Mothership Team.
              </Text>
            </CardBody>
            <Center>
              <LinkBox as="button" maxW='full' p='5' borderWidth='1px' rounded='md'>
                <Heading size='md' my='2'>
                  <LinkOverlay href='https://stashh.io/collection/mothership-glass-drop-gz1-collab'>
                    <Button> View Your NFT</Button>
                  </LinkOverlay>
                </Heading>
                <Text>

                </Text>
              </LinkBox>
            </Center>
          </Stack>
        </Card>

        <Card
          m={[2, 3]}
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "400px" }}
            src={msGz1Shirt}
            alt="Caffe Latte"
          />

          <Stack>
            <CardBody>
              <Heading color='white' p="4" size="xl">
                Mothership x Gz1 T-shirt Collection
              </Heading>
              <Text fontSize='xl' color='white' py="2">
                The First 20 people to purchase the official Mothership &
                Legends of Hashish merchandise can view the collection here.
              </Text>
              <Heading as="u">
                <strong></strong>
              </Heading>
            </CardBody>
            <Center>
              <CardFooter>
                <Center>
                  <LinkBox as="button" maxW='sm' p='5' borderWidth='1px' rounded='md'>
                    <Heading size='md' my='2'>
                      <LinkOverlay href='https://stashh.io/asset/mothership-glass-drop-gz1-collab/MSxGZ_Tshirt'>
                        <Button> View Your NFT</Button>
                      </LinkOverlay>
                    </Heading>
                    <Text>

                    </Text>
                  </LinkBox>
                </Center>
              </CardFooter>
            </Center>
          </Stack>
        </Card>
      </div>
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
            <img borderRadius="full" className="icon" src={keplrLogo} />
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

export default Mothership