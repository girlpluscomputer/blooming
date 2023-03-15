import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalProps,
  ModalBody,
  ModalFooter,
  Button
} from '@chakra-ui/react'
import { CreateHabitForm } from './CreateHabitForm'

export const CreateHabitModal = ({
  isOpen,
  onClose
}: Omit<ModalProps, 'children'>) => {
  return (
    <Modal size="lg" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent w="650px">
        <ModalHeader>Create a new habit</ModalHeader>
        <ModalCloseButton />
        <ModalBody display="flex" flexDirection="column" gap="40px">
          <CreateHabitForm />
        </ModalBody>
        <ModalFooter>
          <Button
            type="submit"
            variant="solid"
            colorScheme="blue"
            onClick={() => {}}
          >
            Create
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
