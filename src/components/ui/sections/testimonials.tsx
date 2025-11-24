"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
    const sectionRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!sectionRef.current || !headerRef.current || !cardRef.current) return;

        // Animate header
        gsap.from(headerRef.current.children, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
            }
        });

        // Animate card
        gsap.from(cardRef.current, {
            x: -50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: cardRef.current,
                start: "top 70%",
            }
        });

    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="bg-black py-24 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div ref={headerRef} className="mb-16 text-center">
                    <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
                        Trusted voices
                    </h2>
                    <p className="text-lg text-gray-400">
                        Real stories from those who depend on unwavering protection
                    </p>
                </div>

                {/* Main Card */}
                <div ref={cardRef} className="mx-auto max-w-5xl overflow-hidden bg-white/5">
                    <div className="grid gap-8 md:grid-cols-2">
                        {/* Testimonial Image */}
                        <div className="relative min-h-[300px] w-full bg-white/10 md:h-full">
                            <Image
                                src="/testimonial-section/testimonial-michael.png"
                                alt="Michael Roberts, Security Director"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Content */}
                        <div className="flex flex-col justify-center p-8 md:p-12">
                            {/* Rating */}
                            <div className="mb-6 flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 fill-white text-white" />
                                ))}
                            </div>

                            {/* Quote */}
                            <blockquote className="mb-8">
                                <p className="text-xl font-bold leading-relaxed md:text-2xl">
                                    "KingAlarm transformed our security infrastructure from
                                    vulnerable to impenetrable. Their response is like a
                                    well-oiled machine."
                                </p>
                            </blockquote>

                            {/* Author */}
                            <div>
                                <div className="font-bold">Michael Roberts</div>
                                <div className="text-sm text-gray-400">
                                    Security director, National Bank
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Partner Logos Carousel */}
                    <div className="relative overflow-hidden border-b border-white/10 bg-white dark:bg-black">
                        <div className="flex animate-scroll hover:pause-animation">
                            {/* First set of logos */}
                            <div className="flex shrink-0">
                                <div className="flex items-center justify-center px-12 py-6">
                                    <Image
                                        src="/partner-logos/canada-logo.svg"
                                        alt="Canada Life"
                                        width={120}
                                        height={40}
                                        className="h-10 w-auto"
                                    />
                                </div>
                                <div className="flex items-center justify-center px-12 py-6">
                                    <Image
                                        src="/partner-logos/NCB-logo.svg"
                                        alt="NCB"
                                        width={120}
                                        height={40}
                                        className="h-10 w-auto"
                                    />
                                </div>
                                <div className="flex items-center justify-center px-12 py-6">
                                    <Image
                                        src="/partner-logos/canada-logo.svg"
                                        alt="Canada Life"
                                        width={120}
                                        height={40}
                                        className="h-10 w-auto"
                                    />
                                </div>
                                <div className="flex items-center justify-center px-12 py-6">
                                    <Image
                                        src="/partner-logos/NCB-logo.svg"
                                        alt="NCB"
                                        width={120}
                                        height={40}
                                        className="h-10 w-auto"
                                    />
                                </div>
                            </div>
                            {/* Duplicate set for seamless loop */}
                            <div className="flex shrink-0">
                                <div className="flex items-center justify-center px-12 py-6">
                                    <Image
                                        src="/partner-logos/canada-logo.svg"
                                        alt="Canada Life"
                                        width={120}
                                        height={40}
                                        className="h-10 w-auto"
                                    />
                                </div>
                                <div className="flex items-center justify-center px-12 py-6">
                                    <Image
                                        src="/partner-logos/NCB-logo.svg"
                                        alt="NCB"
                                        width={120}
                                        height={40}
                                        className="h-10 w-auto"
                                    />
                                </div>
                                <div className="flex items-center justify-center px-12 py-6">
                                    <Image
                                        src="/partner-logos/canada-logo.svg"
                                        alt="Canada Life"
                                        width={120}
                                        height={40}
                                        className="h-10 w-auto"
                                    />
                                </div>
                                <div className="flex items-center justify-center px-12 py-6">
                                    <Image
                                        src="/partner-logos/NCB-logo.svg"
                                        alt="NCB"
                                        width={120}
                                        height={40}
                                        className="h-10 w-auto"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}