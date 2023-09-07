import React from 'react';
import { Center, Container, Divider } from '@chakra-ui/layout';
import { Box, Card, Heading, Button, Text} from '@chakra-ui/react';
import { useWallet } from '@cosmos-kit/react'
import NavPopover from './NavPopover';


function Typeform() {

  const walletManager = useWallet()
  const {
    currentChainName,
    currentWalletName,
    connectedWalletId,
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


  return (

    <Container   maxW="5xl" py={10}>
       <Heading textAlign="center"
         py="3" as="h1" fontSize={{ base: '3xl', md: '5xl' }} fontWeight="extrabold" mb={5}>
        Registration
      </Heading>
      <Card  backgroundColor="#2c2c2c" p={2}>
      <Box textAlign="left">
      <Heading as="h2" p="3" fontSize={{ base: 'xl', md: '2xl' }} fontWeight="extrabold" mb={5} >
          Step 1: Connect & Copy your Juno wallet address:</Heading>
          <Center><Button size='sm'  px="4" alignItems='baseline'  py="2" ml={9} >{address}</Button></Center>
   <Center p="2">{!address ? <Button colorScheme='purple' size='lg' py="2" ml={9} onClick={connect} > Connect</Button> : <NavPopover />}</Center>
   <Divider/>
      </Box>
      <Heading textAlign="left" as="h2" p="3" fontSize={{ base: 'xl', md: '2xl' }} fontWeight="extrabold" mb={5} >
          Step 2: Paste your Juno wallet address & provide your company name & email: </Heading>
    <div p="2">
      <iframe
        id="typeform-full"
        title="Typeform"
        width="100%"
        height="500px"
        frameBorder="0"
        src="https://j3o5m4djjop.typeform.com/to/rdQCOrPB" 
      />
      <script
        type="text/javascript"
        src="https://embed.typeform.com/embed.js"
      />
    </div>
      </Card>
    </Container>
  );
}

export default Typeform;

