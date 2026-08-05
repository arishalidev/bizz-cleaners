import React from 'react';
import SecondaryHero from "../../components/SecondaryHero.tsx";

interface ServicesProps {

}

const Services: React.FC<ServicesProps> = ({}) => {
    return (
        <div>
            <SecondaryHero header={"Specialty cleaning services"}/>
        </div>
    );
};

export default Services;