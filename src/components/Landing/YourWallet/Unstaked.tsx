import { Box, Flex, Text, Image } from '@chakra-ui/react'
import styled from '@emotion/styled'

import ThemedButton from '../../../themed/Button'

const StyledBox = styled(Box)`
  background: linear-gradient(105.6deg, #183544 16.92%, #0c2c3c 76.13%);
  border: 1px solid rgba(255, 255, 255, 0.26);
  padding: 20px 38px;
`

const Unstaked: React.FC = () => (
  <StyledBox>
    <Flex alignItems="center">
      <Text as="span" fontSize="4xl" mr="16px">
        Unstaked
      </Text>
      <Image src="/assets/png/kind.png" alt="sword" ml="8px" height="40px" />
    </Flex>
    <Flex mt="24px">
      <ThemedButton size="lg" minW="160px" mx="auto">
        UNSTAKE
      </ThemedButton>
    </Flex>
  </StyledBox>
)

export default Unstaked
