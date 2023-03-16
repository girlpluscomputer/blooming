import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalProps,
  ModalBody,
  Box
} from '@chakra-ui/react'

import { CreateHabitForm } from './CreateHabitForm'
import { HabitType } from './HabitCard'

export const CreateHabitModal = ({
  isOpen,
  onClose,
  createNewHabit
}: Omit<ModalProps, 'children'> & {
  createNewHabit: (newHabit: HabitType) => void
}) => {
  return (
    <Modal size="xl" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent w="650px" p="20px 40px">
        <Box
          w="100%"
          display="flex"
          alignContent="center"
          justifyContent="space-between"
          position="relative"
        >
          <ModalHeader p="20px 0" whiteSpace="nowrap">
            Create a new habit
          </ModalHeader>
          <ModalCloseButton
            position="relative"
            color="var(--chakra-colors-gray)"
          />
        </Box>
        <ModalBody p="0">
          <CreateHabitForm createNewHabit={createNewHabit} onClose={onClose} />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
