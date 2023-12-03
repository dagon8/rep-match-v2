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
  status: string;
  itemId: number;
};

export default function CancelMeetingModal(props: Props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { status, itemId } = props;

  function handleCancel(){
    //Do something here to cancel meeting
    console.log("meeting_id: ", itemId)
  }

  return (
    <>
      <Button
        isDisabled={["canceled", "finished", "ongoing"].includes(status) ? true : false}
        size="sm"
        onPress={onOpen}
        color="danger"
        variant="light"
        aria-label="cancel"
      >
        Cancel
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Cancel meeting?
              </ModalHeader>
              <ModalBody>
                <p>This meeting will be cancelled if you accept</p>
              </ModalBody>
              <ModalFooter>
                <Button onClick={() => handleCancel()} color="danger" variant="light" onPress={onClose}>
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
