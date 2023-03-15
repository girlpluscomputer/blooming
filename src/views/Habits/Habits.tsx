import { Box, Button, Heading, useDisclosure } from '@chakra-ui/react'

import { CreateHabitModal, HabitCard, Header } from '@/components'
import { DayProgressType, HabitType } from '@/components/HabitCard'
import AddIcon from '../../../public/add.svg'

const weekProgress: DayProgressType[] = [
  { id: 'monday', dayOfTheWeek: 'Monday', completed: false, disabled: false },
  { id: 'tuesday', dayOfTheWeek: 'Tuesday', completed: true, disabled: false },
  {
    id: 'wednesday',
    dayOfTheWeek: 'Wednesday',
    completed: true,
    disabled: false
  },
  {
    id: 'thursday',
    dayOfTheWeek: 'Thursday',
    completed: true,
    disabled: false
  },
  { id: 'friday', dayOfTheWeek: 'Friday', completed: true, disabled: true },
  {
    id: 'saturday',
    dayOfTheWeek: 'Saturday',
    completed: true,
    disabled: false
  },
  { id: 'sunday', dayOfTheWeek: 'Sunday', completed: true, disabled: false }
]

const habits: HabitType[] = [
  {
    id: 'habit-excersice',
    title: 'Excersise',
    description: '30 minutes per day',
    currentDay: 13,
    totalOfDays: 21,
    weekProgress,
    completed: true
  },
  {
    id: 'habit-drink-water',
    title: 'Drink water',
    description: '2L per day',
    currentDay: 13,
    totalOfDays: 21,
    weekProgress,
    completed: false
  },
  {
    id: 'habit-meditate',
    title: 'Meditate',
    description: '10 minutes per day',
    currentDay: 13,
    totalOfDays: 21,
    weekProgress,
    completed: false
  }
]

const Habits = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

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
        <Box
          pt="20px"
          display="grid"
          gridTemplateColumns="repeat(3, 200px)"
          gap="12px"
        >
          {habits.map(habit => (
            <HabitCard key={habit.id} habit={habit} />
          ))}
        </Box>
      </Box>
      <CreateHabitModal isOpen={isOpen} onClose={onClose} />
    </>
  )
}

export default Habits
