import { Grid } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { sample, uniqueId } from 'lodash'

const getBackgroundColor = () =>
  sample([
    '#20150E',
    '#803103',
    '#000000',
    '#914111',
    '#803103',
    '#803103',
    '#000000',
    '#803103',
    '#20150E',
    '#803103',
    '#803103',
    '#803103',
    '#70300A',
    '#20150E',
    '#000000',
  ])

const SVGBox: React.FC = () => (
  <motion.div
    initial={{
      backgroundColor: getBackgroundColor(),
    }}
    animate={{
      backgroundColor: getBackgroundColor(),
    }}
    transition={{
      ease: 'linear',
      duration: 2,
      delay: 2,
      repeatDelay: 2,
      repeat: Infinity,
      repeatType: 'mirror',
    }}
  />
)

const SVGWall: React.FC = () => (
  <Grid
    height="100px"
    width="100vw"
    templateRows="repeat(2, 1fr)"
    templateColumns="repeat(auto-fill, 30px)"
  >
    {Array.from({ length: 4 }).map((_, __) =>
      Array.from({ length: 100 }).map((_, __) => <SVGBox key={uniqueId()} />)
    )}
  </Grid>
)

export default SVGWall
