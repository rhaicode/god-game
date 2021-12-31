import { Box, Flex, Text } from '@chakra-ui/react'

const YourNFTs: React.FC = () => (
  <Box backgroundColor="charcoal" color="white" pb="40px">
    <Box maxW="1200px" mx="auto">
      <Flex pt="100px" textTransform="uppercase" fontSize="4xl">
        <Text as="span">Your NFTs</Text>
      </Flex>
    </Box>
  </Box>
)

export default YourNFTs
