import { PropsWithChildren } from 'react'
import { Flex, Box } from '@chakra-ui/react'

import { ROUTES } from '@/utils/constants'
import { Navigation } from '../components'
import BloomingLogo from '../../public/blooming-logo.svg'

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
        routes={ROUTES}
      />
    </Box>
    <Box bg="background" w="calc(100% - 300px)">
      {children}
    </Box>
  </Flex>
)
