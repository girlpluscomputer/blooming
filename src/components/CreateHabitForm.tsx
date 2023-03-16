import { FormEvent, useState } from 'react'
import { Box, Button, Input, Select } from '@chakra-ui/react'

import { WEEK_PROGRESS } from '@/views/Habits/Habits'
import { HabitType } from './HabitCard'

export const CreateHabitForm = ({
  createNewHabit,
  onClose
}: {
  createNewHabit: (newHabit: HabitType) => void
  onClose: () => void
}) => {
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [category, setCategory] = useState<string>('')
  const [totalOfDays, setTotalOfDays] = useState<number>(21)
  const [repeat, setRepeat] = useState<string>('')

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const newHabit: HabitType = {
      id: `habit-${title}`,
      totalOfDays,
      currentDay: 0,
      title,
      description,
      category,
      weekProgress: WEEK_PROGRESS,
      repeat,
      completed: false
    }

    createNewHabit(newHabit)
    onClose()
  }

  return (
    <form onSubmit={onSubmit}>
      <Input
        id="title-value"
        name="title"
        variant="flushed"
        size="md"
        placeholder="Title"
        fontSize="16px"
        value={title}
        onChange={event => setTitle(event.target.value)}
      />
      <Input
        id="desc-value"
        name="description"
        variant="flushed"
        size="md"
        placeholder="Description"
        fontSize="16px"
        value={description}
        onChange={event => setDescription(event.target.value)}
      />
      <Box w="100%" display="flex" justifyContent="space-between">
        <Box w="50%">
          <Select
            placeholder="Select a category"
            border="2px solid var(--chakra-colors-blue)"
            name="category"
            value={category}
            onChange={event => setCategory(event.target.value)}
          >
            <option value="health">Health</option>
            <option value="self-care">Self Care</option>
            <option value="job">Job</option>
          </Select>
        </Box>
        <Box w="50%" p="0 20px">
          <span>repeat by</span>
          <Input
            w="48px"
            name="totalOfDays"
            type="number"
            border="2px solid var(--chakra-colors-blue)"
            value={totalOfDays}
            min={0}
            max={31}
            onChange={event => setTotalOfDays(Number(event.target.value))}
          />
          <span>days</span>
        </Box>
      </Box>
      <Select
        placeholder="Only weekdays / weekends / everyday"
        border="2px solid var(--chakra-colors-blue)"
        value={repeat}
        onChange={event => setRepeat(event.target.value)}
      >
        <option value="weekdays">weekdays</option>
        <option value="weekends">weekends</option>
        <option value="everyday">everyday</option>
      </Select>
      <Button type="submit" variant="solid" bg="blue">
        Create
      </Button>
    </form>
  )
}
