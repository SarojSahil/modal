import { type ReactNode } from "react";

const Content: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div className="mb-6">
            {children}
        </div>
    );
}

export default Content;