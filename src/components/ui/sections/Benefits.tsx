"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight, Image as ImageIcon } from "lucide-react";
import Image from "next/image";

interface BenefitCardProps {
    heading: string;
    description: string;
    imageSrc?: string;
    imageAlt?: string;
}

function BenefitCard({ heading, description, imageSrc, imageAlt }: BenefitCardProps) {
    return (
        <div className="flex flex-col gap-6">
            {imageSrc ? (
                <div className="aspect-square w-full overflow-hidden">
                    <Image
                        src={imageSrc}
                        alt={imageAlt || heading}
                        width={800}
                        height={800}
                        className="h-full w-full object-cover"
                    />
                </div>
            ) : (
                <div className="aspect-square w-full flex items-center justify-center">
                    <ImageIcon className="h-24 w-24 text-white/20" />
                </div>
            )}
            <div className="flex flex-col gap-3">
                <h3 className="text-2xl font-bold md:text-3xl">{heading}</h3>
                <p className="text-gray-400">{description}</p>
            </div>
        </div>
    );
}

export default function Benefits() {
    return (
        <section className="bg-black py-24 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
                    {/* Left Column - Sticky Content */}
                    <div className="relative">
                        <div className="sticky top-24 flex flex-col space-y-8">
                            <span className="text-sm font-medium text-gray-400">
                                Panic, Hold-Up & Medical Alert Protection
                            </span>
                            <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                                More than alarms. Complete peace of mind.
                            </h2>
                            <p className="text-lg text-gray-400">
                                KingAlarm combines free panic systems, rapid armed response, and added residential
                                services to keep you and your family protected in every emergency.
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Scrolling Cards */}
                    <div className="flex flex-col gap-8">
                        <BenefitCard
                            heading="Free panic alarm systems"
                            description="KingAlarm pioneered free panic alarm systems in Jamaica, making emergency protection accessible to thousands of families."
                        />
                        <BenefitCard
                            heading="Rapid emergency response"
                            description="High-speed radio transmission alerts KingAlarm's 24/7 Central Monitoring Centre in milliseconds, dispatching highly trained Armed Response Teams to your premises."
                        />
                        <BenefitCard
                            heading="Strategic coverage"
                            description="Wireless panic buttons can be placed strategically throughout your home and paired with a hardwired medical alert button for full coverage."
                        />
                        <BenefitCard
                            heading="Comprehensive home benefits"
                            description="Monitored customers also receive Roadside Assistance, Ambulance Response, Escort Services, and Party Patrol Services at no additional charge."
                        />
                        <BenefitCard
                            heading="No-obligation security survey"
                            description="Request a free security survey and get tailored advice from KingAlarm's experienced sales team on protecting your home and family."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}