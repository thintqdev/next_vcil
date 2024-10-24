import { useState } from "react";

export function FAQ() {
    const faqs = [
        {
            question: "How does the billing work?",
            answer:
                "Springerdata offers a variety of billing options, including monthly and annual subscription plans, as well as pay-as-you-go pricing for certain services. Payment is typically made through a credit card or other secure online payment method.",
        },
        {
            question: "Can I get a refund for my subscription?",
            answer:
                "We offer a 30-day money-back guarantee for most of its subscription plans. If you are not satisfied with your subscription within the first 30 days, you can request a full refund. Refunds for subscriptions that have been active for longer than 30 days may be considered on a case-by-case basis.",
        },
        {
            question: "How do I cancel my subscription?",
            answer:
                "To cancel your subscription, you can log in to your account and navigate to the subscription management page. From there, you should be able to cancel your subscription and stop future billing.",
        },
        {
            question: "Is there a free trial?",
            answer:
                "We offer a free trial of our software for a limited time. During the trial period, you will have access to a limited set of features and functionality, but you will not be charged.",
        },
        {
            question: "How do I contact support?",
            answer:
                "If you need help with our platform or have any other questions, you can contact the company's support team by submitting a support request through the website or by emailing support@ourwebsite.com.",
        },
        {
            question: "Do you offer any discounts or promotions?",
            answer:
                "We may offer discounts or promotions from time to time. To stay up-to-date on the latest deals and special offers, you can sign up for the company's newsletter or follow it on social media.",
        },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="mt-0 bg-white lg:mt-20">
            <div className="mx-auto"></div>
            <div className="text-black">
                <div
                    className="
              max-w-9xl
              mx-auto
              flex
              flex-col
              items-center
              justify-center
              px-5
            "
                >
                    <div className="mb-6 mr-0 w-full py-4 text-center lg:w-2/3">
                        <h2 className="mb-4 text-4xl font-bold sm:text-5xl">
                            Frequently Asked Questions
                        </h2>
                        <div className="mx-auto w-full max-w-2xl">
                            {faqs.map((faq, index) => (
                                <div key={index} className="mb-4 border-b border-gray-200">
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="w-full py-4 text-left text-lg font-medium text-gray-800 hover:text-blue-600 focus:outline-none"
                                    >
                                        {faq.question}
                                    </button>
                                    {openIndex === index && (
                                        <div className="px-4 pb-4 text-gray-600 transition duration-300 ease-in-out text-justify">
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
