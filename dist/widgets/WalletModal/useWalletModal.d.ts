import { Login } from "./types";
interface ReturnType {
    onPresentConnectModal: () => void;
    onPresentConnectModal1: () => void;
    onPresentAccountModal: () => void;
}
declare const useWalletModal: (login: Login, logout: () => void, account?: string | undefined) => ReturnType;
export default useWalletModal;
