import React, { useState } from "react";
import "./Faq.scss";
const faq = [
  {
    id: 1,
    title: "Do you redesign existing websites?",
    answer:
      "Yes. We can redesign existing sites and retain your organization's style or give you a completely new look.",
    open: false,
  },
  {
    id: 2,
    title: "How many pages can I have on my website?",
    answer:
      "You can have as many pages as you'd like. In fact, the more the better from a search engine's point of view!",
    open: false,
  },
  {
    id: 3,
    title: "Will everyone see my website the same way?",
    answer:
      "Your visitors will see some things differently depending on their browser, screen resolution settings and their computers. We design sites with that in mind and preview them in several browsers and resolution settings before publishing",
    open: false,
  },
  {
    id: 4,
    title: "What kind of apps or websites have you designed before?",
    answer:
      "We have designed numerous apps and websites of a wide variety. These include dating apps, apps for the healthcare industry, enterprise solutions, food delivery apps, taxi booking apps and others. You can check out our portfolio.",
    open: false,
  },
  {
    id: 5,
    title: "How long will it take to develop my website including all things?",
    answer:
      "Mainly, it depends upon the type and size of your website that you want to develop. However, to know the exact timeline to develop your website, get in touch with our team, who will comprehend and analyze your requirements and provide an exact timeline for your project.",
    open: false,
  },
  {
    id: 6,
    title: "How long will it take to develop my website including all things?",
    answer:
      "Mainly, it depends upon the type and size of your website that you want to develop. However, to know the exact timeline to develop your website, get in touch with our team, who will comprehend and analyze your requirements and provide an exact timeline for your project.",
    open: false,
  },
  {
    id: 7,
    title: "How long will it take to develop my website including all things?",
    answer:
      "Mainly, it depends upon the type and size of your website that you want to develop. However, to know the exact timeline to develop your website, get in touch with our team, who will comprehend and analyze your requirements and provide an exact timeline for your project.",
    open: false,
  },
  {
    id: 8,
    title: "How long will it take to develop my website including all things?",
    answer:
      "Mainly, it depends upon the type and size of your website that you want to develop. However, to know the exact timeline to develop your website, get in touch with our team, who will comprehend and analyze your requirements and provide an exact timeline for your project.",
    open: false,
  },
  {
    id: 9,
    title: "How long will it take to develop my website including all things?",
    answer:
      "Mainly, it depends upon the type and size of your website that you want to develop. However, to know the exact timeline to develop your website, get in touch with our team, who will comprehend and analyze your requirements and provide an exact timeline for your project.",
    open: false,
  },
];

function FAQ() {
  const [faqs, setFaqs] = useState(faq);

  const toggleFAQ = (id) => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq) => (faq.id === id ? { ...faq, open: !faq.open } : faq))
    );
  };

  return (
    <div className="faq">
      {faqs.map((faq) => (
        <div key={faq.id} className="faq__item">
          <div className="faq__question" onClick={() => toggleFAQ(faq.id)}>
            <h2>{faq.title}</h2>
            <button>
              {faq.open ? (
                <img src="/icons/arrow-up.svg" alt="" />
              ) : (
                <img src="/icons/arrow-down.svg" alt="" />
              )}
            </button>
          </div>
          {faq.open && (
            <div className="faq__answer">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default FAQ;
