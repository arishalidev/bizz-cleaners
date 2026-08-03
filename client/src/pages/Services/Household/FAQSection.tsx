import React, {useState} from 'react';
import QASection from "./QASection.tsx";
import Headline from "../../../components/Headline.tsx";

interface DeliveryFaqProps {

}

const faqs = [
    {
        question: "Can you clean down and feather comforters?",
        answer: "Yes. Different types of comforters are processed according to their materials and filling to help achieve the best results."
    },
    {
        question: "Can comforters fit in your machines?",
        answer: "Yes. Our oversized equipment is designed to handle larger household items that may not fit comfortably in a home washer and dryer."
    },
    {
        question: "Do you offer pickup and delivery for household items?",
        answer: "Absolutely. Many customers use our pickup and delivery service for comforters, blankets, and other bulky household items."
    }
];

const FAQSection: React.FC<DeliveryFaqProps> = ({}) => {

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (

        <div className={"-mt-8 md:-mt-16"}>
            <div className={"responsive-px responsive-py limit-size-5xl pt-8"}>

                <div className={"mb-3"}>
                    <Headline>Frequently asked questions</Headline>
                </div>

                {faqs.map((faq, i) =>
                    <div key={i}>
                        <hr className={"text-primary-500"}/>
                        <QASection
                            question={faq.question}
                            answer={faq.answer}
                            expanded={i === openIndex}
                            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default FAQSection;