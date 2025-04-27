import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does TurinIQ work?",
    answer: "You provide us with customer-facing information (product lists, return policies, pricing, etc.), and we create an AI assistant that handles all customer-facing communication across your channels (sales + support).",
  },
  {
    question: "What are the benefits for businesses?",
    answer: "• AI handles common queries, reducing load on your team.\n• Human-in-the-loop: unresolved queries get escalated as tickets.\n• Insights from sentiment analysis help your team prioritize smarter.\n• Save money and improve response times.",
  },
  {
    question: "Is the AI customizable for different industries or workflows?",
    answer: "Yes, it is adaptable to different industries, but we currently do not support advanced custom workflows.",
  },
  {
    question: "Does this replace or support human agents?",
    answer: "It augments them — the AI handles routine queries, while edge cases are escalated to humans.",
  },
  {
    question: "Can it support multiple languages?",
    answer: "Not yet — multilingual support is on our roadmap for future updates.",
  },


  {
    question: "Where is my data stored and how is it secured?",
    answer: "All data is securely stored in Singapore using AWS and Azure infrastructure.",
  },
  {
    question: "Is customer data used to train the AI?",
    answer: "Yes, but only to improve your own assistant — data is not shared or used elsewhere.",
  },
  {
    question: "What is the integration process like?",
    answer: "• Answer a short onboarding questionnaire.\n• Share files like product catalogs, service guides, etc.\n• We deploy your assistant to WhatsApp, Instagram, Facebook Messenger, and your website.",
  },
  {
    question: "How long does it take to go live?",
    answer: "Typically 10–20 minutes once we have the required info.",
  },
  {
    question: "What’s the pricing model?",
    answer: "It will be subscription-based, but pricing details will be announced post-seed round.",
  },
  {
    question: "Are there any upfront costs?",
    answer: "No upfront costs.",
  },
  {
    question: "Is there a trial or beta available?",
    answer: "Yes! You can either:\n• Join our beta program for early access.\n• Or try a 2-week free trial.",
  },
  {
    question: "What kind of support do you provide?",
    answer: "• 24/7 setup and onboarding support.\n• 48-hour resolution window for business-facing tickets.",
  },
  {
    question: "Will this work with my existing tools (like CRM or ticketing systems)?",
    answer: "We’re building integrations — for now, please reach out to info@turiniq.com with your use case.",
  },
];
  
const ITEMS_PER_PAGE = 5;

function FAQ() {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(faqs.length / ITEMS_PER_PAGE);

  const paginatedFaqs = faqs.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

    return (
      <div className="w-full h-full p-10 md:p-10 my-10">
        <div className="max-w-xl mx-auto flex flex-col items-center justify-center gap-2 mb-5">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance pb-1">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="max-w-5xl mx-auto items-start text-start py-4">
        {paginatedFaqs.map((faq, index) => (
          <AccordionItem key={faq.question} value={`item-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>
              {faq.answer.split("\n").map((line, idx) => (
                <div key={idx}>{line}</div>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
{/* Dots Pagination */}
<div className="flex justify-center items-center gap-2 mt-6">
        {Array.from({ length: totalPages }).map((_, pageIndex) => (
          <button
            key={pageIndex}
            onClick={() => setCurrentPage(pageIndex)}
            className={`h-3 w-3 rounded-full ${
              currentPage === pageIndex
                ? "bg-blue-500"
                : "bg-neutral-400"
            } transition-all`}
          />
        ))}
      </div>
      </div>
    )
  }
  
  export default FAQ
  