import { Box, Button, Heading, useDisclosure } from '@chakra-ui/react'

import { CreateHabitModal, HabitCard, Header } from '@/components'
import { getTodayDateFormatted } from '@/utils/getTodayDateFormatted'
import AddIcon from '../../../public/add.svg'

const Habits = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  // const { data, loading } = useQuery(GET_HABITS)
  // const habits: HabitType[] = data ? data.habits : []

  // if (loading) {
  //   return <span>Loading...</span>
  // }

  return (
    <>
      <Header>
        <Heading fontSize="24px">Today</Heading>
        <Heading
          ml="12px"
          fontSize="24px"
          color="var(--chakra-colors-lightGray)"
        >
          {getTodayDateFormatted()}
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
        {/* {habits.length > 0 ? (
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
        ) : (
          <span>Start by creating a habit</span>
        )} */}
      </Box>
      <CreateHabitModal isOpen={isOpen} onClose={onClose} />
    </>
  )
}

export default Habits
