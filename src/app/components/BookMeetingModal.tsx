import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Tooltip} from "@nextui-org/react";
import { faCancel } from "@fortawesome/free-solid-svg-icons/faCancel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { type } from "os";


export default function BookMeetingModal() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button size="sm" onPress={onOpen} color="primary" variant="light" aria-label="cancel">
          Book
      </Button>   
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Book meeting?</ModalHeader>
              <ModalBody>
                <p> 
                  This meeting will be booked if you accept
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" variant="light" onPress={onClose}>
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
