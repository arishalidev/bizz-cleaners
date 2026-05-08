import React from 'react';
import {FaCheckCircle} from "react-icons/fa";

interface BulletProps {
    children: React.ReactNode
}

const Bullet: React.FC<BulletProps> = ({children}) => {
    return (
        <span className={"inline-flex items-center gap-3"}> <FaCheckCircle className={"text-primary-500"}/>{children}</span>
    );
};

export default Bullet;