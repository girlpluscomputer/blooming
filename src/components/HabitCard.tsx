import {
  Box,
  Card,
  CardBody,
  Text,
  IconButton,
  Heading
} from '@chakra-ui/react'
import { DayProgress } from './DayProgress'

export interface DayProgressType {
  id: string
  dayOfTheWeek: string
  disabled?: boolean
  completed: boolean
}

export interface HabitType {
  id: string
  totalOfDays: number
  currentDay: number
  title: string
  description: string
  category: string
  weekProgress: DayProgressType[]
  repeat: string
  completed: boolean
}

export interface HabitCardProps {
  habit: HabitType
}

export const HabitCard = ({ habit }: HabitCardProps) => {
  const {
    currentDay,
    totalOfDays,
    title,
    description,
    weekProgress,
    completed
  } = habit

  return (
    <Card
      maxWidth="200px"
      height="180px"
      p="16px"
      bg={
        completed
          ? 'radial-gradient(50% 50% at 50% 50%, #B1D5AF 0%, rgba(177, 213, 175, 0.42) 89.06%)'
          : '#fff'
      }
      _hover={{
        border: '3px solid rgba(177, 213, 175, 1)',
        cursor: 'pointer'
      }}
    >
      <CardBody
        p="0"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box display="flex" justifyContent="space-between">
          <Text color="var(--chakra-colors-gray)" fontWeight="bold">
            {`${currentDay} / ${totalOfDays}`}
          </Text>
          <IconButton size="xs" aria-label="Search database" />
        </Box>
        <Box>
          <Heading fontSize="24px">{title}</Heading>
          <Text color="var(--chakra-colors-gray)" fontWeight="bold">
            {description}
          </Text>
        </Box>
        <Box display="flex" justifyContent="space-between">
          {weekProgress?.map(dayProgress => (
            <DayProgress key={dayProgress.id} {...dayProgress} />
          ))}
        </Box>
      </CardBody>
    </Card>
  )
}
