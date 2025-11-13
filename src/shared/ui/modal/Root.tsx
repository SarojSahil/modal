import { useEffect, useState, type FC, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { ModalContext, type ModalContextType } from "./context";

const Root: FC<{ children: ReactNode } & ModalContextType> = ({ children, open, close }) => {

    const [visible, setVisible] = useState<boolean>(open);

    useEffect(() => {
        if (open) {
            setVisible(open);
        } 
        else if (!open && visible) {
            setTimeout(() => setVisible(open), 150)
        }
    }, [open]);

    return visible
        ?
        createPortal(
            <ModalContext.Provider value={{ open, close }}>
                <div onClick={close}
                    className="fixed inset-0 bg-black/60 flex items-center justify-center">
                    <div onClick={(e) => e.stopPropagation()}
                        className={`basis-sm grow-0 mx-2 bg-white p-4 rounded-md ${open ? "animate-slide-up" : "animate-slide-down"} `}>
                        {children}
                    </div>
                </div>
            </ModalContext.Provider>
            ,
            document.body
        )
        :
        null;
}

export default Root;