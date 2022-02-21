import { Box, Grid, Text, Image, Flex } from '@chakra-ui/react'
import styled from '@emotion/styled'

const StyledBox = styled(Box)`
  background: linear-gradient(105.6deg, #183544 16.92%, #0c2c3c 76.13%);
  border: 1px solid rgba(255, 255, 255, 0.26);
  padding: 20px 38px;
`

const WhoWillYouBe: React.FC = () => (
  <Box backgroundColor="black" color="white">
    <Box maxW="1200px" mx="auto">
      <Flex height="124px" />
      <Flex alignItems="center" justifyContent="center" mb="60px">
        <Text as="span" fontSize="5xl" mr="12px">
          Who Will You Be?
        </Text>
        <Image src="/assets/png/kind.png" alt="sword" ml="8px" height="40px" />
      </Flex>
      <Grid templateColumns="repeat(2, 1fr)" columnGap="60px">
        <Box>
          <StyledBox
            display="flex"
            height="450px"
            mb="40px"
            borderRadius="10px"
          >
            <Image src="assets/png/armour_1.png" alt="god game" m="auto" />
          </StyledBox>
          <Text as="span" fontSize="3xl">
            Greek God
          </Text>
          <Text as="p" className="plex">
            Be worshipped and collect $FAITH from followers
          </Text>
        </Box>
        <Box>
          <StyledBox
            display="flex"
            height="450px"
            mb="40px"
            borderRadius="10px"
          >
            <Image src="assets/png/human_1.png" alt="god game" m="auto" />
          </StyledBox>
          <Text as="span" fontSize="3xl">
            Human
          </Text>
          <Text as="p" className="plex">
            Worship in the Temple and generate $FAITH
          </Text>
        </Box>
      </Grid>
    </Box>
    <Flex height="300px" />
  </Box>
)

export default WhoWillYouBe
