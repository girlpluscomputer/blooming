import { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { Box, Button, Heading, useDisclosure } from '@chakra-ui/react'

import { CreateHabitModal, HabitCard, Header } from '@/components'
import { DayProgressType, HabitType } from './types'
import { getHabitsQuery } from './getHabitsQuery'
import AddIcon from '../../../public/add.svg'

const Habits = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [habits, setHabits] = useState<HabitType[]>([])
  const { data, loading, error } = useQuery(getHabitsQuery)
  const todaysDate = new Date().toLocaleDateString('en-us', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  })

  useEffect(() => {
    if (data) {
      setHabits(data.habits)
    }
  }, [data])

  // useEffect(() => {
  //   // save in db
  // }, [habits])

  const createNewHabit = (newHabit: HabitType) => {
    setHabits(prevHabits => [...prevHabits, newHabit])
  }

  const getUpdatedWeekProgress = (weekProgress: DayProgressType[]) => {
    const today = new Date().getDay()

    return weekProgress.map(day =>
      day.id === today && !day.disabled
        ? { ...day, completed: !day.completed }
        : day
    )
  }

  const completeHabit = (habitId: string) => {
    const updatedHabits = habits.map((habit: HabitType) => {
      if (habit.id === habitId) {
        if (habit.completed) {
          return {
            ...habit,
            completed: false,
            currentDay: habit.currentDay - 1,
            weekProgress: getUpdatedWeekProgress(habit.weekProgress)
          }
        } else {
          return {
            ...habit,
            completed: true,
            currentDay: habit.currentDay + 1,
            weekProgress: getUpdatedWeekProgress(habit.weekProgress)
          }
        }
      }

      return habit
    })

    setHabits(updatedHabits)
  }

  if (loading) {
    return <span>Loading...</span>
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
          {todaysDate}
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
          // TODO: create the empty status
          <span>s</span>
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
