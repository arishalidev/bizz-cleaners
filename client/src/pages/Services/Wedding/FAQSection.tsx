import React, {useState} from 'react';
import QASection from "./QASection.tsx";
import Headline from "../../../components/Headline.tsx";

interface DeliveryFaqProps {

}

const faqs = [
    {
        question: "Should I clean my wedding dress after the wedding?",
        answer: "Yes. Many stains are invisible at first and become more noticeable over time. Professional cleaning helps remove those stains before they permanently discolor the fabric."
    },
    {
        question: "Can you clean dresses with lace, beading, and embroidery?",
        answer: "Absolutely. We regularly clean gowns with delicate fabrics and detailed embellishments, using cleaning methods selected specifically for each dress."
    },
    {
        question: "How much does it cost to dry clean a wedding dress?",
        answer: "Pricing varies from gown to gown. Bring your dress in for an inspection and we'll provide a quote before any work begins."
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