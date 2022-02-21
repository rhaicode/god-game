import { useState } from 'react'
import {
  Box,
  Flex,
  Text,
  NumberInput,
  NumberInputField,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputStepper,
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import { ethers } from 'ethers'

import ThemedButton from '../../../themed/Button'

import GodContract from '../../../utils/God.json'

const GOD_CONTRACT_ADDRESS = '0xB0069D11377dcC862E28a8061504Ee1Cbc9Bd76E'

const MINT_PRICE = 0.5

const StyledBox = styled(Box)`
  background: linear-gradient(105.6deg, #183544 16.92%, #0c2c3c 76.13%);
  border: 1px solid rgba(255, 255, 255, 0.26);
  padding: 20px 38px;
`
const Minting: React.FC = () => {
  const [mintAmount, setMintAmount] = useState(1)
  const [loading, setLoading] = useState(false)

  const askContractToMintNFT = async (amount: number) => {
    const { ethereum } = window as any
    setLoading(true)

    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum)
      const signer = provider.getSigner()
      const connectedContract = new ethers.Contract(
        GOD_CONTRACT_ADDRESS,
        GodContract.abi,
        signer
      )

      const totalPrice = String(MINT_PRICE * amount)
      const ethersValue = { value: ethers.utils.parseEther(totalPrice) }

      const nftTxn = await connectedContract.mint(amount, false, ethersValue)

      await nftTxn.wait()
    }

    setLoading(false)
  }

  return (
    <StyledBox position="relative" borderRadius="10px">
      <Flex alignItems="center">
        <Text as="span" fontSize="4xl" mr="16px">
          Minting
        </Text>
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
        <NumberInput
          size="lg"
          min={1}
          max={10}
          step={1}
          onChange={(_, val) => {
            setMintAmount(val)
          }}
        >
          <NumberInputField fontSize="22px" />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <ThemedButton
          size="lg"
          minW="160px"
          mt="24px"
          mx="auto"
          onClick={async () => {
            await askContractToMintNFT(mintAmount)
          }}
          isLoading={loading}
          isDisabled={loading}
        >
          MINT
        </ThemedButton>
      </Flex>
    </StyledBox>
  )
}

export default Minting
