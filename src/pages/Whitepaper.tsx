import {
  Box,
  Flex,
  Text,
  Image,
  Button,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'
import styled from '@emotion/styled'

import Footer from '../components/Footer'
import { useWallet } from '../hooks'

const StyledTable = styled(Table)`
  td {
    border-bottom: 0px;
  }
`

const Whitepaper: React.FC = () => {
  const { currentAccount } = useWallet()
  const history = useHistory()

  const goBack = () => {
    history.push('/')
  }

  return (
    <>
      <Box w="100%" backgroundColor="black" color="white" pb="200px">
        <Flex
          w="100%"
          justifyContent="space-between"
          alignItems="center"
          py="20px"
          px="70px"
          borderBottom="1px solid rgba(255,255,255,0.2)"
          mb="70px"
        >
          <Text as="span" fontSize="3xl">
            GOD GAME
          </Text>
          {currentAccount && (
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
          )}
        </Flex>
        <Flex alignItems="center" px="70px" mb="80px">
          <Button
            backgroundColor="#0B3748"
            _hover={{
              backgroundColor: '#0e445a',
            }}
            _active={{
              backgroundColor: '#0B3748',
            }}
            fontWeight={400}
            minW="100px"
            mr="90px"
            onClick={goBack}
          >
            {'< Back'}
          </Button>
          <Text as="span" fontSize="5xl">
            GOD GAME
          </Text>
        </Flex>
        <Box ml="260px">
          <Text as="p" className="plex" maxW="90ch" color="gold2">
            Are you worthy of the Gods&apos; favor? Will you be able to handle
            the risk for the divine rewards that await you?
          </Text>
          <Text as="p" className="plex" maxW="90ch" mt="40px">
            Somewhere in Ancient Greece an early settlement of impressionable
            Worshippers built a Temple to foster their{' '}
            <Text as="span" color="gold2">
              $FAITH
            </Text>{' '}
            in the Pantheon of Gods. The longer they stay in the temple the more
            their household&apos;s{' '}
            <Text as="span" color="gold2">
              $FAITH
            </Text>{' '}
            increases. Using{' '}
            <Text as="span" color="gold2">
              $FAITH
            </Text>{' '}
            the household can gather more Worshippers!
          </Text>
          <Text as="p" className="plex" maxW="90ch" mt="40px">
            Gods pose the biggest threat to a Worshipper&apos;s{' '}
            <Text as="span" color="gold2">
              $FAITH
            </Text>{' '}
            , greedy and looking to gain the people&apos;s favor certain Gods
            might woo and kidnap a Worshipper in order to get more{' '}
            <Text as="span" color="gold2">
              $FAITH
            </Text>
            . But, the Gods and Worshippers were able to make a binding pact, as
            long as the Worshippers paid a portion of their{' '}
            <Text as="span" color="gold2">
              $FAITH
            </Text>{' '}
            the Gods promised to steer clear of the Worshippers within the
            Temple.
          </Text>
          <Text as="p" className="plex" maxW="90ch" mt="40px">
            However, if a Worshipper leaves the Temple, the Gods may attempt to
            poach a Worshipper{' '}
            <Text as="span" color="gold2">
              $FAITH
            </Text>
            . When a new Worshipper joins the settlement, the Gods look to
            kidnap and woo the new Worshipper.
          </Text>
          <Box maxW="140ch" color=" rgba(255,255,255,0.2)" py="40px">
            <Text as="hr" />
          </Box>
          <Text as="p" className="plex" maxW="90ch" mt="40px">
            <Text as="span" color="gold2" fontWeight={500}>
              God Game
            </Text>{' '}
            is a cutting-edge risk protocol for Metis with Generative On-Chain
            Digital Art/NFTs utilizing tokenomics. It shows what&apos;s possible
            with interactions between the ERC-20 and ERC-721 protocols. Your NFT
            can steal other NFTs (ERC-721 tokens) for you. The rarer your NFT,
            the more tokens you&apos;ll accumulate probabilistically utilizing
            the divinity mechanic. God Game is pioneering new types of digital
            art mechanics, usable on the Metis Blockchain. Fully decentralized.
            No roadmaps or empty promises.
          </Text>
          <Text as="h2" fontSize="3xl" color="gold2" mt="60px">
            The tl;dr:
          </Text>
          <Text as="ul" maxW="120ch" ml="40px" mt="20px">
            <Text as="li" className="plex" mb="8px">
              There will only ever be 1,000 Gen 0, minted for .5 METIS each. The
              4,000 Gen 1 are minted by farming{' '}
              <Text as="span" color="gold2" mt="60px">
                $FAITH
              </Text>
              .
            </Text>
            <Text as="li" className="plex" mb="8px">
              Worshippers can be staked in the Temple to earn{' '}
              <Text as="span" color="gold2" mt="60px">
                $FAITH
              </Text>{' '}
              and pay a tax anytime they claim their{' '}
              <Text as="span" color="gold2" mt="60px">
                $FAITH
              </Text>{' '}
              earnings.
            </Text>
            <Text as="li" className="plex" mb="8px">
              If a Worshipper is unstaked from the Temple, the Gods try to steal
              all of its accumulated{' '}
              <Text as="span" color="gold2" mt="60px">
                $FAITH
              </Text>
            </Text>
            <Text as="li" className="plex">
              When a Worshipper joins the settlement, the Gods all attempt to
              gain a new devotee by stealing them. If they succeed the
              Worshipper is given to a randomly selected God.
            </Text>
          </Text>
          <Text as="h2" fontSize="3xl" color="gold2" mt="60px">
            Contract Addresses
          </Text>
          <Text as="p" className="plex" maxW="90ch" mt="20px">
            <Text as="span" color="gold2" fontWeight={500}>
              Worshipper / God NFT
            </Text>
          </Text>
          <Text as="p" className="plex" maxW="90ch" mt="20px">
            <Text as="span" color="gold2" fontWeight={500}>
              Temple Staking
            </Text>
          </Text>
          <Text as="p" className="plex" maxW="90ch" mt="20px">
            <Text as="span" color="gold2" fontWeight={500}>
              $FAITH Token
            </Text>
          </Text>
          <Text as="h2" fontSize="3xl" color="gold2" mt="60px">
            Minting
          </Text>
          <StyledTable size="lg" maxW="700px" className="plex" mt="30px">
            <Thead>
              <Tr>
                <Th color="white" fontFamily="'IBM Plex Mono' !important">
                  Token ID
                </Th>
                <Th color="white" fontFamily="'IBM Plex Mono' !important">
                  Minting
                </Th>
                <Th color="white" fontFamily="'IBM Plex Mono' !important">
                  Cost
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>1 to 10,000</Td>
                <Td>(Gen 0)</Td>
                <Td>.5 METIS</Td>
              </Tr>
              <Tr>
                <Td>10,001 to 20,000</Td>
                <Td />
                <Td>20,000 $FAITH</Td>
              </Tr>
              <Tr>
                <Td>20,001 to 40,000</Td>
                <Td />
                <Td>40,000 $FAITH</Td>
              </Tr>
              <Tr>
                <Td>40,001 to 50,000</Td>
                <Td />
                <Td>80,000 $FAITH</Td>
              </Tr>
            </Tbody>
          </StyledTable>
          <Text as="p" className="plex" mt="40px">
            The total cost to mint all of the Worshippers and Gods in existence
            will be 1,800,000{' '}
            <Text as="span" color="gold2">
              $FAITH
            </Text>
            .
          </Text>
          <Text as="h2" fontSize="3xl" color="gold2" mt="60px">
            Worshipper
          </Text>
          <Text as="p" className="plex" mt="20px" maxW="90ch">
            You have a 90% chance of minting a Worshipper, each with unique
            traits. Here are the actions they can take:
          </Text>
          <Text as="p" className="plex" mt="40px" maxW="90ch" color="gold2">
            Enter Temple (Stake)
          </Text>
          <Text as="p" className="plex" mt="10px" maxW="90ch">
            Accumulate 10,000{' '}
            <Text as="span" color="gold2" fontWeight={500}>
              $FAITH
            </Text>{' '}
            / day (prorated to the second). No risk.
          </Text>
          <Text as="p" className="plex" mt="20px" maxW="90ch" color="gold2">
            Relinquish Faith (Claim)
          </Text>
          <Text as="p" className="plex" mt="10px" maxW="90ch">
            Receive 80% of{' '}
            <Text as="span" color="gold2">
              $FAITH
            </Text>{' '}
            accumulated on your Worshipper Gods take a guaranteed 20% tax on
            relinquished{' '}
            <Text as="span" color="gold2">
              $FAITH
            </Text>{' '}
            in return for not attacking the Temple. Taxed{' '}
            <Text as="span" color="gold2">
              $FAITH
            </Text>{' '}
            is split among all the Gods currently staked in the Temple,
            proportional to their Divinity scores.
          </Text>
          <Text as="p" className="plex" mt="20px" maxW="90ch" color="gold2">
            Leave Temple (Unstake)
          </Text>
          <Text as="p" className="plex" mt="10px" maxW="90ch">
            Worshipper is removed from the Temple and all{' '}
            <Text as="span" color="gold2">
              $FAITH
            </Text>{' '}
            is relinquished. Can only be done if the Worshipper has accumulated
            2 days worth of{' '}
            <Text as="span" color="gold2">
              $FAITH
            </Text>{' '}
            to keep them in the Gods&apos; favor. 50% chance of ALL of your
            accumulated{' '}
            <Text as="span" color="gold2">
              $FAITH
            </Text>{' '}
            being stolen by Gods. Stolen{' '}
            <Text as="span" color="gold2">
              $FAITH
            </Text>{' '}
            is split among all the Gods currently staked in the Temple,
            proportional to their Divinity scores.
          </Text>
          <Text as="h2" fontSize="3xl" color="gold2" mt="60px">
            $FAITH
          </Text>
          <Text as="p" className="plex" mt="20px">
            The maximum{' '}
            <Text as="span" color="gold2">
              $FAITH
            </Text>{' '}
            supply is 5,000,000{' '}
            <Text as="span" color="gold2">
              $FAITH
            </Text>
            .
          </Text>
          <Text as="p" className="plex" mt="20px" maxW="90ch">
            When supply reaches 2,400,000{' '}
            <Text as="span" color="gold2">
              $FAITH
            </Text>{' '}
            earned for staking, the staking “faucet” turns off. The developers
            will receive 600,000{' '}
            <Text as="span" color="gold2">
              $FAITH
            </Text>{' '}
            Community Rewards will be allocated 2,000,000{' '}
            <Text as="span" color="gold2">
              $FAITH
            </Text>
            .
          </Text>
          <Text as="p" className="plex" color="gold2" mt="30px">
            Mint a new Worshipper using $FAITH
          </Text>
          <Text as="p" className="plex" mt="10px" maxW="90ch">
            There is a 10% chance that the NFT is actually a God! 10% chance of
            the new Worshipper or God being stolen by a staked God. Each
            God&apos;s chance of success is proportional to their Divinity
            scores.
          </Text>
          <Text as="h2" fontSize="3xl" color="gold2" mt="60px">
            Gods
          </Text>
          <Text as="p" className="plex" mt="20px" maxW="90ch">
            You have a 10% chance of minting a God, each with unique traits,
            including a Divinity value ranging from 5 to 8. The higher the
            Divinity value:
          </Text>
          <Text as="ul" className="plex" mt="20px">
            <Text as="li" ml="60px">
              The higher the portion of{' '}
              <Text as="span" color="gold2">
                $FAITH
              </Text>{' '}
              that the Gods earns from taxes.
            </Text>
            <Text as="li" ml="60px">
              {' '}
              The higher chance of stealing a newly minted Worshippers or Gods.
            </Text>
          </Text>
          <Text as="p" className="plex" mt="40px" maxW="90ch">
            For example:
          </Text>
          <Text as="p" className="plex" mt="10px" maxW="90ch">
            God A has a Divinity of 8 and God B has a Divinity of 6, and they
            are staked.
          </Text>
          <Text as="ul" className="plex" mt="20px" maxW="90ch">
            <Text as="li" ml="60px">
              If 70,000{' '}
              <Text as="span" color="gold2">
                $FAITH
              </Text>{' '}
              total have been accumulated as taxes, God A will be able to claim
              40,000{' '}
              <Text as="span" color="gold2">
                $FAITH
              </Text>{' '}
              and God B will be able to claim 30,000{' '}
              <Text as="span" color="gold2">
                $FAITH
              </Text>
              .
            </Text>
            <Text as="li" ml="60px" mt="20px">
              {' '}
              If a newly minted Worshipper or God is stolen, God A has a 57%
              chance of receiving it and God B has a 43% chance of receiving it.
            </Text>
          </Text>
          <Text as="p" className="plex" mt="10px" maxW="90ch">
            Only staked Gods are able to steal Worshippers or earn the $FAITH
            tax.
          </Text>
          <Text as="p" className="plex" mt="40px" maxW="90ch" color="gold2">
            Stake God
          </Text>
          <Text as="p" className="plex" mt="10px" maxW="90ch">
            Earn your share of the 20% tax of all{' '}
            <Text as="span" color="gold2">
              $FAITH
            </Text>{' '}
            generated by Worshipper in the Temple. No risk.
          </Text>
          <Text as="p" className="plex" mt="40px" maxW="90ch" color="gold2">
            Claim $FAITH
          </Text>
          <Text as="p" className="plex" mt="10px" maxW="90ch">
            Receive all{' '}
            <Text as="span" color="gold2">
              $FAITH
            </Text>{' '}
            taxes accrued for the staked God. No risk.
          </Text>
          <Text as="p" className="plex" mt="40px" maxW="90ch" color="gold2">
            Unstake God
          </Text>
          <Text as="p" className="plex" mt="10px" maxW="90ch">
            Receive all{' '}
            <Text as="span" color="gold2">
              $FAITH
            </Text>{' '}
            taxes accrued for the staked God. No risk.
          </Text>
          <Box maxW="140ch" color=" rgba(255,255,255,0.2)" py="40px">
            <Text as="hr" />
          </Box>
          <Text as="p" className="plex" maxW="90ch" color="gold2" mt="50px">
            Will you be the next to join the Pantheon of Gods?
          </Text>
          <Text as="p" className="plex" mt="10px" maxW="90ch">
            God Game has been inspired by other NFT ideas such as Vampire Game
            and Wolf Game, however, being on the Metis blockchain God Game looks
            to take an existing concept and introduce an interesting technology
            to the Metis space.
          </Text>
        </Box>
      </Box>
      <Footer />
    </>
  )
}

export default Whitepaper
