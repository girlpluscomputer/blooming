import {
  Box,
  Button,
  Input,
  ModalBody,
  ModalFooter,
  Select
} from '@chakra-ui/react'

export const CreateHabitForm = () => {
  return (
    <>
      <Input
        variant="flushed"
        size="md"
        placeholder="Title"
        color="var(--chakra-colors-gray)"
      />
      <Box>
        <Select placeholder="Select a category">
          <option value="option1">Health</option>
          <option value="option2">Self Care</option>
          <option value="option3">Job</option>
        </Select>
      </Box>
    </>
  )
}
