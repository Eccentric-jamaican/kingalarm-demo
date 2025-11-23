"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Image as ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
    {
        id: "electronic",
        tabLabel: "Electronic Systems",
        label: "Protection",
        title: "Comprehensive electronic protection",
        description:
            "Integration of Intrusion Detection, Fire/Smoke safety, CCTV surveillance, and Access Control systems for complete facility management.",
    },
    {
        id: "response",
        tabLabel: "Armed Response",
        label: "Security",
        title: "Rapid response and mobile protection",
        description:
            "Beyond alarm response, we offer Roadside Assistance, Escort Services, and Party Patrols to ensure safety wherever you are.",
    },
    {
        id: "monitoring",
        tabLabel: "Monitoring",
        label: "Vigilance",
        title: "24/7 Central Station vigilance",
        description:
            "State-of-the-art monitoring for burglary, fire, and medical emergencies, coordinated with immediate ambulance and police dispatch.",
    },
    {
        id: "cit",
        tabLabel: "Cash Services",
        label: "Logistics",
        title: "Secure armed courier logistics",
        description:
            "Professional Cash-in-Transit services for safe bank deposits and payroll management, reducing operational risk.",
    },
    {
        id: "tracking",
        tabLabel: "Tracking",
        label: "Technology",
        title: "Real-time asset and personal tracking",
        description:
            "Advanced GPS solutions for vehicle fleet management and personal safety monitoring to keep you connected and secure.",
    },
    {
        id: "specialized",
        tabLabel: "Specialized",
        label: "Intelligence",
        title: "Expert investigations and consulting",
        description:
            "Professional risk assessments, polygraph services, and investigative support to address complex security challenges.",
    },
];

export default function Services() {
    const [activeTab, setActiveTab] = useState(services[0].id);

    const activeService = services.find((s) => s.id === activeTab) || services[0];

    return (
        <section className="bg-black py-24 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mb-16 text-center">
                    <span className="mb-4 block text-sm font-medium text-gray-400">
                        Services
                    </span>
                    <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
                        We offer a wide range of security solutions to protect your home and business
                    </h2>
                </div>

                {/* Interactive Card */}
                <div className="overflow-hidden border border-white/10 bg-white/5">
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
                        <div className="relative aspect-square w-full overflow-hidden bg-white/10 lg:aspect-auto lg:h-full">
                            <div className="absolute inset-0 flex items-center justify-center text-white/20">
                                <ImageIcon className="h-24 w-24" />
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="flex flex-col justify-center space-y-6">
                            <span className="text-sm font-bold text-gray-400">
                                {activeService.label}
                            </span>
                            <h3 className="text-xl font-bold leading-tight md:text-2xl">
                                {activeService.title}
                            </h3>
                            <p className="text-lg text-gray-400 leading-relaxed">
                                {activeService.description}
                            </p>
                            <div className="flex gap-4 pt-4">
                                <Button className="px-6">
                                    Explore
                                </Button>
                                <Button className="group px-0">
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