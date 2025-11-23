"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function Stats() {
    return (
        <section className="bg-black py-24 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
                    {/* Left Column - Text Content */}
                    <div className="flex flex-col justify-center space-y-8">
                        <span className="text-sm font-medium text-gray-400">Tagline</span>
                        <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                            Medium length section heading goes here
                        </h2>
                        <p className="text-lg text-gray-400">
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
                    <div className="grid gap-6 sm:grid-cols-2">
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
        <div className="flex flex-col justify-between rounded-xl border border-white/10 bg-white/5 p-8 transition-colors hover:bg-white/10">
            <h3 className="mb-8 text-sm font-bold">{heading}</h3>
            <div>
                <div className="mb-4 text-6xl font-bold tracking-tighter md:text-7xl">
                    {value}
                </div>
                <p className="text-sm text-gray-400">{description}</p>
            </div>
        </div>
    );
}