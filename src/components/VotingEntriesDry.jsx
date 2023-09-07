import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from "../assets/footer-cropped.png";
import { Card, CardBody, CardFooter } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import titleGoldBg from "../assets/LOH_LONG_CURVED_COLOR_2.png";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Center } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Grid } from '@chakra-ui/react'
import { Tag } from '@chakra-ui/react'
import { Badge } from '@chakra-ui/react'
import rectangle8 from "../assets/rectangle8.png";
import { useNavigate, useParams } from 'react-router-dom';
import { Container } from '@chakra-ui/react'
import keplrLogo from "../assets/keplrlogo.png";
import { useWallet } from '@cosmos-kit/react'
import { queryDryEntries } from '../contracts/voteContract';
import { useEffect } from 'react';
import EntryCard from './EntryCard';
import seven from '../assets/Compressed pics/seven.png'
import eight from '../assets/Compressed pics/eight.png'
import { Input, Stack } from '@chakra-ui/react';

function VotingEntriesDry() {

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
  let params = useParams()

  const [entries, setDryEntries] = useState([])
  const [query, setQuery] = useState('')

  useEffect(() => {
    const getDryEntries = async () => {
      const client = await getSigningCosmWasmClient()

      // Query without any pagination
      // Lists 30 entries by default
      const dryResponse = await queryDryEntries(client, 'sift')
      setDryEntries(dryResponse)
    }

    getDryEntries()
  }, [])

  const entryArray = []
  let siftPhotoArray = []
  let newArray = []

  siftPhotoArray.push(null,null,null,null,null,null, null, seven, eight)

  entries?.forEach((e, i) => {

    var x = e.data
    x.id = e.id

    siftPhotoArray?.map((p, i) => {
      if (i === x.id) {
        x.photo = p
      }
    })
    entryArray.push(x)
  })

  console.log(entryArray);

  function nextCategory() {
    navigate('/Voting-Entries-Rosin')
  }

  function prevCategory() {
    navigate('/Voting-Entries-Melt')
  }

  function toVoteCategories() {
    navigate('/Voting-Categories')
  }

  async function connectOnClick() {
    setCurrentChain("juno")
    await connect()
  }

  const handleQuery = e => {
    setQuery(e.target.value)
  }

  const filteredEntryArray = entryArray?.filter(e => e.name.toLowerCase().includes(query.toLowerCase()))

  return address && walletStatus === "Connected" ? (
    <div className='base-voting-sift'>
      <Navbar />
      <div><img className="connect-title-gold-bg mt-5" src={titleGoldBg} />
      </div>
      <Heading p='4' noOfLines={2} color='#F3C674' className='water-hash-title me-1' > Dry Sift Entries</Heading>
      <Center>
        <Stack>
          <Input placeholder='Search...' m={'auto'} w='200px' onChange={handleQuery} color={'white'} />
          <ButtonGroup spacing='2'>
            <Button colorScheme='teal' onClick={prevCategory} variant='outline'> Water</Button>
            <Button mb={5} w='100px' onClick={toVoteCategories}>All Entries</Button>
            <Button p='5' colorScheme='teal' onClick={nextCategory} variant='outline'> Rosin </Button>
          </ButtonGroup>
        </Stack>
      </Center>
      <Center> <div className='container me-3'>
      </div>

      </Center>
      <Container>
        <Grid templateRows='repeat(5, 1fr)' gap={6}>
          {filteredEntryArray?.map(e => {
            return (
              <EntryCard key={e.id} e={e} id={e.id} category={e.category} src={e.photo} />
            )
          })}
        </Grid>
      </Container>
      <img className="footer" src={Footer} />
    </div>
  ) : (
    <Container>
      {" "}
      <div className="base-voting-sift">
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

export default VotingEntriesDry