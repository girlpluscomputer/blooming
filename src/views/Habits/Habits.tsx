import { useState } from 'react'
import { Box, Button, Heading, useDisclosure } from '@chakra-ui/react'

import { CreateHabitModal, HabitCard, Header } from '@/components'
import { HabitType } from '@/components/HabitCard'
import AddIcon from '../../../public/add.svg'

const Habits = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [habits, setHabits] = useState<HabitType[]>([])

  const createNewHabit = (newHabit: HabitType) => {
    setHabits(prevHabits => [...prevHabits, newHabit])
  }

  const completeHabit = (habitId: string) => {
    const updatedHabits = habits.map((habit: HabitType) => {
      if (habit.id === habitId) {
        return habit.completed
          ? { ...habit, completed: false }
          : { ...habit, completed: true }
      }

      return habit
    })

    setHabits(updatedHabits)
  }

  return (
    <>
      <Header>
        <Heading fontSize="24px">Today</Heading>
        <Heading
          ml="12px"
          fontSize="24px"
          color="var(--chakra-colors-lightGray)"
        >
          Monday, February 27th
        </Heading>
      </Header>
      <Box p="40px">
        <Box display="flex" justifyContent="space-between">
          <Heading fontSize="24px" pb="20px">
            Your habits
          </Heading>
          <Button
            rounded="100%"
            p="0"
            bg="#000"
            width="40px"
            height="40px"
            onClick={onOpen}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <AddIcon />
          </Button>
        </Box>
        {habits.length > 0 ? (
          <Box
            pt="20px"
            display="grid"
            gridTemplateColumns="repeat(3, 200px)"
            gap="12px"
          >
            {habits.map(habit => (
              <HabitCard
                key={habit.id}
                habit={habit}
                completeHabit={completeHabit}
              />
            ))}
          </Box>
        ) : (
          // TODO: replace with new copy
          <span>Start by creating a habit</span>
        )}
      </Box>
      <CreateHabitModal
        isOpen={isOpen}
        onClose={onClose}
        createNewHabit={createNewHabit}
      />
    </>
  )
}

export default Habits
