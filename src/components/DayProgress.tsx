import { Box, Text } from '@chakra-ui/react'

import { LogStatus } from '@/graphql/generated/types'

export interface DayProgressProps {
  status: LogStatus
  children: React.ReactNode
}

export const DayProgress = ({ status, children }: DayProgressProps) => {
  const getBg = () => {
    let bg = ''

    switch (status) {
      case LogStatus.Initial: {
        bg = 'var(--chakra-colors-white)'
        break
      }
      case LogStatus.Completed: {
        bg = 'var(--chakra-colors-black)'
        break
      }
      case LogStatus.Expired: {
        bg = 'var(--chakra-colors-lightGray)'
        break
      }
    }

    return bg
  }

  const getBorder = () => {
    return status !== LogStatus.Expired
      ? '1px solid var(--chakra-colors-black)'
      : '1px solid var(--chakra-colors-lightGray)'
  }

  const getFontColor = () => {
    let color

    switch (status) {
      case LogStatus.Initial: {
        color = 'var(--chakra-colors-black)'
        break
      }
      case LogStatus.Completed: {
        color = 'var(--chakra-colors-white)'
        break
      }
      case LogStatus.Expired: {
        color = 'var(--chakra-colors-gray)'
        break
      }
    }

    return color
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      rounded="100%"
      w="20px"
      height="20px"
      bg={getBg()}
      border={getBorder()}
    >
      <Text fontSize="9px" fontWeight="bold" color={getFontColor()}>
        {children}
      </Text>
    </Box>
  )
}
