"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative h-[90vh] w-full overflow-hidden bg-black">
            {/* 3D Grid Background Effect - Right Side */}
            <div className="absolute right-0 top-0 h-full w-full md:w-[60%] overflow-hidden perspective-[1000px]">
                <div
                    className="absolute inset-0 origin-top bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:linear-gradient(to_bottom,transparent,black_40%,black_80%,transparent)]"
                    style={{
                        transform: "rotateX(60deg) rotateZ(-20deg) scale(2) translateY(-20%)",
                        opacity: 0.4
                    }}
                />
            </div>

            <div className="container relative z-10 flex h-full items-end px-4 pb-20 sm:px-6 lg:px-8">
                <div className="max-w-3xl space-y-6">
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
