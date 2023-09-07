import { React, useState } from "react"
import Navbar from "./Navbar"
import Footer from "../assets/footer-cropped.png"
import titleGoldBg from "../assets/LOH_LONG_CURVED_COLOR_2.png"
import { Center, Text } from "@chakra-ui/react"
import { Container } from "@chakra-ui/react"
import { Heading } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"
import Button from "react-bootstrap/Button"
import { Stack } from "@chakra-ui/react"
import { Card, CardBody } from "@chakra-ui/react"
import keplrLogo from "../assets/keplrlogo.png"
import { useEffect } from "react"
import QRCode from "qrcode"
import { getGuestType, queryGuestType } from "../contracts/guestType"
import { useWallet } from '@cosmos-kit/react'


function Connect() {

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
  
  const [qrcode, setQrcode] = useState("")

  const [memberWeight, setMemberWeight] = useState(null)
  const [show, setShow] = useState(true)

  async function connectOnClick() {
    setCurrentChain("juno")
    await connect()

  }

  function showQrCode() {
    QRCode.toDataURL(address).then(setQrcode)
    setShow(false)
  }

  console.log(address)


  useEffect(() => {
    const query = async () => {
      const client = await getSigningCosmWasmClient()

      if (address) {
        const response = await queryGuestType(client, address)
        setMemberWeight(response.weight)
      }
    }

    query()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address])

  console.log(memberWeight);

  return address && walletStatus === "Connected" ? (
    <div className="base">
      <Navbar />
      <div>
        <img className="connect-title-gold-bg mt-5" src={titleGoldBg} />

      </div>
      <Container>
        <div className="container">
          <Center>
            <img src={keplrLogo} />
          </Center>
          <div className="connect-holder">
            <Text>
              Connect and display your QR code for access to The legends Of
              Hashish.{" "}
            </Text>

            <Center>
              {show ? <Button size='lg' onClick={showQrCode}>Generate QR Code</Button> : null}
              <Center>
                <Image
                  width="500" height="500"
                  objectFit="contain"
                  // className="logo mt-3"
                  src={qrcode}
                />
              </Center>
            </Center>
          </div>
        </div>
        <Container maxW="2xl" s centerContent>
          <Card direction="row" overflow="hidden" variant="outline">
            <Stack>
              <CardBody>
                <Center>
                  <Heading color="white" size="md">
                    Connected Wallet is a:{" "}
                  </Heading>
                </Center>
                <Center><Heading color="#F3C674">{getGuestType(memberWeight)}</Heading></Center>
              </CardBody>
              <Center>
              </Center>
            </Stack>
          </Card>
        </Container>
      </Container>

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

export default Connect