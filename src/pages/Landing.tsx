import { Box } from '@chakra-ui/react'

import Hero from '../components/Landing/Hero'
import WhoWillYouBe from '../components/Landing/WhoWillYouBe'
import YourWallet from '../components/Landing/YourWallet'
import YourNFTs from '../components/Landing/YourNFTs'
import Footer from '../components/Footer'

import { useWallet } from '../hooks'
import SVGWall from '../components/SVGWall'

const Landing: React.FC = () => {
  const { currentAccount } = useWallet()

  return (
    <Box overflowX="hidden">
      <Hero />
      <SVGWall />
      {currentAccount && <YourNFTs />}
      {currentAccount && <YourWallet />}
      <WhoWillYouBe />
      <SVGWall />
      <Footer />
    </Box>
  )
}

export default Landing
