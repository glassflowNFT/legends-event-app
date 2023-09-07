import React, { useEffect, useState, useMemo } from 'react'
import { useLocation,useParams,useNavigate } from 'react-router-dom'
import { useWallet } from '@cosmos-kit/react'
import { Stack, Image,Button,Center, Container, HStack ,Text,Heading, Wrap, Divider,Card, CardBody} from '@chakra-ui/react'
import Navbar from './Navbar'
import Footer from "../assets/footer-cropped.png";
import titleGoldBg from "../assets/LOH_LONG_CURVED_COLOR_2.png";
import rectangle8 from "../assets/rectangle8.png";
import keplrLogo from "../assets/keplrlogo.png";
import { getJudge, queryJudge, queryVotes, vote, queryEntry , queryTallyVotes  } from '../contracts/voteContract'
import first from '../assets/Compressed pics/one.png'
import second from '../assets/Compressed pics/two.png'

import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from '@chakra-ui/react'

function Vote() {

  let params = useParams()

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

  const [lookValue, setLookValue] = useState("5")
  const [smellValue, setSmellValue] = useState("5")
  const [tasteValue, setTasteValue] = useState("5")
  const [meltValue, setMeltValue] = useState("5")
  const [judgeWeight, setJudgeWeight] = useState(null)
  const [isJudge, setIsJudge] = useState(false)
  const [entry, setEntry] = useState([])
  const [votes, setVotes] = useState([])

  const paramIdToNum = params.id
  const paramCategoryToString = params.category
  
  


  const handleLookChange = e => setLookValue(e.target.value)
  const handleSmellChange = e => setSmellValue(e.target.value)
  const handleTasteChange = e => setTasteValue(e.target.value)
  const handleMeltChange = e => setMeltValue(e.target.value)

  let navigate = useNavigate()
  const { search } = useLocation()

  const urlParams = useMemo(() => new URLSearchParams(search), [search])

  function toVoteCategories() {
    navigate(`/Voting-Entries-${params.category}`)
  }

  useEffect(() => {
    const query = async () => {
      const client = await getSigningCosmWasmClient()

      if (address) {
        const response = await queryJudge(client, address)

        setJudgeWeight(response.weight)
        console.log(response);
      }
    }
    // Checks if Addr trying to send vote is an judge in the cw4-judging-group
    query()
      .then(
        getJudge(judgeWeight) === '1' ?
          setIsJudge(true) : setIsJudge(null)
      )

  }, [address])

  useEffect(() => {
    const getEntry = async () => {
      const client = await getSigningCosmWasmClient()
      const response = await queryEntry(client, params.category, parseInt(params.id))
      setEntry(response)
      const voteResponse = await queryTallyVotes(client, parseInt(params.id))
      setVotes(voteResponse.votes)
    }
    getEntry()
  }, [])

  console.log(votes);


  const executeVote = async () => {
    const client = await getSigningCosmWasmClient()

    const look = (Number(lookValue) * 100).toFixed(0)
    const smell = (Number(smellValue) * 100).toFixed(0)
    const taste = (Number(tasteValue) * 100).toFixed(0)
    const melt = (Number(meltValue) * 100).toFixed(0)

    const response = await vote(
      client,
      address,
      params.category,
      Number(parseInt(params.id)),
      {
        look: look.toString(),
        smell: smell.toString(),
        taste: taste.toString(),
        postMelt: melt.toString(),
      }
    )
  }
  async function connectOnClick() {
    setCurrentChain("juno")
    await connect()
  }

  return address && walletStatus === "Connected" ? (
    <div className='base'>
      <Navbar />
      <div>
        <img className="connect-title-gold-bg mt-5" src={titleGoldBg} alt="null" />
      </div>
      <div className='container'>
        <div className='holder'>
          <Center><Button onClick={toVoteCategories}> Return to All Entries</Button></Center>
          <div className='row mt-3'>
            <Card variant='outline' boxShadow='xl' maxW='sm'>
              <CardBody>
                <Image
                  src={`/static/media/${params.src}`}
                  alt='Green double couch with wooden legs'
                  borderradius='lg'
                />
                <Stack mt='6' spacing='3'>
                  <Heading color="white" size='md'>{entry.name}</Heading>

                  <Divider />
                  <Heading color="#deb887" size='md'>Maker Name</Heading>
                  <Heading color="white" size='l'> {entry.maker_name}</Heading>
                  <Divider />
                  <Heading color="#deb887" size='md'> Category</Heading>
                  <Text color="white">{entry.category}</Text>
                  <Divider />
                  <Heading color="#deb887" size='md'>  Breeder</Heading>
                  <Text color="white">{entry.breeder}</Text>
                  <Divider />
                  <Heading color="#deb887" size='md'>  Farmer</Heading>
                  <Text color="white">{entry.farmer}</Text>
                  <Divider />
                  <Heading color="#deb887" size='md'>  Genetics</Heading>
                  <Text color="white">{entry.genetics}</Text>
                  <Divider />
                  <Stat>
                    <HStack>
                      <Heading size='lg' color='Highlight'>Total Points: </Heading>
                      {votes.length > 0 ? <StatNumber color={"white"}> {votes[0].sum}</StatNumber> : <StatNumber fontSize={'x-small'} color={"white"}> No Votes submitted</StatNumber>}

                      <StatHelpText></StatHelpText>
                    </HStack>
                  </Stat>
                </Stack>
              </CardBody>
            </Card>

            <div className='col'>
              <div className='row'>
                <div className='col'>

                  <p className='name-text'>Vote On Elements: </p>
                </div>

              </div>
              <Container opacity='100%' className='input-holder p-3 mb-3'>
                <Text className='range-slider-text'>Entry's Look</Text>
                <p color='#F3C674' className='range-slider-text'>{lookValue}</p>
                <input type="range" className="form-range" min="1.00" max="10.00" step='.05' onChange={handleLookChange} value={lookValue}></input>
              </Container>
              <Container className='input-holder p-3 mb-3'>
              <Wrap>
                <p className='range-slider-text'>Entry's Taste</p>
                <p className='range-slider-text'>{smellValue}</p>
                </Wrap>
                <input type="range" className="form-range" min="1.00" max="10.00" step='.05' onChange={handleSmellChange} value={smellValue}></input>
              </Container>
              <Container className='input-holder p-3 mb-3'>
              <Wrap>
                <p className='range-slider-text'>Entry's Smell</p>
                <p className='range-slider-text'>{tasteValue}</p>
                </Wrap>
                <input type="range" className="form-range" min="1.00" max="10.00" step='.05' onChange={handleTasteChange} value={tasteValue}></input>
              </Container>
              <Container className='input-holder p-3 mb-3'>
                <Wrap>
                <p className='range-slider-text'>Entry's After Banger</p>
                <p className='range-slider-text'>{meltValue}</p>
                </Wrap>
                <input type="range" className="form-range" min="1.00" max="10.00" step='.05' onChange={handleMeltChange} value={meltValue}></input>
              </Container>

              <Button onClick={(executeVote)} size='lg' color='#e25273' >Confrim & Broadcast Vote</Button>                    </div>
          </div>
        </div>
      </div>
      <img className="footer" src={Footer} alt="null" />
    </div>
  ) : (
    <Container>
      {" "}
      <div className="base">
        <div>
          <Center>
            <Container>
              <img className="connect-title-gold-bg" src={titleGoldBg} alt="null" />
              <Heading color='white' textAlign='center' mb={10} px="7" noOfLines={2}>
                Connect To Access Event Application{" "}
              </Heading>
            </Container>{" "}
          </Center>
        </div>

        <div className="container">
          <Center>
            <img borderradius="full" className="icon" src={keplrLogo} alt="null" />
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

export default Vote