import React, {useState} from 'react';
import DeliveryQA from "./DeliveryQA.tsx";
import Headline from "../../components/Headline.tsx";

interface DeliveryFaqProps {

}

const faqs = [
    {
        question: "How does pickup and delivery work?",
        answer: "Schedule a pickup online or through our app, leave your bag outside, and we'll handle the rest."
    },
    {
        question: "Do I need to be home?",
        answer: "No. Simply leave your garments in your Bizz Cleaners bag on pickup day."
    },
    {
        question: "How quickly will I get my clothes back?",
        answer: "Most pickup and delivery orders are returned within approximately 48 hours."
    },
    {
        question: "Is there a minimum order amount?",
        answer: "Yes. Pickup and delivery services have a $25 minimum order amount."
    },
    {
        question: "Can I schedule recurring pickups?",
        answer: "Absolutely. We can send a weekly text reminder, so you never have to remember pickup day."
    },
];

const DeliveryFaq: React.FC<DeliveryFaqProps> = ({}) => {

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (

        <div className={"-mt-4 md:-mt-8"}>
            <div className={"responsive-px responsive-py limit-size-5xl pt-8"}>

                <div className={"mb-3"}>
                    <Headline>Frequently asked questions</Headline>
                </div>

                {faqs.map((faq, i) =>
                    <div key={i}>
                        <hr className={"text-primary-500"}/>
                        <DeliveryQA
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

export default DeliveryFaq;