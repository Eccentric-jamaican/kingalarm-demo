"use client";

import { Button } from "@/components/ui/button";
import { Activity, ChevronRight, Eye, Flame, ShieldAlert } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
    const sectionRef = useRef<HTMLElement>(null);
    const leftColRef = useRef<HTMLDivElement>(null);
    const rightColRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!sectionRef.current || !leftColRef.current || !rightColRef.current) return;

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

        // Animate feature items with stagger
        const featureItems = rightColRef.current.querySelectorAll('.feature-item');
        gsap.from(featureItems, {
            x: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
                trigger: rightColRef.current,
                start: "top 70%",
            }
        });

        // Animate glowing line
        const line = rightColRef.current.querySelector('.glowing-line');
        gsap.fromTo(line, 
            { height: "0%" },
            {
                height: "100%",
                ease: "none",
                scrollTrigger: {
                    trigger: rightColRef.current,
                    start: "top center",
                    end: "bottom center",
                    scrub: true,
                }
            }
        );

    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="bg-black py-24 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
                    {/* Left Column */}
                    <div ref={leftColRef} className="flex flex-col justify-center space-y-8">
                        <span className="text-sm font-medium text-gray-400">Services</span>
                        <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                            Total Security Solutions
                        </h2>
                        <div>
                            <Button className="group">
                                Learn More
                                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </div>
                    </div>

                    {/* Right Column - Feature List */}
                    <div ref={rightColRef} className="relative space-y-12">
                        {/* Vertical connecting line */}
                        <div className="absolute left-[20px] top-4 bottom-4 w-px bg-white/20 md:left-[24px]">
                            <div className="glowing-line absolute top-0 left-0 w-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.8)]" />
                        </div>

                        <FeatureItem
                            icon={<ShieldAlert className="h-6 w-6 md:h-8 md:w-8" />}
                            title="Intrusion Detection"
                            description="Custom-designed systems detecting unauthorized entry via magnetic contacts, vibration sensors, and motion detectors while you are away or asleep."
                        />
                        <FeatureItem
                            icon={<Activity className="h-6 w-6 md:h-8 md:w-8" />}
                            title="Panic & Medical Alerts"
                            description="Immediate emergency response via wireless panic buttons and hardwired medical alert systems strategically located for your safety."
                        />
                        <FeatureItem
                            icon={<Eye className="h-6 w-6 md:h-8 md:w-8" />}
                            title="Video Verification"
                            description="Real-time video alerts sent to our 24hr monitoring center for immediate assessment and rapid response to potential threats."
                        />
                        <FeatureItem
                            icon={<Flame className="h-6 w-6 md:h-8 md:w-8" />}
                            title="Fire & Smoke Safety"
                            description="Automatic detection systems that trigger sirens and simultaneously alert our Central Monitoring Centre to protect life and property."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function FeatureItem({
    icon,
    title,
    description,
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
}) {
    return (
        <div className="relative flex gap-6 md:gap-8 feature-item">
            <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center bg-black md:h-12 md:w-12">
                {icon}
            </div>
            <div className="space-y-2 pt-1">
                <h3 className="text-xl font-bold md:text-2xl">{title}</h3>
                <p className="max-w-md text-gray-400 leading-relaxed">{description}</p>
            </div>
        </div>
    );
}
