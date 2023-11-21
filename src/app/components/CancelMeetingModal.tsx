import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Tooltip} from "@nextui-org/react";
import { faCancel } from "@fortawesome/free-solid-svg-icons/faCancel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { type } from "os";

type Props = {
  status: string
}

export default function CancelMeetingModal(props:Props) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const {status} = props

  return (
    <>
      <Button isDisabled={status === "canceled" ? true : false} size="sm" onPress={onOpen} color="danger" variant="light" aria-label="cancel">
          Cancel
      </Button>   
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Cancel meeting?</ModalHeader>
              <ModalBody>
                <p> 
                  This meeting will be cancelled if you accept
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
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
