import { Box, Flex, Grid, Text } from '@chakra-ui/react'

import Minting from './Minting'
import Staked from './Staked'
import Unstaked from './Unstaked'

const YourWallet: React.FC = () => (
  <Box backgroundColor="charcoal" color="white" pb="40px">
    <Box maxW="1200px" mx="auto">
      <Flex pt="100px" textTransform="uppercase" fontSize="4xl">
        <Text as="span">YOUR WALLET</Text>
        <Text as="span" ml="36px" mr="16px">
          0.00
        </Text>
        <Text as="span" color="gold">
          $FAITH
        </Text>
      </Flex>
      <Grid
        templateColumns="repeat(3, 1fr)"
        columnGap="24px"
        height="300px"
        mt="46px"
      >
        <Minting />
        <Staked />
        <Unstaked />
      </Grid>
    </Box>
  </Box>
)

export default YourWallet
