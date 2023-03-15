import { PropsWithChildren } from 'react'
import { Flex, Box } from '@chakra-ui/react'

import { Navigation } from '../components'
import BloomingLogo from '../../public/blooming-logo.svg'

const routes = [
  { key: 'home-route', name: 'habits', link: '/' },
  { key: 'challenge-route', name: 'challenges', link: '/challenges' },
  { key: 'progress-route', name: 'progress', link: '/progress' }
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
      <BloomingLogo />
      <Navigation
        display="flex"
        flexDirection="column"
        gap="12px"
        mt="60px"
        routes={routes}
      />
    </Box>
    <Box bg="background" w="calc(100% - 300px)">
      {children}
    </Box>
  </Flex>
)
