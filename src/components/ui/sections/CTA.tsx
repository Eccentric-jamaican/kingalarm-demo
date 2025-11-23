"use client";

import { Button } from "@/components/ui/button";

export default function CTA() {
    return (
        <section className="bg-neutral-900 py-24 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                        Need more information?
                    </h2>
                    <p className="mb-8 text-lg text-gray-400 md:text-xl">
                        Our experts are ready to discuss your specific security requirements
                    </p>
                    <Button className="px-8 py-6 text-lg font-bold">
                        Contact
                    </Button>
                </div>
            </div>
        </section>
    );
}