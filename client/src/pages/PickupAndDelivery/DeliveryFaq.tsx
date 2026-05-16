import React, {useState} from 'react';
import DeliveryQA from "./DeliveryQA.tsx";

interface DeliveryFaqProps {

}

const faqs = [
    {
        question: "What days do you pick up and deliver?",
        answer: "We pick up Tuesdays and Wednesdays, and deliver Thursdays and Fridays — so your clothes are back in your closet before the weekend."
    },
    {
        question: "Do I get a bag?",
        answer: "You sure do. We'll bring you a custom weatherproof bag with your very first delivery — on us."
    },
    {
        question: "Do you serve apartments and senior living communities?",
        answer: "Absolutely. We work with apartment complexes and senior homes all across North DFW. Some buildings prefer we drop off through a receptionist or front desk — just [give us a call] and we'll work out the details together."
    },
    {
        question: "What kinds of clothes can I send?",
        answer: "Just about anything you wear — from everyday button-downs to ties, dresses, suits, and even wedding gowns. For larger or more delicate pieces (think gowns or heirlooms), we'll give you a quick call to talk through pricing before we start."
    },
    {
        question: "Is pickup and delivery really free?",
        answer: "Yep — free on any order $25 or more. Smaller orders are welcome too; they're just charged a flat $25 to cover the round trip."
    },
    {
        question: "How does payment work?",
        answer: "We keep a credit card on file and only charge it once your clean clothes are back at your door. No surprises, no upfront fees."
    },
    {
        question: "Can I reschedule?",
        answer: "Of course — life happens. You can reschedule anytime through our portal, or [give us a call] and we'll take care of it."
    },
    {
        question: "Do you run on holidays?",
        answer: "We work most weeks of the year, with two exceptions: Thanksgiving week and Christmas week. If your regular pickup or delivery falls on a holiday, we may reach out to find a better day."
    }
];

const DeliveryFaq: React.FC<DeliveryFaqProps> = ({}) => {

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className={"bg-white px-4 pt-8"}>
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
    );
};

export default DeliveryFaq;