import type { ReactNode } from "react";

const Header: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <h2 className="text-lg font-medium mb-3">{children}</h2>
    );
}

export default Header;