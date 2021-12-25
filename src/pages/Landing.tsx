import { Box, Flex, Text, Image, Button, useToast } from '@chakra-ui/react'
import { useState } from 'react'

import ThemedButton from '../themed/Button'

const Landing: React.FC = () => {
  const [currentAccount, setCurrentAccount] = useState('')
  const toast = useToast()

  const connectWallet = async () => {
    try {
      const { ethereum } = window as any

      if (!ethereum) {
        toast({
          title: (
            <Text fontSize="sm" className="plex">
              Connection failed.
            </Text>
          ),
          description: (
            <Text fontSize="xs" className="plex">
              Please install Metamask.
            </Text>
          ),
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
        return
      }

      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      })

      if (accounts[0]) {
        toast({
          description: (
            <Text fontSize="xs" className="plex">
              Metamask is connected.
            </Text>
          ),
          status: 'success',
          duration: 2000,
          isClosable: true,
        })
        setCurrentAccount(accounts[0])
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <Box h="700px" w="100%" backgroundColor="targetBlue" color="white">
        <Box maxW="1200px" mx="auto">
          <Flex
            w="100%"
            justifyContent="space-between"
            alignItems="center"
            py="20px"
          >
            <Text as="span" fontSize="3xl">
              GREEK GODS &amp; MORTALS
            </Text>
            {currentAccount ? (
              <Flex justifyContent="space-between" alignItems="center">
                <Image
                  src="/assets/png/kind.png"
                  height="25px"
                  alt="sword"
                  mr="8px"
                />
                <Text as="span" fontSize="sm" className="plex">
                  {`${currentAccount.substring(0, 9)}...`}
                </Text>
              </Flex>
            ) : (
              <ThemedButton size="md">Whitepaper</ThemedButton>
            )}
          </Flex>
          <Flex w="100%" h="575px" justifyContent="center" alignItems="center">
            <Box mr="150px">
              <Box>
                <Text as="h4" fontSize="5xl" lineHeight={1}>
                  Become a Greek God.
                </Text>
                <Flex maxW="max-content">
                  <Text as="h4" fontSize="5xl" lineHeight={1}>
                    Rule the World.
                  </Text>
                  <Image src="/assets/png/kind.png" alt="sword" ml="8px" />
                </Flex>
              </Box>
              <Text as="p" maxW="48ch" my="30px" className="plex">
                As a Mortal Human, you will worship Greek Gods in temples in the
                metaverse to collect $FAITH.{' '}
              </Text>
              <Flex>
                {!currentAccount && (
                  <ThemedButton size="lg" mr="8px" onClick={connectWallet}>
                    Connect Metamask
                  </ThemedButton>
                )}
                <Button
                  variant="ghost"
                  size="lg"
                  textTransform="uppercase"
                  fontWeight="400"
                  _hover={{
                    backgroundColor: 'blue.300',
                  }}
                  _active={{
                    backgroundColor: 'blue.400',
                  }}
                  {...(currentAccount && {
                    border: '1px solid white',
                  })}
                >
                  Read the whitepaper
                </Button>
              </Flex>
            </Box>
            <Box backgroundColor="lightBlue" w="500px" h="440px" />
          </Flex>
        </Box>
      </Box>
      <Box />
    </>
  )
}

export default Landing
