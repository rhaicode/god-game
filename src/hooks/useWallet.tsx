import { useToast, Text } from '@chakra-ui/react'
import { useAtom } from 'jotai'
import { accountAtom } from '../atoms'

const useWallet = () => {
  const [currentAccount, setCurrentAccount] = useAtom(accountAtom)
  const toast = useToast()

  const validateNetwork = async (): Promise<boolean> => {
    const { ethereum } = window as any

    if (ethereum) {
      const isDevelopment = process.env.NODE_ENV === 'development'
      const chainId = await ethereum.request({ method: 'eth_chainId' })

      const rinkebyChainId = '0x4'
      const metisStardustChainId = '0x24C'

      if (isDevelopment && chainId !== rinkebyChainId) {
        toast({
          title: (
            <Text fontSize="sm" className="plex">
              Wrong network.
            </Text>
          ),
          description: (
            <Text fontSize="xs" className="plex">
              Please use the Rinkeby Network.
            </Text>
          ),
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
        return false
      }

      if (!isDevelopment && chainId !== metisStardustChainId) {
        toast({
          title: (
            <Text fontSize="sm" className="plex">
              Wrong network.
            </Text>
          ),
          description: (
            <Text fontSize="xs" className="plex">
              Please use the Metis Stardust Network.
            </Text>
          ),
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
        return false
      }
      return true
    }
    return false
  }

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

      const isValidNetwork = await validateNetwork()

      if (!isValidNetwork) return

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
      toast({
        title: (
          <Text fontSize="sm" className="plex">
            Connection failed.
          </Text>
        ),

        status: 'error',
        duration: 3000,
        isClosable: true,
      })
      console.error(error)
    }
  }

  return { currentAccount, connectWallet, validateNetwork }
}

export default useWallet
