'use client';

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative h-[90vh] w-full overflow-hidden bg-black">
            <Image
                src="/hero-image.png"
                alt="Hero Background"
                fill
                className="object-cover opacity-50"
                priority
            />
            <div className="container relative z-10 flex h-full flex-col justify-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl space-y-6">
                    <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
                        Security that never sleeps, protection without compromise
                    </h1>
                    <p className="max-w-2xl text-lg text-gray-300 sm:text-xl">
                        When danger lurks, KingAlarm stands ready. Our central monitoring
                        center watches continuously, transforming potential threats into
                        moments of absolute safety.
                    </p>
                    <div className="flex gap-4">
                        <Button>
                            Secure now
                        </Button>
                        <Button
                            variant="outline"
                            className="text-black border-white hover:bg-gray-200"
                        >
                            Our approach
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
