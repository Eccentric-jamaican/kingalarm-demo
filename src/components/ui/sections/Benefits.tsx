"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight, Image as ImageIcon } from "lucide-react";

export default function Benefits() {
    return (
        <section className="bg-black py-24 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
                    {/* Left Column - Sticky Content */}
                    <div className="relative">
                        <div className="sticky top-24 flex flex-col space-y-8">
                            <span className="text-sm font-medium text-gray-400">Tagline</span>
                            <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
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

                            {/* Feature Four Block */}
                            <div className="pt-8">
                                <h3 className="mb-2 text-xl font-bold md:text-2xl">04 Feature four</h3>
                                <p className="text-gray-400">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Suspendisse varius enim in eros elementum tristique.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Scrolling Images */}
                    <div className="flex flex-col gap-8">
                        <div className="aspect-square w-full rounded-2xl bg-white/10 flex items-center justify-center">
                            <ImageIcon className="h-24 w-24 text-white/20" />
                        </div>
                        <div className="aspect-square w-full rounded-2xl bg-white/10 flex items-center justify-center">
                            <ImageIcon className="h-24 w-24 text-white/20" />
                        </div>
                        <div className="aspect-square w-full rounded-2xl bg-white/10 flex items-center justify-center">
                            <ImageIcon className="h-24 w-24 text-white/20" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}