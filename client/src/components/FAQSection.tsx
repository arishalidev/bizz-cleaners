import React, {useState} from 'react';
import {IoIosArrowDown} from "react-icons/io";
import Body from "./Body.tsx";
import Headline from "./Headline.tsx";

export interface Faq {
    question: string;
    answer: string;
}

interface FAQSectionProps {
    faqs: Faq[];
    className?: string;
    children?: React.ReactNode;
}

const FAQSection: React.FC<FAQSectionProps> = ({faqs, className = "-mt-8 md:-mt-16", children}) => {

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (

        <div className={className}>
            <div className={"responsive-px responsive-py limit-size-5xl pt-8"}>

                <div className={"mb-3"}>
                    <Headline>Frequently asked questions</Headline>
                </div>

                {faqs.map((faq, i) =>
                    <div key={i}>
                        <hr className={"text-primary-500"}/>
                        <button className={`w-full py-2 hover:bg-neutral-50 ${i === openIndex && "bg-neutral-50"}`}
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}>
                            <span className={"flex items-center"}>
                                <p className={`text-lg/7.5 md:text-xl/8 text-left w-fit`}>{faq.question}</p>
                                <span className={"flex-1"}></span>
                                <IoIosArrowDown
                                    className={`text-lg ${i === openIndex && "rotate-180"} transition-transform duration-500`}/>
                                <span className={"w-4"}></span>
                            </span>
                        </button>
                        <div
                            className={`overflow-hidden transition-all duration-500 ${i === openIndex ? "max-h-96 pt-4 pb-8" : "max-h-0"}`}>
                            <Body>{faq.answer}</Body>
                        </div>
                    </div>
                )}

                {children}
            </div>
        </div>
    );
};

export default FAQSection;
