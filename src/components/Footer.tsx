import { Flex, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => (
  <Flex backgroundColor="#803103" color="white" height="250px">
    <Flex
      justifyContent="space-between"
      alignItems="center"
      my="auto"
      w="100%"
      borderTop="1px solid rgba(255,255,255,0.2)"
      borderBottom="1px solid rgba(255,255,255,0.2)"
      py="40px"
    >
      <Link to="/">
        <Text as="span" textTransform="uppercase" fontSize="30px" ml="48px">
          GOD GAME
        </Text>
      </Link>
      <Text
        as="span"
        textTransform="uppercase"
        fontSize="18px"
        className="plex"
        mr="48px"
      >
        Discord
      </Text>
      <Text
        as="span"
        textTransform="uppercase"
        fontSize="18px"
        className="plex"
        mr="48px"
      >
        Twitter
      </Text>
    </Flex>
  </Flex>
)

export default Footer
