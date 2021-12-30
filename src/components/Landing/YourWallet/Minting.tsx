import {
  Box,
  Flex,
  Text,
  Image,
  NumberInput,
  NumberInputField,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputStepper,
} from '@chakra-ui/react'
import styled from '@emotion/styled'

import ThemedButton from '../../../themed/Button'

const StyledBox = styled(Box)`
  background: linear-gradient(105.6deg, #183544 16.92%, #0c2c3c 76.13%);
  border: 1px solid rgba(255, 255, 255, 0.26);
  padding: 20px 38px;
`
const Minting: React.FC = () => (
  <StyledBox position="relative">
    <Flex alignItems="center">
      <Text as="span" fontSize="4xl" mr="16px">
        Minting
      </Text>
      <Image src="/assets/png/kind.png" alt="sword" ml="8px" height="40px" />
    </Flex>
    <Box>
      <Flex className="plex">
        <Text as="span" fontSize="lg" color="gold" mr="8px">
          0/2000 GEN
        </Text>
        <Text as="span" fontSize="lg">
          0 MINTED
        </Text>
      </Flex>
    </Box>
    <Flex
      position="absolute"
      w="calc(100% - 64px)"
      direction="column"
      mt="32px"
    >
      <NumberInput size="lg" min={1} max={10} step={1}>
        <NumberInputField fontSize="22px" />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <ThemedButton size="lg" minW="160px" mt="24px" mx="auto">
        MINT
      </ThemedButton>
    </Flex>
  </StyledBox>
)

export default Minting
