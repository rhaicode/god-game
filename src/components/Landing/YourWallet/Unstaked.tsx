import {
  Box,
  Flex,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
} from '@chakra-ui/react'
import styled from '@emotion/styled'

import ThemedButton from '../../../themed/Button'

const StyledBox = styled(Box)`
  background: linear-gradient(105.6deg, #183544 16.92%, #0c2c3c 76.13%);
  border: 1px solid rgba(255, 255, 255, 0.26);
  padding: 20px 38px;
`

const Unstaked: React.FC = () => (
  <StyledBox position="relative" borderRadius="10px">
    <Flex alignItems="center">
      <Text as="span" fontSize="4xl" mr="16px">
        Unstaked
      </Text>
    </Flex>
    <Flex
      position="absolute"
      w="calc(100% - 64px)"
      direction="column"
      mt="32px"
    >
      <NumberInput size="lg" min={1} step={1}>
        <NumberInputField fontSize="22px" />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <ThemedButton size="lg" minW="160px" mt="24px" mx="auto">
        UNSTAKE
      </ThemedButton>
    </Flex>
  </StyledBox>
)

export default Unstaked
