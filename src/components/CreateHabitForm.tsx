import { FormEvent, useState } from 'react'
import { useMutation } from '@apollo/client'
import { Box, Button, Input, Select, Text } from '@chakra-ui/react'

import { createHabitMutation, getHabitsQuery } from '@/views/graphql'

export const CreateHabitForm = ({ onClose }: { onClose: () => void }) => {
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [category, setCategory] = useState<string>('')
  const [totalOfDays, setTotalOfDays] = useState<number>(21)
  const [createHabit] = useMutation(createHabitMutation, {
    refetchQueries: [{ query: getHabitsQuery }]
  })
  const isSubmitButtonDisabled =
    !Boolean(title) ||
    !Boolean(description) ||
    !Boolean(category) ||
    !Boolean(totalOfDays)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const newHabit = {
      // TODO: Get dynamically user id
      userId: 'af833866-e984-4ec4-9915-ba5d4c7166fd',
      totalOfDays,
      currentDay: 1,
      title,
      description,
      category,
      completed: false
    }

    createHabit({
      variables: newHabit
    })
    onClose()
  }

  return (
    <form onSubmit={onSubmit}>
      <Box display="flex" flexDirection="column" gap="32px">
        <Input
          id="title-value"
          name="title"
          variant="flushed"
          size="md"
          placeholder="Title"
          fontSize="16px"
          color="var(--chakra-colors-gray)"
          borderBottom="2px solid var(--chakra-colors-background)"
          _focus={{
            borderBottom: '1px solid var(--chakra-colors-blue)'
          }}
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
        <Input
          id="description-value"
          name="description"
          variant="flushed"
          size="md"
          placeholder="Description"
          fontSize="16px"
          color="var(--chakra-colors-gray)"
          borderBottom="2px solid var(--chakra-colors-background)"
          _focus={{
            borderBottom: '1px solid var(--chakra-colors-blue)'
          }}
          value={description}
          onChange={event => setDescription(event.target.value)}
        />
        <Box w="100%" display="flex" justifyContent="space-between">
          <Box w="50%">
            <Select
              placeholder="Select a category"
              border="2px solid var(--chakra-colors-background)"
              _focus={{
                border: '1px solid var(--chakra-colors-blue)'
              }}
              name="category"
              value={category}
              onChange={event => setCategory(event.target.value)}
            >
              <option value="health">Health</option>
              <option value="self-care">Self Care</option>
              <option value="job">Job</option>
            </Select>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="end"
            p="0 20px"
          >
            <Text mr="8px">repeat by</Text>
            <Input
              w="56px"
              name="totalOfDays"
              type="number"
              border="2px solid var(--chakra-colors-background)"
              _focus={{
                border: '1px solid var(--chakra-colors-blue)'
              }}
              value={totalOfDays}
              min={0}
              max={31}
              onChange={event => setTotalOfDays(Number(event.target.value))}
            />
            <Text ml="8px">days</Text>
          </Box>
        </Box>
        <Box display="flex" justifyContent="flex-end">
          <Button
            type="submit"
            variant="solid"
            color="#fff"
            bg="var(--chakra-colors-primary)"
            isDisabled={isSubmitButtonDisabled}
          >
            Create
          </Button>
        </Box>
      </Box>
    </form>
  )
}
