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
  itemId: number
};

export default function UnsubscribeModal(props: Props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { status, itemId } = props;

  function handleUnsubscribe(){
    //Do somehting here to unsibscribe
      console.log("subscription_id: ", itemId)
  }

  return (
    <>
      <Button
        isDisabled={["canceled"].includes(status) ? true : false}
        size="sm"
        onPress={onOpen}
        color="danger"
        variant="light"
        aria-label="cancel"
      >
        Unsubscribe
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Cancel subscription?
              </ModalHeader>
              <ModalBody>
                <p>This subscription will be cancelled if you accept</p>
              </ModalBody>
              <ModalFooter>
                <Button onClick={() => handleUnsubscribe()} color="danger" variant="light" onPress={onClose}>
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
