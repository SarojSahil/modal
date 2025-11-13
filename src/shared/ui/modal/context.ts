import { createContext, useContext } from "react";

export type ModalContextType = {
    open: boolean;
    close: () => void
}

const defaultValue: ModalContextType = {
    close: () => {},
    open: false
}

export const ModalContext = createContext<ModalContextType>(defaultValue);

export const useModal = () => useContext(ModalContext);