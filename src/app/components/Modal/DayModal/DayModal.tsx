import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Divider,
} from "@nextui-org/react";
import { PlusIcon } from "@heroicons/react/20/solid";
import CreateOrderModal from "./CreateOrderModal/CreateOrderModal";

type DayModalProps = {
  openModal: {
    isOpen: boolean;
    onOpen: () => void;
    onOpenChange: () => void;
  };
  dayInfo: {
    dayNumber: String;
    monthName: String;
  };
};

export default function DayModal(props: DayModalProps) {
  const { isOpen, onOpen, onOpenChange } = props.openModal;
  const { dayNumber } = props.dayInfo;
  const { monthName } = props.dayInfo;

  const openDayModal = useDisclosure();
  return (
    <>
      <Modal
        className="h-[85vh] w-[95vw]"
        isOpen={isOpen}
        style={{ maxWidth: "none" }}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 sm:flex-row items-center justify-between">
                <p>
                  {dayNumber} {monthName}
                </p>
                <Button
                  startContent={<PlusIcon />}
                  color="primary"
                  className="min-w-[180px] mr-5"
                  onClick={openDayModal.onOpen}
                >
                  Criar Encomenda
                </Button>
              </ModalHeader>
              <Divider></Divider>
              <ModalBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat
                  consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
                  incididunt cillum quis. Velit duis sit officia eiusmod Lorem
                  aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                  nisi consectetur esse laborum eiusmod pariatur proident Lorem
                  eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <CreateOrderModal openModal={openDayModal}></CreateOrderModal>
    </>
  );
}
