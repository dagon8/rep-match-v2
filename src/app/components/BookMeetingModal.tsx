import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";


type Props = {
  itemId: number
};

export default function BookMeetingModal(props: Props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { itemId } = props
  
  function handleBook(){
      //Do something here to book meeting
      console.log("meeting_id: ", itemId)
  }

  return (
    <>
      <Button
        size="sm"
        onPress={onOpen}
        color="primary"
        variant="light"
        aria-label="cancel"
      >
        Book
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Book meeting?
              </ModalHeader>
              <ModalBody>
                <p>This meeting will be booked if you accept</p>
              </ModalBody>
              <ModalFooter>
                <Button onClick={() => handleBook()} color="primary" variant="light" onPress={onClose}>
                  Accept
                </Button>
                <Button color="primary" onPress={onClose}>
                  Dismiss
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
