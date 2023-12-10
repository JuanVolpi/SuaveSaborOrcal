import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Link,
  Select,
  SelectItem,
  Divider,
  Textarea,
} from "@nextui-org/react";
import {
  CakeIcon,
  PhoneIcon,
  ScaleIcon,
  SparklesIcon,
  UserIcon,
  UsersIcon,
} from "@heroicons/react/20/solid";

type CreateOrderProps = {
  openModal: {
    isOpen: boolean;
    onOpen: () => void;
    onOpenChange: () => void;
  };
};

export default function CreateOrderModal(props: CreateOrderProps) {
  const { isOpen, onOpen, onOpenChange } = props.openModal;
  const [isCakeSelected, setIsCakeSelected] = useState(false);

  function cakeOrderAccess() {
    return isCakeSelected ? {} : { isDisabled: true };
  }

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent className="overflow-y-scroll">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Novo Pedido
              </ModalHeader>
              <ModalBody>
                <section>
                  <div className="px-1 py-2">
                    <div className="text-small font-bold">Cliente</div>
                    <div className="text-tiny">Informações do cliente</div>
                  </div>

                  <Input
                    autoFocus
                    label="Solicitante"
                    placeholder="Adicione um nome"
                    variant="bordered"
                    endContent={<UserIcon className="w-5 text-gray-500" />}
                    isRequired
                  />
                  <Input
                    label="Contato"
                    placeholder="Adicione um número"
                    variant="bordered"
                    isInvalid={false}
                    errorMessage="Por favor, digite apenas números"
                    endContent={<PhoneIcon className="w-5 text-gray-500" />}
                  />
                  <Divider />
                </section>
                <section>
                  <div className="px-1 py-2">
                    <Checkbox
                      className="text-small font-bold"
                      defaultSelected
                      color="primary"
                      isSelected={isCakeSelected}
                      onValueChange={setIsCakeSelected}
                    >
                      Bolo
                    </Checkbox>
                    <div className="text-tiny">Informações do bolo</div>
                  </div>
                  <div className="flex flex-row justify-between">
                    <Select
                      isRequired
                      label="Massa"
                      variant={"bordered"}
                      placeholder="Selecione uma massa"
                      className="max-w-xs"
                      {...cakeOrderAccess()}
                    >
                      <SelectItem key={"branca"} value={"branca"}>
                        {"Branca"}
                      </SelectItem>
                      <SelectItem key={"chocolate"} value={"chocolate"}>
                        {"Chocolate"}
                      </SelectItem>
                      <SelectItem key={"redVelvet"} value={"redVelvet"}>
                        {"Red Velvet"}
                      </SelectItem>
                    </Select>
                    <Input
                      label="Peso"
                      placeholder="Adicione um peso"
                      variant="bordered"
                      isInvalid={false}
                      endContent={<ScaleIcon className="w-5 text-gray-500" />}
                      {...cakeOrderAccess()}
                    />
                  </div>
                  <Input
                    label="Recheio"
                    placeholder="Descreva o recheio"
                    variant="bordered"
                    isInvalid={false}
                    endContent={<SparklesIcon className="w-5 text-gray-500" />}
                    {...cakeOrderAccess()}
                  />
                  <div className="px-1 py-2">
                    <div className="text-small font-bold">Decoração</div>
                    <div className="text-tiny">Informações da Descoração</div>
                  </div>
                  <Input
                    label="Aniversariante"
                    placeholder="Adicione um nome"
                    variant="bordered"
                    isInvalid={false}
                    endContent={<SparklesIcon className="w-5 text-gray-500" />}
                    {...cakeOrderAccess()}
                  />
                  <Textarea
                    label="Tema"
                    variant="bordered"
                    labelPlacement="inside"
                    placeholder="Descreva o tema do bolo"
                    className="h-min-[20px] h-fit"
                    {...cakeOrderAccess()}
                  />
                </section>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Sign in
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
