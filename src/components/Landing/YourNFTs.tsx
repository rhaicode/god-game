/* eslint no-restricted-syntax: 0, dot-notation: 0, prefer-const: 0, 
@typescript-eslint/no-unused-vars: 0,  no-trailing-spaces: 0,
no-await-in-loop: 0, react/jsx-curly-brace-presence: 0, prefer-template: 0
*/
import { useState } from 'react'
import { Box, Flex, Text, Image } from '@chakra-ui/react'
import { ethers } from 'ethers'
import ThemedButton from '../../themed/Button'

import GodContract from '../../utils/God.json'

import { useWallet } from '../../hooks'

const GOD_CONTRACT_ADDRESS = '0xB0069D11377dcC862E28a8061504Ee1Cbc9Bd76E'

const YourNFTs: React.FC = () => {
  const [viewNfts, setViewNfts] = useState(false)
  const { currentAccount } = useWallet()
  let [ownedSvgs, setOwnedSvgs] = useState([{ svg: '', token_id: 0 }])

  const returnTokenSvgs = async (currentAccount: string) => {
    const tokenIds = []
    const tokenSvgs = []

    const { ethereum } = window as any

    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum)
      const signer = provider.getSigner()
      const connectedContract = new ethers.Contract(
        GOD_CONTRACT_ADDRESS,
        GodContract.abi,
        signer
      )

      const ownedTokenAmount = await connectedContract.balanceOf(currentAccount)
      console.log(ownedTokenAmount)

      for (let i = 0; i < ownedTokenAmount; i += 1) {
        const tokenId = await connectedContract.tokenOfOwnerByIndex(
          currentAccount,
          i
        )
        tokenIds.push(tokenId)
        console.log(tokenId)
      }

      for (const tokenId of tokenIds) {
        const rawUri = await connectedContract.tokenURI(tokenId)

        const decodedUri = rawUri.split(',')[1]

        const encodedSvg = JSON.parse(atob(decodedUri))['image']
        tokenSvgs.push({
          token_id: tokenId,
          svg: encodedSvg,
        })
      }
    }

    console.log(
      'This is the id: ' +
        tokenSvgs[0].token_id +
        'and svg is: ' +
        tokenSvgs[0].svg
    )
    return tokenSvgs
  }

  return (
    <Box backgroundColor="charcoal" color="white" pb="40px">
      <Box maxW="1200px" mx="auto">
        <Flex pt="100px" textTransform="uppercase" fontSize="4xl">
          <Text as="span">Your NFTs</Text>
          <ThemedButton
            onClick={async () => {
              setViewNfts(true)
              const heldTokens = await returnTokenSvgs(currentAccount)
              setOwnedSvgs(heldTokens)
            }}
          >
            View
          </ThemedButton>
          {viewNfts && (
            <div>
              <Image
                src={ownedSvgs[0].svg}
                w="500px"
                h="440px"
                alt="god game"
                m="auto"
                borderRadius="10px"
              />

              <Image
                src={ownedSvgs[1].svg}
                w="500px"
                h="440px"
                alt="god game"
                m="auto"
                borderRadius="10px"
              />
              <Image
                src={ownedSvgs[2].svg}
                w="500px"
                h="440px"
                alt="god game"
                m="auto"
                borderRadius="10px"
              />
              <Image
                src={ownedSvgs[3].svg}
                w="500px"
                h="440px"
                alt="god game"
                m="auto"
                borderRadius="10px"
              />
            </div>
          )}
        </Flex>
      </Box>
    </Box>
  )
}

export default YourNFTs
