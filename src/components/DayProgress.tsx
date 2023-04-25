import { Box, Text } from '@chakra-ui/react'

import { LogStatus } from '@/views/Habits/types'
import { ReactNode } from 'react'
// completed = filled black, white text
// initial/not completed = filled white, black border
// disabled = filled in gray, gray text
export interface DayProgressProps {
  status: LogStatus
  children: ReactNode
}

export const DayProgress = ({ status, children }: DayProgressProps) => {
  const getBg = () => {
    let bg = ''

    switch (status) {
      case LogStatus.INITIAL: {
        bg = 'var(--chakra-colors-white)'
        break
      }
      case LogStatus.COMPLETED: {
        bg = 'var(--chakra-colors-black)'
        break
      }
      case LogStatus.DISABLED: {
        bg = 'var(--chakra-colors-lightGray)'
        break
      }
    }

    return bg
  }

  const getBorder = () => {
    return status !== LogStatus.DISABLED
      ? '1px solid var(--chakra-colors-black)'
      : '1px solid var(--chakra-colors-lightGray)'
  }

  const getFontColor = () => {
    let color

    switch (status) {
      case LogStatus.INITIAL: {
        color = 'var(--chakra-colors-black)'
        break
      }
      case LogStatus.COMPLETED: {
        color = 'var(--chakra-colors-white)'
        break
      }
      case LogStatus.DISABLED: {
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
