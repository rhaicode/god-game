import { useState } from 'react'
import { Box, Flex, Input, Text } from '@chakra-ui/react'
import styled from '@emotion/styled'

import { ethers } from 'ethers'

import ThemedButton from '../../../themed/Button'

import TempleContract from '../../../utils/God.json'

const StyledBox = styled(Box)`
  background: linear-gradient(105.6deg, #183544 16.92%, #0c2c3c 76.13%);
  border: 1px solid rgba(255, 255, 255, 0.26);
  padding: 20px 38px;
`

const TEMPLE_CONTRACT_ADDRESS = '0xAdD0284fb369EddFec66f8fF7F3f4e10E082100b'
const Staked: React.FC = () => {
  const [tokenIds, setTokenIds] = useState([])
  const [loading, setLoading] = useState(false)

  const stakeNFTs = async (tokenIds: number[]) => {
    const { ethereum } = window as any
    setLoading(true)

    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum)
      const signer = provider.getSigner()
      const connectedContract = new ethers.Contract(
        TEMPLE_CONTRACT_ADDRESS,
        TempleContract.abi,
        signer
      )

      const stakeTxn = await connectedContract.mint(amount, false, ethersValue)

      await stakeTxn.wait()
    }

    setLoading(false)
  }

  return (
    <StyledBox position="relative" borderRadius="10px">
      <Flex alignItems="center">
        <Text as="span" fontSize="4xl" mr="16px">
          Stake
        </Text>
      </Flex>
      <Flex
        position="absolute"
        w="calc(100% - 64px)"
        direction="column"
        mt="32px"
      >
        <Input type="text" size="lg" fontSize="22px" />
        <ThemedButton size="lg" minW="160px" mt="24px" mx="auto">
          STAKE
        </ThemedButton>
      </Flex>
    </StyledBox>
  )
}

export default Staked
