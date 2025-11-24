"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "How fast is your response?",
        answer:
            "Our central monitoring center responds within seconds. Trained operators dispatch tactical teams immediately upon detecting potential threats. We measure response time in moments, not minutes.",
    },
    {
        question: "What about system maintenance?",
        answer:
            "24/7 maintenance is standard. Our technicians provide immediate support, ensuring your security infrastructure remains resilient and fully operational at all times.",
    },
    {
        question: "Do you serve different industries?",
        answer:
            "We protect government agencies, financial institutions, international missions, and private enterprises. Our solutions adapt to each sector's unique security landscape.",
    },
    {
        question: "Can you handle complex environments?",
        answer:
            "We specialize in navigating intricate security landscapes. Our integrated approach combines technological systems with human intelligence for comprehensive protection.",
    },
    {
        question: "What technology do you use?",
        answer:
            "We deploy cutting-edge electronic surveillance systems integrated with human expertise. Advanced sensors, AI-driven analytics, and real-time communication platforms form our technological backbone.",
    },
    {
        question: "Are your teams professionally trained?",
        answer:
            "Every team member undergoes rigorous training. Our operators and response personnel are selected for precision, calm under pressure, and strategic thinking.",
    },
    {
        question: "Are installations complex?",
        answer:
            "Our team ensures swift, seamless installations with minimal disruption. We design custom solutions tailored to your specific operational environment and security requirements.",
    },
    {
        question: "How do you ensure data privacy?",
        answer:
            "We implement strict protocols protecting client information. Encrypted communication channels and secure data management are fundamental to our operational standards.",
    },
    {
        question: "How comprehensive are assessments?",
        answer:
            "We conduct thorough risk evaluations examining physical infrastructure, technological vulnerabilities, and potential threat vectors. Our assessments are comprehensive and actionable.",
    },
    {
        question: "What makes you different?",
        answer:
            "We don't just monitor. We anticipate, strategize, and resolve. Our holistic approach transforms security from a reactive to a proactive discipline.",
    },
];

export default function FAQ() {
    const midPoint = Math.ceil(faqs.length / 2);
    const leftFaqs = faqs.slice(0, midPoint);
    const rightFaqs = faqs.slice(midPoint);

    return (
        <section id="faq" className="bg-black py-24 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
                        FAQs
                    </h2>
                    <p className="text-lg text-gray-400">
                        Answers to critical questions about our security solutions and
                        operational approach
                    </p>
                </div>

                <div className="mx-auto max-w-5xl grid gap-12 md:grid-cols-2">
                    {/* Left Column */}
                    <Accordion type="single" collapsible className="flex flex-col gap-4">
                        {leftFaqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="border-white/10"
                            >
                                <AccordionTrigger className="text-lg font-bold hover:no-underline hover:text-primary">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-400 text-base leading-relaxed">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                    {/* Right Column */}
                    <Accordion type="single" collapsible className="flex flex-col gap-4">
                        {rightFaqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index + midPoint}`}
                                className="border-white/10"
                            >
                                <AccordionTrigger className="text-lg font-bold hover:no-underline hover:text-primary">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-400 text-base leading-relaxed">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}