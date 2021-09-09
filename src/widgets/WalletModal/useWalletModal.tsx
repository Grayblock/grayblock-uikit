import React from "react";
import { useModal } from "../Modal";
import ConnectModal from "./ConnectModal";
import AccountModal from "./AccountModal";
import BlankConnectModal from './BlankConnectModal';
import { Login } from "./types";

interface ReturnType {
  onPresentConnectModal: () => void;
  onPresentConnectModal1: () => void;
  onPresentAccountModal: () => void;
}

const useWalletModal = (login: Login, logout: () => void, account?: string): ReturnType => {
  const [onPresentConnectModal] = useModal(<ConnectModal login={login} />);
  const [onPresentConnectModal1] = useModal(<BlankConnectModal />);
  const [onPresentAccountModal] = useModal(<AccountModal account={account || ""} logout={logout} />);
  return { onPresentConnectModal, onPresentAccountModal, onPresentConnectModal1 };
};

export default useWalletModal;
