"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Stats() {
    const sectionRef = useRef<HTMLElement>(null);
    const leftColRef = useRef<HTMLDivElement>(null);
    const statsGridRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!sectionRef.current || !leftColRef.current || !statsGridRef.current) return;

        // Animate left column
        gsap.from(leftColRef.current.children, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
            }
        });

        // Animate stat cards with stagger
        const statCards = statsGridRef.current.querySelectorAll('.stat-card');
        gsap.from(statCards, {
            y: 40,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: statsGridRef.current,
                start: "top 70%",
            }
        });

    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="bg-black py-16 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Left Column - Text Content */}
                    <div ref={leftColRef} className="flex flex-col justify-center space-y-6">
                        <span className="text-sm font-medium text-gray-400">Tagline</span>
                        <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
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
                            value="50%"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        />
                        <StatCard
                            heading="Short heading goes here"
                            value="50%"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        />
                        <StatCard
                            heading="Short heading goes here"
                            value="50%"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        />
                        <StatCard
                            heading="Short heading goes here"
                            value="50%"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function StatCard({
    heading,
    value,
    description,
}: {
    heading: string;
    value: string;
    description: string;
}) {
    return (
        <div className="flex flex-col justify-between rounded-xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10 stat-card">
            <h3 className="mb-4 text-xl font-bold md:text-2xl">{heading}</h3>
            <div>
                <div className="mb-3 text-4xl font-bold tracking-tighter md:text-5xl">
                    {value}
                </div>
                <p className="text-sm text-gray-400">{description}</p>
            </div>
        </div>
    );
}