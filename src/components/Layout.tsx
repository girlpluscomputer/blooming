import { PropsWithChildren } from 'react'
import Image from 'next/image'
import { Flex, Box } from '@chakra-ui/react'

import { Navigation } from '../components/Navigation'
import BloomingLogo from '../../public/blooming-logo.svg'

const routes = [
  { key: 'home-route', name: 'habits', route: '/' },
  { key: 'challenge-route', name: 'challenges', route: '/challenges' },
  { key: 'progress-route', name: 'progress', route: '/progress' }
]

export const Layout = ({ children }: PropsWithChildren) => (
  <Flex>
    <Box
      w="300px"
      h="100vh"
      bg="white"
      p="40px"
      display="flex"
      flexDirection="column"
    >
      <Image src={BloomingLogo} alt="blooming logo" width={30} height={30} />
      <Navigation
        display="flex"
        flexDirection="column"
        gap="12px"
        mt="60px"
        routes={routes}
      />
    </Box>
    <Box bg="background" w="calc(100% - 300px)" p="40px">
      {children}
    </Box>
  </Flex>
)
