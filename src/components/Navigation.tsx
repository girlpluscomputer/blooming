import { Box, Link, BoxProps } from '@chakra-ui/react'

export type RouteType = { key: string; name: string; link: string }

export interface NavigationProps extends BoxProps {
  routes: RouteType[]
}

export const Navigation = (props: NavigationProps) => {
  const { routes } = props

  return (
    <Box {...props}>
      {routes.map(({ link, key, name }) => (
        <Link fontSize="caption" fontWeight="bold" href={link} key={key}>
          {name}
        </Link>
      ))}
    </Box>
  )
}
