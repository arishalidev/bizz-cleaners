import React, {useState} from 'react';
import QASection from "./QASection.tsx";
import Headline from "../../../components/Headline.tsx";

interface DeliveryFaqProps {

}

const faqs = [
    {
        question: "How does dry cleaning work?",
        answer: "Dry cleaning uses specialized cleaning solutions instead of water to clean garments. This process helps protect fabrics that may be damaged by traditional washing."
    },
    {
        question: "Does dry cleaning remove stains?",
        answer: "Many stains can be successfully treated through professional dry cleaning. Results depend on the type of stain, fabric, and how long the stain has been present."
    },
    {
        question: "How long does dry cleaning take?",
        answer: "Most orders are ready the next business day. We also offer same-day dry cleaning on qualifying items dropped off before 9:00 AM."
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