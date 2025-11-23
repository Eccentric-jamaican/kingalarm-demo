"use client";

import { Star, Box, Hexagon } from "lucide-react";
import Image from "next/image";

export default function Testimonials() {
    return (
        <section className="bg-black py-24 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
                        Trusted voices
                    </h2>
                    <p className="text-lg text-gray-400">
                        Real stories from those who depend on unwavering protection
                    </p>
                </div>

                {/* Main Card */}
                <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                    <div className="grid gap-8 md:grid-cols-2">
                        {/* Image Placeholder */}
                        <div className="relative min-h-[300px] w-full bg-white/10 md:h-full">
                            <div className="absolute inset-0 flex items-center justify-center text-white/20">
                                <svg
                                    className="h-20 w-20"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1}
                                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    />
                                </svg>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex flex-col justify-center p-8 md:p-12">
                            {/* Rating */}
                            <div className="mb-6 flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 fill-white text-white" />
                                ))}
                            </div>

                            {/* Quote */}
                            <blockquote className="mb-8">
                                <p className="text-xl font-bold leading-relaxed md:text-2xl">
                                    "KingAlarm transformed our security infrastructure from
                                    vulnerable to impenetrable. Their response is like a
                                    well-oiled machine."
                                </p>
                            </blockquote>

                            {/* Author */}
                            <div>
                                <div className="font-bold">Michael Roberts</div>
                                <div className="text-sm text-gray-400">
                                    Security director, National Bank
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Partner Logos Footer */}
                    <div className="grid grid-cols-2 border-t border-white/10 md:grid-cols-4">
                        <div className="flex items-center justify-center border-r border-white/10 py-6">
                            <div className="flex items-center gap-2 text-lg font-bold">
                                <Box className="h-6 w-6" /> Webflow
                            </div>
                        </div>
                        <div className="flex items-center justify-center border-r border-white/10 py-6">
                            <div className="flex items-center gap-2 text-lg font-bold">
                                <Hexagon className="h-6 w-6" /> Relume
                            </div>
                        </div>
                        <div className="flex items-center justify-center border-r border-white/10 py-6">
                            <div className="flex items-center gap-2 text-lg font-bold">
                                <Box className="h-6 w-6" /> Webflow
                            </div>
                        </div>
                        <div className="flex items-center justify-center py-6">
                            <div className="flex items-center gap-2 text-lg font-bold">
                                <Hexagon className="h-6 w-6" /> Relume
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}