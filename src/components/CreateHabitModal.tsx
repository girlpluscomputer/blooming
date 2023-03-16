import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalProps,
  ModalBody
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
      <ModalContent w="650px">
        <ModalHeader>Create a new habit</ModalHeader>
        <ModalCloseButton />
        <ModalBody display="flex" flexDirection="column" gap="40px">
          <CreateHabitForm createNewHabit={createNewHabit} onClose={onClose} />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
