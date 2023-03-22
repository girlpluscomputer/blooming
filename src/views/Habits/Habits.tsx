import { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { Box, Button, Heading, useDisclosure } from '@chakra-ui/react'

import { CreateHabitModal, HabitCard, Header } from '@/components'
import { DayProgressType, HabitType } from './types'
import AddIcon from '../../../public/add.svg'
import { getHabitsQuery } from './getHabitsQuery'

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
    const getFromStorage = () => {
      if (typeof window !== 'undefined') {
        const dataFromStorage = localStorage.getItem('habits')

        return dataFromStorage ? JSON.parse(dataFromStorage) : []
      }

      return []
    }
    const habitsFromStorage = getFromStorage()

    setHabits(habitsFromStorage)
  }, [])

  useEffect(() => {
    const saveInStorage = () => {
      if (typeof window !== 'undefined' && habits.length) {
        localStorage.setItem('habits', JSON.stringify(habits))
      }
    }

    saveInStorage()
  }, [habits])

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
        {data.habits.length > 0 ? (
          <Box
            pt="20px"
            display="grid"
            gridTemplateColumns="repeat(3, 200px)"
            gap="12px"
          >
            {data.habits.map(habit => (
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
