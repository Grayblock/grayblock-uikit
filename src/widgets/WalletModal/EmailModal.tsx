import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "../../components/Link";
import { Input } from "../../components/Input";
import { Modal, useModal } from "../Modal";
import { Button, Flex, Heading, Text, HelpIcon } from "../..";
import ConnectModal from "./ConnectModal";

interface Props {
  onConnect?: () => void;
  onDismiss?: () => void;
}

const HelpLink = styled(Link)`
  display: flex;
  align-self: center;
  align-items: center;
  margin-top: 24px;
`;

const DetailsContainer = styled(Flex)`
  cursor: pointer;
  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;
const EmailModal: React.FC<Props> = ({ onDismiss = () => null, onConnect = () => null }) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const handleEmail = (callback: () => void) => {
    // client side email validation
    // send email verification request
    // response from email verification gets set as a token
    // window.localStorage.setItem("change_me", "verified_email_token");
    callback();
  };

  const handleDetails = () => {
    setIsDetailsOpen(!isDetailsOpen);
  };
  return (
    <Modal title="Connect to a Wallet" onDismiss={onDismiss}>
      <Heading size="md" mb={2}>
        Email:
      </Heading>
      <Input type="email" placeholder="example@domain.com" my={2} />
      <Flex justifyContent="center" mt={3}>
        <Button
          scale="md"
          variant="secondary"
          onClick={() => {
            handleEmail(onConnect);
          }}
        >
          Next
        </Button>
      </Flex>
      <DetailsContainer justifyContent="center" mt={3}>
        <HelpIcon color="primary" mr="6px" />
        <Text onClick={handleDetails}>Why do we need your email?</Text>
      </DetailsContainer>
      {isDetailsOpen && (
        <Flex style={{ maxWidth: "310px" }}>
          <Text mt={2}>
            This will associate your email to your Metamask address. We won't share your address outside Grayblock. We
            will use this email to contact you if necessary, and to you updated on current and new ELOs
          </Text>
        </Flex>
      )}
    </Modal>
  );
};

export default EmailModal;
