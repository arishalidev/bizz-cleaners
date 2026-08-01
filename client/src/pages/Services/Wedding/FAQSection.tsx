import React, {useState} from 'react';
import QASection from "./QASection.tsx";
import Headline from "../../../components/Headline.tsx";

interface DeliveryFaqProps {

}

const faqs = [
    {
        question: "What types of leather garments do you clean?",
        answer: "We clean leather jackets, coats, pants, skirts, and other leather outerwear."
    },
    {
        question: "Why use a professional leather clothes cleaner?  ",
        answer: "Leather requires different cleaning methods than traditional laundry or dry cleaning. Professional cleaning helps protect the look and feel of the material."
    },
    {
        question: "How often should leather be cleaned?",
        answer: "That depends on how often it's worn. Many customers bring their leather garments in once they start noticing dirt, buildup, or signs of wear."
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