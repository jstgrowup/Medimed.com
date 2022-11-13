import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import Rating from "./rating/Rating";
const mainColor = "rgb(50,174,177)";
export default function ReviewModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [text, setText] = useState({
    name: "",
    message: "",
  });
  const toast = useToast();

  return (
    <>
      <Button onClick={onOpen} bg={mainColor} color="white" fontSize={"10px"}>
        WRITE REVIEW
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>WRITE REVIEW</ModalHeader>
          <ModalCloseButton />
          <ModalBody w={"100%"}>
            <Input
              onChange={(e) => {
                setText({ ...text, name: e.target.value });
              }}
              placeholder="Name"
            />
            <Textarea
              onChange={(e) => {
                setText({ ...text, message: e.target.value });
              }}
              placeholder="Write Review"
            />
            <Rating />
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                onClose();
              }}
            >
              Close
            </Button>
            <Button
              variant="ghost"
              onClick={() => {
                if (text.name != "" && text.message != "") {
                  toast({
                    title: `success thank you for your valuable feedback`,
                    status: "success",
                    isClosable: true,
                  });
                  onClose();
                } else {
                  toast({
                    title: `Please fill all inputs`,
                    status: "info",
                    isClosable: true,
                  });
                }
              }}
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
