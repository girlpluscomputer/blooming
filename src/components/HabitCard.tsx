import {
  Box,
  Card,
  CardBody,
  Text,
  IconButton,
  Heading
} from '@chakra-ui/react'
import { HabitWeekLogs } from './HabitWeekLogs'
import { HabitType } from '@/views/Habits/types'
export interface HabitCardProps {
  habit: HabitType
}

export const HabitCard = ({ habit }: HabitCardProps) => {
  const { currentDay, totalOfDays, title, description, completed, logs } = habit

  return (
    <Card
      maxWidth="200px"
      height="180px"
      p="16px"
      borderRadius="20px"
      bg={completed ? '#e6daf6' : '#fff'}
      _hover={{
        border: '3px solid #c8a6f4',
        cursor: 'pointer'
      }}
      onClick={() => {}}
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
          <HabitWeekLogs logs={logs} />
        </Box>
      </CardBody>
    </Card>
  )
}
