import { Box, Text } from '@chakra-ui/react'

export const DayProgress = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      rounded="100%"
      bg="var(--chakra-colors-white)"
      border="2px solid var(--chakra-colors-black)"
      w="20px"
      height="20px"
    >
      <Text fontSize="9px" fontWeight="bold" color="black">
        x
      </Text>
    </Box>
  )
}
