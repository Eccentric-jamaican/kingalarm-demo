"use client";

import { Button } from "@/components/ui/button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
    const sectionRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!sectionRef.current || !contentRef.current) return;

        gsap.from(contentRef.current.children, {
            y: 40,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 75%",
            }
        });

    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="bg-neutral-900 py-24 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div ref={contentRef} className="mx-auto max-w-3xl text-center">
                    <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
                        Need more information?
                    </h2>
                    <p className="mb-8 text-lg text-gray-400 md:text-xl">
                        Our experts are ready to discuss your specific security requirements
                    </p>
                    <Button className="px-8 py-6 text-lg font-bold">
                        Contact
                    </Button>
                </div>
            </div>
        </section>
    );
}