import { Grid } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { sample, uniqueId } from 'lodash'

const getBackgroundColor = () =>
  sample([
    '#081C26',
    '#1990CC',
    '#0E4967',
    '#156F9C',
    '#005078',
    '#0D7EB7',
    '#0D7EB7',
    '#0D7EB7',
    '#0D7EB7',
    '#0D7EB7',
    '#0D7EB7',
    '#0D7EB7',
    '#081C26',
    '#081C26',
    '#081C26',
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
      duration: 3,
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
    templateRows="repeat(4, 1fr)"
    templateColumns="repeat(auto-fill, 30px)"
  >
    {Array.from({ length: 4 }).map((_, __) =>
      Array.from({ length: 50 }).map((_, __) => <SVGBox key={uniqueId()} />)
    )}
  </Grid>
)

export default SVGWall
