import { MouseEvent } from 'react'
import { Box, Card, CardBody, Text, Heading } from '@chakra-ui/react'

import { Habit } from '@/graphql/generated/types'
import {
  useRemoveHabitMutation,
  useToggleHabitMutation
} from '@/graphql/generated/hooks'
import { HabitWeekLogs } from './HabitWeekLogs'
import Trash from '../../public/trash.svg'

export const HabitCard = ({ habit }: { habit: Habit }) => {
  const { id, currentDay, totalOfDays, title, description, completed, logs } =
    habit
  const [toggleHabit] = useToggleHabitMutation()
  const [removeHabit] = useRemoveHabitMutation()

  const handleClick = async () => {
    await toggleHabit({ variables: { habitId: id, logId: logs[0].id } })
  }

  const handleDeleteHabit = async (event: MouseEvent) => {
    event.stopPropagation()

    await removeHabit({ variables: { habitId: id } })
  }

  return (
    <Card
      maxWidth="200px"
      height="180px"
      p="16px"
      borderRadius="20px"
      bg={completed ? '#e6daf6' : '#fff'}
      className="habit-card"
      role="group"
      _hover={{
        border: '2px solid #c8a6f4',
        cursor: 'pointer'
      }}
      onClick={handleClick}
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
          <Box
            as="button"
            onClick={handleDeleteHabit}
            bg="white"
            borderRadius="100%"
            borderColor="var(--card-border-color)"
            boxShadow="var(--card-shadow)"
            width="30px"
            height="30px"
            position="absolute"
            top={-2}
            right={-2}
            display="none"
            _groupHover={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Trash />
          </Box>
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
