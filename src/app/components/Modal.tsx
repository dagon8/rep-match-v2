import React, { ReactNode } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Tooltip} from "@nextui-org/react";
import { faInfo } from "@fortawesome/free-solid-svg-icons/faInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type Props = {
  modalContent: ReactNode
  buttonContent: ReactNode
  tooltipText: string
  textOnly: boolean
}

export default function InfoMeetingModal(props:Props) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const {modalContent, tooltipText, buttonContent, textOnly} = props

  return (
    <>
      <Tooltip size="sm" onClick={onOpen} content={tooltipText}>
        <Button size="sm" onPress={onOpen} isIconOnly={!textOnly} variant="light" aria-label="cancel">
            {buttonContent}
        </Button>   
      </Tooltip>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
                {modalContent}
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
