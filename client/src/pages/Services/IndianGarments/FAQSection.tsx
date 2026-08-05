import React, {useState} from 'react';
import QASection from "./QASection.tsx";
import Headline from "../../../components/Headline.tsx";

interface DeliveryFaqProps {

}

const faqs = [
    {
        question: "Do you offer saree dry cleaning?",
        answer: "Yes. We regularly clean sarees made from silk and other delicate fabrics."
    },
    {
        question: "Can a lehenga be dry cleaned?",
        answer: "In many cases, yes. We'll inspect the garment first and determine the safest cleaning method based on the fabric and embellishments."
    },
    {
        question: "Can you clean garments with heavy embroidery or beadwork?",
        answer: "Absolutely. These are some of the most common garments we see, and we take extra care when cleaning and pressing them."
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
