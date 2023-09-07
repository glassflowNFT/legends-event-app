import React, { useEffect } from "react"
import { useZxing } from "react-zxing"
import { Center, Container, Divider, Text } from "@chakra-ui/react"
import { Button } from "@chakra-ui/react"
import { useState } from "react"
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react"
import { Stack } from "@chakra-ui/react"
import { Heading } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"
import { SimpleGrid } from "@chakra-ui/react"
import { queryGuestType, getGuestType } from "../contracts/guestType"
import { queryDayOneArrival, queryDayTwoArrival } from "../contracts/arrival"
import { useWallet } from '@cosmos-kit/react'

function BarcodeScanner() {
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

  const [result, setResult] = useState("")


  const { ref } = useZxing({
    onResult(result) {
      setResult(result.getText())
    },
  })

  function resetClick() {
    setResult("")
    console.log("reset")
  }

  const [memberWeight, setMemberWeight] = useState(null)
  const [dayOneArrival, setDayOneArrival] = useState(null)
  const [dayTwoArrival, setDayTwoArrival] = useState(null)

  useEffect(() => {
    const query = async () => {
      const client = await getSigningCosmWasmClient()

      if (result) {
        const response = await queryGuestType(client, result)
        setMemberWeight(response.weight)
      }
    }

    query()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result])

  useEffect(() => {
    const query = async () => {
      const client = await getSigningCosmWasmClient()

      if (result) {
        queryDayOneArrival(client, result)
          .then(() => setDayOneArrival(true))
          .catch((err) => setDayOneArrival(false))

        queryDayTwoArrival(client, result)
          .then(() => setDayTwoArrival(true))
          .catch((err) => setDayTwoArrival(false))
      }
    }

    query()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result])


  return (
    <Center>
      {" "}
      <Container>
        <div>
          <video ref={ref} id="video" width={480} height={852}></video>
          <SimpleGrid columns={1} spacing={5}>
            <Card direction="row" variant="outline">
              <Stack>
                <CardBody>
                  <Center>
                    <Heading color="white" size="md">
                      Wallet Address:
                    </Heading>
                  </Center>
                  <Text color="#F3C674" py="2">
                    {result}
                  </Text>
                </CardBody>

                <CardFooter>
                  <Center>
                    <Button onClick={resetClick}>Reset</Button>
                  </Center>
                </CardFooter>
              </Stack>
            </Card>
            <Card direction="row" variant="outline">
              <Stack>
                <CardBody>
                  <Heading color="white" size="md">
                    {" "}
                    Guest Type{" "}
                  </Heading>
                  <Center>
                    <Heading color="#F3C674">
                      {getGuestType(memberWeight)}
                    </Heading>
                  </Center>
                  <Center>
                    <Heading color="white" size="md">
                      Arrival Status: Dinner{" "}
                    </Heading>
                  </Center>
                  <Heading size="md" color="#F3C674" py="2">
                    {dayOneArrival ? "Arrived" : "Not Arrived"}
                  </Heading>
                  <Center>
                    <Heading color="white" size="md">
                      Arrival Status: Brunch{" "}
                    </Heading>
                  </Center>
                  <Heading size="md" color="#F3C674" py="2">
                    {dayTwoArrival ? "Arrived" : "Not Arrived"}
                  </Heading>
                </CardBody>
                <CardFooter>
                  <Center>
                    <SimpleGrid columns={2} spacing={10}>
                      <Card direction="row" variant="outline">
                        <Stack>
                          <CardBody>
                            <Center>
                              <Heading color="white" size="md">
                                Update Brunch Arrival Status:{" "}
                              </Heading>
                            </Center>
                          </CardBody>

                          <CardFooter>
                            <Center>
                              <Button onClick={resetClick}>Update</Button>
                            </Center>
                          </CardFooter>
                        </Stack>
                      </Card>
                      <Card direction="row" variant="outline">
                        <Stack>
                          <CardBody>
                            <Center>
                              <Heading color="white" size="md">
                                Update Dinner Arrival Status:{" "}
                              </Heading>
                            </Center>
                            <Text color="white" py="2"></Text>
                          </CardBody>

                          <CardFooter>
                            <Center>
                              <Button>Update</Button>
                            </Center>
                          </CardFooter>
                        </Stack>
                      </Card>
                    </SimpleGrid>
                  </Center>
                </CardFooter>
              </Stack>
            </Card>
          </SimpleGrid>
        </div>
      </Container>
    </Center>
  )
}


export default BarcodeScanner