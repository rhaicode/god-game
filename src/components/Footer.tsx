import { Flex, Text } from '@chakra-ui/react'

const Footer: React.FC = () => (
  <Flex backgroundColor="targetBlue" color="white" height="250px">
    <Flex
      justifyContent="space-between"
      alignItems="center"
      my="auto"
      w="100%"
      borderTop="1px solid rgba(255,255,255,0.3)"
      borderBottom="1px solid rgba(255,255,255,0.3)"
      py="40px"
    >
      <Text as="span" textTransform="uppercase" fontSize="30px" ml="48px">
        Greek Gods &amp; Mortals
      </Text>
      <Text
        as="span"
        textTransform="uppercase"
        fontSize="18px"
        className="plex"
        mr="48px"
      >
        CONTACT
      </Text>
    </Flex>
  </Flex>
)

export default Footer
