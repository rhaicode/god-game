import { Box, Flex, Text, Image, Button } from '@chakra-ui/react'

import ThemedButton from '../themed/Button'

const Landing: React.FC = () => (
  <>
    <Box h="700px" w="100%" backgroundColor="targetBlue" color="white">
      <Box maxW="1200px" mx="auto">
        <Flex w="100%" justifyContent="space-between" py="20px">
          <Text as="span" fontSize="3xl">
            GREEK GODS &amp; MORTALS
          </Text>
          <ThemedButton size="md">Whitepaper</ThemedButton>
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
            <Text as="p" maxW="48ch" my="30px" fontFamily={"'IBM Plex Mono'"}>
              As a Mortal Human, you will worship Greek Gods in temples in the
              metaverse to collect $FAITH.{' '}
            </Text>
            <Flex>
              <ThemedButton size="lg" mr="8px">
                Connect Metamask
              </ThemedButton>
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

export default Landing
