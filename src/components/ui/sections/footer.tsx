"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, X, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Top Section - Newsletter */}
                <div className="mb-16 grid gap-8 lg:grid-cols-2 lg:items-center">
                    <div>
                        <h3 className="mb-2 text-2xl font-bold">Updates</h3>
                        <p className="text-gray-400">KingAlarm stands ready, always watching</p>
                    </div>
                    <div className="flex flex-col gap-4 sm:flex-row">
                        <Input
                            type="email"
                            placeholder="Enter email"
                            className="bg-neutral-900 border-neutral-800 text-white placeholder:text-gray-500"
                        />
                        <Button className="shrink-0">
                            Join
                        </Button>
                    </div>
                </div>

                <p className="mb-12 text-sm text-gray-400">
                    We respect your privacy and handle data responsibly
                </p>

                {/* Main Footer Links */}
                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                    {/* Company */}
                    <div>
                        <h4 className="mb-4 font-bold">Company</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li><Link href="#" className="hover:text-primary transition-colors">About us</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Services</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Blog</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Contact</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="mb-4 font-bold">Services</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li><Link href="#" className="hover:text-primary transition-colors">About us</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Our approach</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Blog</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Contact</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
                        </ul>
                    </div>

                    {/* Solutions */}
                    <div>
                        <h4 className="mb-4 font-bold">Solutions</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li><Link href="#" className="hover:text-primary transition-colors">Monitoring hub</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Response team</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Risk evaluation</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">System design</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Guard services</Link></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="mb-4 font-bold">Resources</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li><Link href="#" className="hover:text-primary transition-colors">Service detail</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Security audits</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Technology</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">FAQ</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Support</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="mb-4 font-bold">Legal</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li><Link href="#" className="hover:text-primary transition-colors">Privacy policy</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Terms of service</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Security standards</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Data protection</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Compliance info</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Logo */}
                <div className="flex justify-center mb-16">
                    <Image
                        src="/logo-dark.svg"
                        alt="KingAlarm"
                        width={500}
                        height={158}
                        className="w-full max-w-2xl h-auto"
                    />
                </div>

                {/* Bottom Section */}
                <div className="border-t border-neutral-800 pt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                        <span>© 2025 KingAlarm. All rights reserved.</span>
                        <Link href="#" className="hover:text-primary transition-colors">Privacy policy</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Terms of service</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Cookies settings</Link>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-4">
                        <Link
                            href="https://www.facebook.com/KingAlarmJA/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-primary transition-colors"
                        >
                            <Facebook className="h-5 w-5" />
                        </Link>
                        <Link
                            href="https://www.instagram.com/kingalarmja/?hl=en"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-primary transition-colors"
                        >
                            <Instagram className="h-5 w-5" />
                        </Link>
                        <Link
                            href="https://wa.me/kingalarm"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-primary transition-colors"
                        >
                            <X className="h-5 w-5" />
                        </Link>
                        <Link
                            href="https://jm.linkedin.com/company/kingalarmja"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-primary transition-colors"
                        >
                            <Linkedin className="h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
