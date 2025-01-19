import React, { useState } from "react";
import { assets } from "../assets/assets";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "Can I change my plan later?",
      answer: "Yes, you can change your plan at any time through your account settings.",
    },
    {
      question: "What is your cancellation policy?",
      answer: "You can cancel at any time, and your subscription will stop at the end of your current billing cycle.",
    },
    {
      question: "Can other info be added to an invoice?",
      answer: "Yes, you can customize your invoice information through the settings.",
    },
    {
      question: "How does billing work?",
      answer: "Billing is done monthly or annually, depending on the plan you choose.",
    },
    {
      question: "How do I change my account email?",
      answer: "You can update your account email in your profile settings.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-semibold text-center mb-4">
        Frequently asked questions
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Everything you need to know about the product and billing.
      </p>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b pb-4"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between w-full text-left text-gray-900 font-medium text-lg focus:outline-none"
            >
              {faq.question}
              <span>{activeIndex === index ? "−" : "+"}</span>
            </button>
            {activeIndex === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>

      {/* Support Section */}
      <div className="mt-12 p-6 bg-gray-100 rounded-lg text-center">
        <div className="flex justify-center mb-4">
          <img
            src={assets.image_img}
            alt="Support Team"
            className="h-10 w-auto rounded-full"
          />
        </div>
        <h3 className="text-lg font-semibold mb-2">Still have questions?</h3>
        <p className="text-sm text-gray-600 mb-4">
          Can’t find the answer you’re looking for? Please chat to our friendly team.
        </p>
        <button className="bg-red-500 text-white px-4 py-2 rounded-md">
          Get in touch
        </button>
      </div>
    </div>
  );
};

export default FAQ;
