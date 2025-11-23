"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Stats() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const leftColRef = useRef<HTMLDivElement>(null);
    const statsGridRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!sectionRef.current || !contentRef.current) return;

        const mm = gsap.matchMedia();

        mm.add({
            isMobile: "(max-width: 767px)",
            isDesktop: "(min-width: 768px)",
        }, (context) => {
            const { isMobile } = context.conditions as { isMobile: boolean };
            const initialSize = isMobile ? "60%" : "20%";
            const finalSize = isMobile ? "6000%" : "4000%";

            // Animate mask size for zoom effect
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "+=150%", // Pin for 1.5 screen heights
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1,
                }
            });

            // Start with small mask and zoom out to reveal
            tl.fromTo(sectionRef.current,
                {
                    maskSize: initialSize,
                    WebkitMaskSize: initialSize,
                },
                {
                    maskSize: finalSize, // Expand enough to cover screen
                    WebkitMaskSize: finalSize,
                    duration: 1,
                    ease: "power2.inOut"
                }
            );
        });

        // Content animations triggered after mask opens
        if (leftColRef.current && statsGridRef.current) {
            gsap.from(leftColRef.current.children, {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: contentRef.current,
                    start: "top 40%", // Start animation when content is visible
                }
            });

            const statCards = statsGridRef.current.querySelectorAll('.stat-card');
            gsap.from(statCards, {
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: contentRef.current,
                    start: "top 40%",
                }
            });
        }

    }, { scope: sectionRef });

    return (
        <div
            ref={sectionRef}
            className="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden"
            style={{
                maskImage: "url('/logo-light.svg')",
                WebkitMaskImage: "url('/logo-light.svg')",
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
                maskPosition: "center",
                WebkitMaskPosition: "center",
                maskSize: "20%", // Initial size (will be overridden by GSAP)
                WebkitMaskSize: "20%",
            }}
        >
            <div ref={contentRef} className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Left Column - Text Content */}
                    <div ref={leftColRef} className="flex flex-col justify-center space-y-6">
                        <span className="text-sm font-medium text-white">Our Impact</span>
                        <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl text-white">
                            Leading security across the Caribbean
                        </h2>
                        <p className="text-lg text-white">
                            As Jamaica's largest electronic security company, we've built trust through innovation, reliability, and unwavering commitment to protecting what matters most.
                        </p>
                    </div>

                    {/* Right Column - Stats Grid */}
                    <div ref={statsGridRef} className="grid gap-4 sm:grid-cols-2">
                        <StatCard
                            heading="Years of experience"
                            value={25}
                            description="Protecting Jamaica and the Caribbean since 2000"
                            suffix=""
                        />
                        <StatCard
                            heading="Locations protected"
                            value={12000}
                            description="Providing security services across the region"
                            suffix="+"
                        />
                        <StatCard
                            heading="24/7 monitoring"
                            value={11000}
                            description="Locations with round-the-clock armed response"
                            suffix="+"
                        />
                        <StatCard
                            heading="Security professionals"
                            value={3000}
                            description="Dedicated officers committed to your safety"
                            suffix="+"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

function StatCard({
    heading,
    value,
    description,
    suffix = "%",
}: {
    heading: string;
    value: number;
    description: string;
    suffix?: string;
}) {
    const numberRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!numberRef.current) return;

        gsap.fromTo(numberRef.current,
            { innerText: 0 },
            {
                innerText: value,
                duration: 2,
                ease: "power2.out",
                snap: { innerText: 1 }, // Snap to integer values
                scrollTrigger: {
                    trigger: numberRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                },
                onUpdate: function () {
                    if (numberRef.current) {
                        const currentValue = Math.ceil(this.targets()[0].innerText);
                        const formattedValue = currentValue.toLocaleString();
                        numberRef.current.innerText = formattedValue + suffix;
                    }
                }
            }
        );
    }, { scope: numberRef });

    return (
        <div className="flex flex-col justify-between p-6 stat-card">
            <h3 className="mb-4 text-xl font-bold md:text-2xl text-white">{heading}</h3>
            <div>
                <div ref={numberRef} className="mb-3 text-4xl font-bold tracking-tighter md:text-5xl text-white">
                    0{suffix}
                </div>
                <p className="text-sm text-white">{description}</p>
            </div>
        </div>
    );
}