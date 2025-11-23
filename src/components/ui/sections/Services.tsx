"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Image as ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
    {
        id: "monitoring",
        tabLabel: "Monitoring hub",
        label: "Surveillance",
        title: "24/7 Eyes on your assets",
        description:
            "Our state-of-the-art monitoring center never blinks. We use advanced AI analytics to detect anomalies before they become threats.",
    },
    {
        id: "response",
        tabLabel: "Response team",
        label: "Action",
        title: "Rapid deployment force",
        description:
            "When an alarm triggers, our tactical response teams are dispatched immediately, ensuring that help arrives when it matters most.",
    },
    {
        id: "risk",
        tabLabel: "Risk evaluation",
        label: "Analysis",
        title: "Proactive threat assessment",
        description:
            "We don't just react; we predict. Our experts analyze your environment to identify vulnerabilities and fortify your defenses.",
    },
    {
        id: "system",
        tabLabel: "System design",
        label: "Engineering",
        title: "Custom security architecture",
        description:
            "Every facility is unique. We design bespoke security systems that integrate seamlessly with your operations and infrastructure.",
    },
    {
        id: "guard",
        tabLabel: "Guard services",
        label: "Guard",
        title: "Comprehensive protection for critical environments",
        description:
            "We transform potential vulnerabilities into fortified security landscapes. Our approach integrates human expertise with technological precision.",
    },
    {
        id: "threat",
        tabLabel: "Threat analysis",
        label: "Intelligence",
        title: "Data-driven security insights",
        description:
            "Leveraging global threat intelligence to keep your security measures ahead of emerging risks and evolving criminal tactics.",
    },
];

export default function Services() {
    const [activeTab, setActiveTab] = useState(services[4].id); // Default to "Guard services" as in design

    const activeService = services.find((s) => s.id === activeTab) || services[0];

    return (
        <section className="bg-black py-24 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mb-16 text-center">
                    <span className="mb-4 block text-sm font-medium text-gray-400">
                        Shield
                    </span>
                    <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
                        Security solutions that protect
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-gray-400">
                        Precision-engineered protection for every environment. Our services
                        adapt to the unique challenges of modern security landscapes.
                    </p>
                </div>

                {/* Interactive Card */}
                <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                    {/* Tabs Navigation */}
                    <div className="flex overflow-x-auto border-b border-white/10 scrollbar-hide">
                        {services.map((service) => (
                            <button
                                key={service.id}
                                onClick={() => setActiveTab(service.id)}
                                className={cn(
                                    "flex-shrink-0 px-6 py-4 text-sm font-bold transition-colors hover:bg-white/5",
                                    activeTab === service.id
                                        ? "bg-white/10 text-white"
                                        : "text-gray-400 hover:text-white"
                                )}
                            >
                                {service.tabLabel}
                            </button>
                        ))}
                    </div>

                    {/* Content Area */}
                    <div className="grid gap-8 p-8 lg:grid-cols-2 lg:gap-12 lg:p-12">
                        {/* Image Placeholder */}
                        <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-white/10 lg:aspect-auto lg:h-full">
                            <div className="absolute inset-0 flex items-center justify-center text-white/20">
                                <ImageIcon className="h-24 w-24" />
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="flex flex-col justify-center space-y-6">
                            <span className="text-sm font-bold text-gray-400">
                                {activeService.label}
                            </span>
                            <h3 className="text-3xl font-bold leading-tight md:text-4xl">
                                {activeService.title}
                            </h3>
                            <p className="text-lg text-gray-400 leading-relaxed">
                                {activeService.description}
                            </p>
                            <div className="flex gap-4 pt-4">
                                <Button
                                    variant="outline"
                                    className="rounded-full border-white/20 bg-transparent px-6 text-white hover:bg-white/10"
                                >
                                    Explore
                                </Button>
                                <Button
                                    variant="ghost"
                                    className="group px-0 text-white hover:bg-transparent hover:text-gray-300"
                                >
                                    Details{" "}
                                    <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}