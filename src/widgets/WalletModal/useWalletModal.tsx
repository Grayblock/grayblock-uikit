import React from "react";
import { useModal } from "../Modal";
import ConnectModal from "./ConnectModal";
import AccountModal from "./AccountModal";
import { Login } from "./types";
import EmailModal from "./EmailModal";

interface ReturnType {
  onPresentConnectModal: () => void;
  onPresentAccountModal: () => void;
  onPresentEmailModal: () => void;
}

const useWalletModal = (login: Login, logout: () => void, account?: string): ReturnType => {
  const [onPresentConnectModal] = useModal(<ConnectModal login={login} />);
  const [onPresentAccountModal] = useModal(<AccountModal account={account || ""} logout={logout} />);
  const [onPresentEmailModal] = useModal(<EmailModal />);
  return { onPresentConnectModal, onPresentAccountModal, onPresentEmailModal };
};

export default useWalletModal;
