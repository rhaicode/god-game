import { Button as ChakraButton, ButtonProps } from '@chakra-ui/react'

const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <ChakraButton
    backgroundColor="gold"
    _hover={{
      backgroundColor: 'yellow',
    }}
    _active={{
      backgroundColor: 'gold',
    }}
    color="white"
    fontWeight={400}
    textTransform="uppercase"
    {...props}
  >
    {children}
  </ChakraButton>
)

export default Button
