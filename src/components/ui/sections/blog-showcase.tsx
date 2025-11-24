"use client";

import { ArrowRight, ArrowUpRight, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function BlogShowcase() {
    return (
        <section className="bg-black py-24 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid gap-6 lg:grid-cols-3 lg:grid-rows-[auto_1fr_1fr]">

                    {/* 1. Header Section (Spans 2 columns) */}
                    <div className="lg:col-span-2 flex flex-col justify-center items-start p-6 md:p-10">
                        <h2 className="text-4xl font-serif font-medium tracking-tight md:text-6xl mb-6">
                            See our moves <br />
                            <span className="italic">in action</span>
                        </h2>
                        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between w-full">
                            <p className="text-gray-400 max-w-md text-sm md:text-base">
                                Proactive security. Intelligent monitoring. At KingAlarm, we combine cutting-edge technology with human expertise to keep you safe.
                            </p>
                            <Button size="icon" className="rounded-none h-12 w-12 bg-[#0F06AD] hover:bg-[#0F06AD]/90 text-white border-0 transition-colors group">
                                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </div>
                    </div>

                    {/* 2. Case Study Card (Tall, Right Column) */}
                    <div className="lg:col-start-3 lg:row-span-2 relative group overflow-hidden bg-[#0F06AD] min-h-[500px] lg:min-h-0">
                        <div className="absolute inset-0 z-10 flex flex-col p-8">
                            <span className="text-xs font-bold tracking-wider uppercase mb-4">Case Study</span>
                            <h3 className="text-2xl md:text-3xl font-medium leading-tight mb-6">
                                Securing Jamaica's Financial Sector: A comprehensive overhaul of banking security protocols
                            </h3>
                            <Button variant="secondary" className="w-max mt-auto bg-white text-black hover:bg-gray-200 rounded-none group">
                                Read the case study <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </div>
                        {/* Image at bottom/background */}
                        <div className="absolute inset-0 top-1/3 mt-12">
                            <Image
                                src="/benefits-section/benefit-security-survey.png" // Placeholder
                                alt="Case Study"
                                fill
                                className="object-cover object-top opacity-80 group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0F06AD] via-transparent to-transparent" />
                        </div>
                    </div>

                    {/* 3. Feature Card 1 (Tech & AI) */}
                    <Link href="#" className="group relative overflow-hidden aspect-square lg:aspect-auto min-h-[300px]">
                        <Image
                            src="/service-electronic-systems.png" // Placeholder
                            alt="Smart Security"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                        <div className="absolute inset-0 p-6 flex flex-col justify-end">
                            <span className="text-xs font-bold tracking-wider uppercase mb-2">Smart Security</span>
                            <h3 className="text-xl font-medium leading-tight group-hover:underline decoration-1 underline-offset-4">
                                AI-powered surveillance: The future of home protection <ArrowUpRight className="inline h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </h3>
                        </div>
                    </Link>

                    {/* 4. Blog Post Card (Health/Watch) */}
                    <Link href="#" className="group relative overflow-hidden bg-blue-600 aspect-square lg:aspect-auto min-h-[300px]">
                        <Image
                            src="/benefits-section/benefit-strategic-coverage.png" // Placeholder
                            alt="Safety Tips"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105 mix-blend-overlay opacity-60"
                        />
                        <div className="absolute inset-0 p-6 flex flex-col justify-end">
                            <span className="text-xs font-bold tracking-wider uppercase mb-2">Safety Tips</span>
                            <h3 className="text-xl font-medium leading-tight group-hover:underline decoration-1 underline-offset-4">
                                5 essential steps to secure your home before traveling <ArrowUpRight className="inline h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </h3>
                        </div>
                    </Link>

                    {/* 5. Feature Card 2 (Interview) */}
                    <Link href="#" className="group relative overflow-hidden aspect-square lg:aspect-auto min-h-[300px]">
                        <Image
                            src="/testimonial-section/testimonial-michael.png" // Using the generated headshot
                            alt="Expert Advice"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute inset-0 p-6 flex flex-col justify-end">
                            <span className="text-xs font-bold tracking-wider uppercase mb-2">Expert Advice</span>
                            <h3 className="text-xl font-medium leading-tight group-hover:underline decoration-1 underline-offset-4">
                                "Security is a feeling": A conversation with our Head of Operations <ArrowUpRight className="inline h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </h3>
                        </div>
                    </Link>

                    {/* 6. Feature Card 3 (Survey) */}
                    <Link href="#" className="group relative overflow-hidden aspect-square lg:aspect-auto min-h-[300px]">
                        <Image
                            src="/benefits-section/benefit-home-benefits.png" // Placeholder
                            alt="Community"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                        <div className="absolute inset-0 p-6 flex flex-col justify-end">
                            <span className="text-xs font-bold tracking-wider uppercase mb-2">Community</span>
                            <h3 className="text-xl font-medium leading-tight group-hover:underline decoration-1 underline-offset-4">
                                KingAlarm Community Watch: Strengthening neighborhood safety together <ArrowUpRight className="inline h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </h3>
                        </div>
                    </Link>

                    {/* 7. Newsletter Card */}
                    <div className="bg-[#1a1a1a] p-8 flex flex-col justify-center">
                        <h3 className="text-lg font-medium mb-2">
                            Subscribe to KingAlarm Security Briefs for the latest safety updates.
                        </h3>
                        <div className="flex gap-2 mt-4 mb-6">
                            <Input
                                type="email"
                                placeholder="Email address"
                                className="bg-white text-black border-0 focus-visible:ring-0 rounded-none"
                            />
                            <Button size="icon" className="bg-[#00A3E0] hover:bg-[#008bc0] rounded-none group">
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </div>

                        <div className="relative flex items-center py-2">
                            <div className="flex-grow border-t border-gray-700"></div>
                            <span className="flex-shrink-0 mx-4 text-gray-500 text-xs uppercase">Or continue with</span>
                            <div className="flex-grow border-t border-gray-700"></div>
                        </div>

                        <div className="grid grid-cols-3 gap-2 mt-4">
                            <Button variant="outline" className="bg-transparent border-gray-600 hover:bg-white/10 text-white text-xs h-10 rounded-none">
                                Apple
                            </Button>
                            <Button variant="outline" className="bg-transparent border-gray-600 hover:bg-white/10 text-white text-xs h-10 rounded-none">
                                Google
                            </Button>
                            <Button variant="outline" className="bg-transparent border-gray-600 hover:bg-white/10 text-white text-xs h-10 rounded-none">
                                <Linkedin className="h-3 w-3 mr-1" /> LinkedIn
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}