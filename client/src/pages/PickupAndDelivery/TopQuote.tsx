import React from 'react';
import {FaQuoteRight} from "react-icons/fa";

interface TopQuoteProps {

}

const TopQuote: React.FC<TopQuoteProps> =({}) => {
    return (
        <div className={"px-4 py-4 text-xl relative"}>
            <FaQuoteRight className={"absolute right-4 top-3 text-primary-600"}/>
            <i>Love the home pickup and delivery. Always on time.</i> - Deshia H.
            <hr className={"text-primary-500 mt-3"}/>
        </div>
    );
};

export default TopQuote;