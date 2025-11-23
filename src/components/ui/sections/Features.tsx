"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight, Radio, ScanFace, Shield, ShieldQuestion } from "lucide-react";

export default function Features() {
    return (
        <section className="bg-black py-24 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
                    {/* Left Column */}
                    <div className="flex flex-col justify-center space-y-8">
                        <span className="text-sm font-medium text-gray-400">Precision</span>
                        <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                            Comprehensive security designed for real-world challenges
                        </h2>
                        <div>
                            <Button className="group">
                                Learn More
                                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </div>
                    </div>

                    {/* Right Column - Feature List */}
                    <div className="relative space-y-12">
                        {/* Vertical connecting line */}
                        <div className="absolute left-[20px] top-4 bottom-4 w-px bg-white/20 md:left-[24px]" />

                        <FeatureItem
                            icon={<Radio className="h-6 w-6 md:h-8 md:w-8" />}
                            title="Perimeter defense"
                            description="Advanced surveillance technologies create an invisible shield that monitors and protects critical spaces with unblinking vigilance."
                        />
                        <FeatureItem
                            icon={<ScanFace className="h-6 w-6 md:h-8 md:w-8" />}
                            title="Tactical response"
                            description="Highly trained professionals move with calculated precision, neutralizing potential threats before they can escalate."
                        />
                        <FeatureItem
                            icon={<ShieldQuestion className="h-6 w-6 md:h-8 md:w-8" />}
                            title="Strategic Integration"
                            description="Intelligent systems communicate seamlessly, creating a unified security ecosystem that adapts to complex operational landscapes."
                        />
                        <FeatureItem
                            icon={<Shield className="h-6 w-6 md:h-8 md:w-8" />}
                            title="Rapid evaluation"
                            description="Immediate risk analysis and strategic planning ensure your security infrastructure remains resilient and proactively prepared."
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
        <div className="relative flex gap-6 md:gap-8">
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
