import Hero from '../components/Landing/Hero'
import WhoWillYouBe from '../components/Landing/WhoWillYouBe'
import YourWallet from '../components/Landing/YourWallet'
import Footer from '../components/Footer'

import { useWallet } from '../hooks'

const Landing: React.FC = () => {
  const { currentAccount } = useWallet()

  return (
    <>
      <Hero />
      {currentAccount && <YourWallet />}
      <WhoWillYouBe />
      <Footer />
    </>
  )
}

export default Landing
