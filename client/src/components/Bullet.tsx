import React from 'react';
import {FaCheckCircle} from "react-icons/fa";
import Body from "./Body.tsx";

interface BulletProps {
    children: React.ReactNode
}

const Bullet: React.FC<BulletProps> = ({children}) => {
    return (
        <Body className={"inline-flex items-center gap-3"}> <FaCheckCircle className={"text-primary-500"}/>{children}</Body>
    );
};

export default Bullet;