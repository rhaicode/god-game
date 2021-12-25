import { useToast, Text } from '@chakra-ui/react'
import { useAtom } from 'jotai'
import { accountAtom } from '../atoms'

const useWallet = () => {
  const [currentAccount, setCurrentAccount] = useAtom(accountAtom)
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

  return { currentAccount, connectWallet }
}

export default useWallet
