import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="flex h-screen w-full flex-col items-center justify-center bg-black text-white">
            <h1 className="text-9xl font-bold text-[#0F06AD]">404</h1>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Page not found</h2>
            <p className="mt-6 text-base leading-7 text-gray-400">Sorry, we couldn’t find the page you’re looking for.</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link href="/">
                    <Button className="bg-[#0F06AD] hover:bg-[#0F06AD]/90 text-white px-8 py-6 text-lg font-bold rounded-none">
                        Go back home
                    </Button>
                </Link>
            </div>
        </div>
    );
}
