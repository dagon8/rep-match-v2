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

export default function SubscribeModal(props: Props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { itemId } = props
  
  function handleSubscribe(){
      //Do something here to subscribe
      console.log("hospital_id: ", itemId)
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
        Subscribe
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Subscribe to hospital?
              </ModalHeader>
              <ModalBody>
                <p>You'll subscribe to this hospital if you accept</p>
              </ModalBody>
              <ModalFooter>
                <Button onClick={() => handleSubscribe()} color="primary" variant="light" onPress={onClose}>
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
