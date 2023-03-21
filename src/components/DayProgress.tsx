import { Box, Text } from '@chakra-ui/react'
import { DayProgressType } from '@/views/Habits/types'

export const DayProgress = ({
  disabled,
  completed,
  dayOfTheWeek
}: DayProgressType) => {
  if (!disabled) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        rounded="100%"
        bg={completed ? '#000' : '#white'}
        border={completed ? 'none' : '1px solid #000'}
        w="20px"
        height="20px"
      >
        <Text
          fontSize="9px"
          fontWeight="bold"
          color={completed ? 'white' : '#000'}
        >
          {dayOfTheWeek.toString().charAt(0)}
        </Text>
      </Box>
    )
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      rounded="100%"
      bg="var(--chakra-colors-gray)"
      w="20px"
      height="20px"
    >
      <Text fontSize="9px" fontWeight="bold" color="white">
        {dayOfTheWeek.charAt(0)}
      </Text>
    </Box>
  )
}
