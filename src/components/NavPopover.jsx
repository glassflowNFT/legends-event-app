import React from 'react'
import { Popover } from 'react-bootstrap'
import { Stack } from 'react-bootstrap'
import { useEffect } from 'react'
import { Button, } from '@chakra-ui/react'
import { useWallet } from '@cosmos-kit/react'

function NavPopover() {

  const walletManager = useWallet()
  const {
    username,
    address,
    disconnect,
  } = walletManager;
  useEffect(() => {
    Array.from(document.querySelectorAll('a[data-bs-toggle="popover"]'))
      .forEach(popoverNode => new Popover(popoverNode))
  })

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header>
        <Stack
          as="Stack"
          direction="horizontal"
          className="align-items-baseline"
        >
          <h3 className="flex-grow-1 mb-0">{username}</h3>
        </Stack>
      </Popover.Header>
      <Popover.Body>
        {address}
        <Button colorScheme='blue' variant='outline'  className='m-4' >Disconnect</Button>
      </Popover.Body>
    </Popover>
  )

  return (
    <Button size='md' variant='outline' colorScheme='white' color="Highlight">

      {/* <OverlayTrigger 
        trigger={"focus"}
        placement="center"
     overlay={popover}> */}
      <li onClick={disconnect}>Disconnect</li>
      {/* </OverlayTrigger> */}
    </Button>
  )
}

export default NavPopover