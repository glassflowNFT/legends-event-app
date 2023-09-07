import React from 'react'
import { Card, CardBody, CardFooter } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import rectangle8 from "../assets/rectangle8.png";
import { useNavigate, useParams } from 'react-router-dom';
import { Badge } from '@chakra-ui/react'
import { Tag } from '@chakra-ui/react'
import { useWallet } from '@cosmos-kit/react'
import { queryEntries } from '../contracts/voteContract';
import { useEffect, useState } from 'react';
import { queryTallyVotes } from '../contracts/voteContract'


function EntryCard({ e, id, category, src }) {
  let navigate = useNavigate()

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

  const [votes, setVotes] = useState([])

  function toVoting() {
    navigate(`/Vote/${category}/${id}/${src.slice(14)}`)
  }

  useEffect(() => {
    const hasVotes = async () => {
      const client = await getSigningCosmWasmClient()

      const voteResponse = await queryTallyVotes(client, parseInt(id))
      setVotes(voteResponse.votes)
    }
    hasVotes()
  }, [])



  return (
    <Card onClick={toVoting} direction='row' overflow='hidden' variant='outline'>
      <Image maxW='170px' src={src} alt='EntryCover' />
      <Stack  >
        <CardBody>
          <Heading color='white' fontSize='lg' fontWeight='bold'>
            {e.name}

            <Badge ml={1} fontSize='0.5em' colorScheme='green' >
              {e.maker_name}
            </Badge>
          </Heading>
          <Text py='2' color='white' fontSize={'0.8em'}>
            {e.breeder}
          </Text>
        </CardBody>
        <CardFooter>
          <Flex>
            <Button onClick={toVoting} variant='solid' colorScheme='blue'>
              Vote</Button>
            <Spacer p='1' />
            {votes.length > 0 ? <Tag w={'50px'} colorScheme={'blue'}>Voted</Tag> : null}
          </Flex>
        </CardFooter>
      </Stack>
    </Card>
  )
}

export default EntryCard
