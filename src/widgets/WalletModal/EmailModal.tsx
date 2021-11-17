import React from "react";
import styled from "styled-components";
import { Link } from "../../components/Link";
import { Input } from "../../components/Input";
import { Modal } from "../Modal";
import { Button, Flex, Heading, HelpIcon } from "../..";

interface Props {
  onDismiss?: () => void;
}

const HelpLink = styled(Link)`
  display: flex;
  align-self: center;
  align-items: center;
  margin-top: 24px;
`;

const handleEmail = () => {
  // client side email validation
  // send email verification request
  // response from email verification gets set as a token
  // window.localStorage.setItem("change_me", "verified_email_token");
};

const EmailModal: React.FC<Props> = ({ onDismiss = () => null }) => (
  <Modal title="Connect to a Wallet" onDismiss={onDismiss}>
    <Heading size="md" mb={2}>
      Email:
    </Heading>
    <Input type="email" placeholder="example@domain.com" my={2} />
    <Flex justifyContent="center" mt={3}>
      <Button scale="md" variant="secondary" onClick={handleEmail}>
        Next
      </Button>
    </Flex>
    <Flex justifyContent="center" mt={3}>
      <Link href="#test">
        <HelpIcon color="primary" mr="6px" />
        Why do we need your email?
      </Link>
    </Flex>
  </Modal>
);

export default EmailModal;
