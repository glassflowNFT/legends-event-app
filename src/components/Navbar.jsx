import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Flex, Spacer } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import NavPopover from './NavPopover'
import { HamburgerIcon } from '@chakra-ui/icons'
import { useWallet } from '@cosmos-kit/react'

function Navbar() {
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

  const admin = JSON.parse(localStorage.getItem("admin?"))

  let navigate = useNavigate()

  function toConnect() {
    navigate('/Connect')
  }
  function toHome() {
    navigate('/')
  }
  function toVoteCategories() {
    navigate('/Voting-Categories')
  }
  function toRegister() {
    navigate('/Register')
  }
  function toScan() {
    navigate('/Scan')
  }
  function toMint() {
    navigate('/Mint')
  }
  function toBrowse() {
    navigate('/Browse')
  }


  return admin === 'non-admin' ? (
    <Container>
      <div className='fixed-top'>
        <nav class="navbar navbar-expand-lg">
          <Flex minWidth='max-content' alignItems='center' gap='1'>
            <Box p='2'>


            </Box>
            <Spacer />

            <Button onClick={toHome} px='-15' colorScheme='white' color='burlywood' >Legends 2022: LA</Button>
            {!address ? <Button colorScheme='purple' size='sm' ml={9} onClick={connect} > Connect</Button> : <NavPopover />}
            <div className='dropdown'>
              <Button ml={5} size='lg' color='white' colorScheme='white' className='dropdown-toggle' type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <HamburgerIcon color='white' />
              </Button>
              <ul className='dropdown-menu' aria-labelledby="dropdownMenuButton1">
                <li className='dropdown-item' onClick={toVoteCategories} color='white' colorScheme='white'>Vote</li>
                <li className='dropdown-item' onClick={disconnect}>Disconnect</li>
                <li className='dropdown-item' onClick={toRegister}>Register</li>
                <li className='dropdown-item' onClick={toBrowse}>Browse</li>
              </ul>
            </div>
          </Flex>
        </nav>
      </div>
    </Container>
  ) : (
    <Container>
      <div className='fixed-top'>
        <nav class="navbar navbar-expand-lg">
          <Flex minWidth='max-content' alignItems='center' gap='1'>
            <Box p='2'>


            </Box>
            <Spacer />

            <ButtonGroup gap='1'>
              <Button variant="outline" onClick={toHome} px='-15' colorScheme='white' color='burlywood' >Legends 2022: LA</Button>
              <Button variant="outline" onClick={toVoteCategories} size='md' color='white' colorScheme='white'>Vote</Button>
              <Button variant="outline" onClick={toScan} size='md' color='white' colorScheme='white'>Scan</Button>
              <Button variant="outline" onClick={toMint} size='md' color='white' colorScheme='white'>Mint</Button>
             {/* <NavPopover />*/}
             { /*<Button colorScheme='purple' onClick={toConnect} > QR Code</Button>8*/}
            </ButtonGroup>
          </Flex>
        </nav>
      </div>
    </Container>
  )

}



export default Navbar
