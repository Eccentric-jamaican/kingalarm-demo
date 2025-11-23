"use client";

import { Button } from "@/components/ui/button";
import HeroGrid from "@/components/ui/modules/hero-grid";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!heroRef.current || !gridRef.current || !contentRef.current) return;

        const tl = gsap.timeline({
            defaults: { ease: "power3.out" }
        });

        // Animate grid fade in
        tl.from(gridRef.current, {
            opacity: 0,
            duration: 1.2,
            delay: 0.3
        });

        // Animate content elements
        tl.from(contentRef.current.children, {
            y: 40,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15
        }, "-=0.6");

    }, { scope: heroRef });

    return (
        <section ref={heroRef} className="relative h-[90vh] w-full overflow-hidden bg-black">
            {/* 3D Grid Background Effect - Right Side */}
            <div className="absolute right-0 top-0 h-full w-full md:w-[60%] overflow-hidden perspective-[1000px]">
                <div
                    ref={gridRef}
                    className="absolute inset-0 origin-top [mask-image:linear-gradient(to_bottom,transparent,black_40%,black_80%,transparent)]"
                    style={{
                        transform: "rotateX(60deg) rotateZ(-20deg) scale(2) translateY(-20%)",
                    }}
                >
                    <HeroGrid />
                </div>
            </div>

            <div className="container relative z-10 flex h-full items-end px-4 pb-20 sm:px-6 lg:px-8">
                <div ref={contentRef} className="max-w-3xl space-y-6">
                    {/* H1 */}
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl leading-tight">
                        The Obvious Choice <br />
                        <span className="text-gray-400">for Total Security</span>
                    </h1>

                    {/* H2 / Paragraph */}
                    <p className="max-w-xl text-base text-gray-400 sm:text-lg leading-relaxed">
                        From 24/7 monitoring to rapid armed response, we provide the most proficient protection for your home and business.
                    </p>

                    {/* Buttons */}
                    <div className="flex gap-4 pt-2">
                        <Button className="px-6">
                            Secure now
                        </Button>
                        <Button
                            variant="outline"
                            className="px-6 border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
                        >
                            Our approach
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
