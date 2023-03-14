import { Box, BoxProps } from '@chakra-ui/react'

export const Header = (props: BoxProps) => {
  return (
    <Box
      p="40px 40px 20px 40px"
      borderBottom="2px solid var(--chakra-colors-grayBorder)"
      display="flex"
      {...props}
    >
      {props.children}
    </Box>
  )
}
