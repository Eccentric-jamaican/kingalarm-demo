
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
                maskSize: "20%",
                WebkitMaskSize: "20%",
            },
            { 
                maskSize: "4000%", // Expand enough to cover screen
                WebkitMaskSize: "4000%",
                duration: 1,
                ease: "power2.inOut"
            }
        );

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
                maskSize: "20%", // Initial size
                WebkitMaskSize: "20%",
            }}
        >
            <div ref={contentRef} className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Left Column - Text Content */}
                    <div ref={leftColRef} className="flex flex-col justify-center space-y-6">
                        <span className="text-sm font-medium text-gray-400">Tagline</span>
                        <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl text-primary">
                            Medium length section heading goes here
                        </h2>
                        <p className="text-base text-gray-400">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            varius enim in eros elementum tristique. Duis cursus, mi quis
                            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
                            vitae erat.
                        </p>
                        <div className="flex gap-4">
                            <Button variant="outline" className="border-white/20 bg-transparent text-white hover:bg-white/10">
                                Button
                            </Button>
                            <Button variant="ghost" className="group text-white hover:bg-transparent hover:text-gray-300">
                                Button <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </div>
                    </div>

                    {/* Right Column - Stats Grid */}
                    <div ref={statsGridRef} className="grid gap-4 sm:grid-cols-2">
                        <StatCard
                            heading="Short heading goes here"
                            value={50}
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        />
                        <StatCard
                            heading="Short heading goes here"
                            value={75}
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        />
                        <StatCard
                            heading="Short heading goes here"
                            value={90}
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        />
                        <StatCard
                            heading="Short heading goes here"
                            value={100}
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
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
}: {
    heading: string;
    value: number;
    description: string;
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
                onUpdate: function() {
                    if (numberRef.current) {
                        numberRef.current.innerText = Math.ceil(this.targets()[0].innerText) + "%";
                    }
                }
            }
        );
    }, { scope: numberRef });

    return (
        <div className="flex flex-col justify-between rounded-xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10 stat-card">
            <h3 className="mb-4 text-xl font-bold md:text-2xl text-primary">{heading}</h3>
            <div>
                <div ref={numberRef} className="mb-3 text-4xl font-bold tracking-tighter md:text-5xl text-primary">
                    0%
                </div>
                <p className="text-sm text-gray-400">{description}</p>
            </div>
        </div>
    );
}