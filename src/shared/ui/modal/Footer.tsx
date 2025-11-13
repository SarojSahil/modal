import type { ReactNode } from "react";

const Footer: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div className="flex justify-end gap-4">
            {children}
        </div>
    );
}

export default Footer;