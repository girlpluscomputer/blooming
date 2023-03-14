import { Box, Link, BoxProps } from '@chakra-ui/react'

export type RouteType = { key: string; name: string; route: string }

export interface NavigationProps extends BoxProps {
  routes: RouteType[]
}

export const Navigation = (props: NavigationProps) => {
  const { routes } = props

  return (
    <Box {...props}>
      {routes.map(({ route, key, name }) => (
        <Link fontSize="caption" href={route} key={key}>
          {name}
        </Link>
      ))}
    </Box>
  )
}
