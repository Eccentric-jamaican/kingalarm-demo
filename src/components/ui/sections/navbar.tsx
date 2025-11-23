"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
    return (
        <nav className="w-full bg-white dark:bg-black">
            <div className="flex h-20 w-full items-center justify-between pl-4 sm:pl-6 lg:pl-8 pr-0">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 mr-8">
                    <Image
                        src="/logo-light.svg"
                        alt="KingAlarm"
                        width={200}
                        height={60}
                        className="h-12 w-auto object-contain"
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex">
                    <NavigationMenu>
                        <NavigationMenuList className="gap-4">
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link href="/about" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                                        About us
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                        <ListItem title="Alarm Systems" href="/products/alarms">
                                            Advanced intrusion detection systems.
                                        </ListItem>
                                        <ListItem title="Video Surveillance" href="/products/cameras">
                                            HD cameras with AI-powered analytics.
                                        </ListItem>
                                        <ListItem title="Access Control" href="/products/access">
                                            Smart locks and entry management.
                                        </ListItem>
                                        <ListItem title="Fire & Safety" href="/products/fire">
                                            Comprehensive fire detection systems.
                                        </ListItem>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                        <ListItem title="Home Security" href="/solutions/home">
                                            Protect your family with 24/7 monitoring.
                                        </ListItem>
                                        <ListItem title="Business Security" href="/solutions/business">
                                            Advanced protection for commercial properties.
                                        </ListItem>
                                        <ListItem title="Enterprise Solutions" href="/solutions/enterprise">
                                            Scalable security for large organizations.
                                        </ListItem>
                                        <ListItem title="Smart Automation" href="/solutions/automation">
                                            Integrated home and office automation.
                                        </ListItem>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link href="/contact" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                                        Contact US
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                        <ListItem title="Blog" href="/resources/blog">
                                            Latest news and security insights.
                                        </ListItem>
                                        <ListItem title="Support Center" href="/resources/support">
                                            Get help with your system.
                                        </ListItem>
                                        <ListItem title="Documentation" href="/resources/docs">
                                            User guides and manuals.
                                        </ListItem>
                                        <ListItem title="Case Studies" href="/resources/cases">
                                            Success stories from our clients.
                                        </ListItem>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link href="#faq" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                                        FAQs
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                {/* Right Side Actions */}
                <div className="flex items-center gap-6 self-stretch">
                    <button className="text-muted-foreground hover:text-foreground hidden sm:block">
                        <Search className="h-5 w-5" />
                    </button>
                    <Button className="hidden sm:flex h-full rounded-none px-8">
                        Start building
                    </Button>

                    {/* Mobile Menu */}
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <div className="flex flex-col gap-4 mt-8">
                                <Link href="/about" className="text-lg font-medium">About us</Link>
                                <Link href="/products" className="text-lg font-medium">Products</Link>
                                <Link href="/solutions" className="text-lg font-medium">Solutions</Link>
                                <Link href="/contact" className="text-lg font-medium">Contact US</Link>
                                <Link href="/resources" className="text-lg font-medium">Resources</Link>
                                <Link href="#faq" className="text-lg font-medium">FAQs</Link>
                                <div className="flex items-center gap-2 mt-4">
                                    <Search className="h-5 w-5" />
                                    <span className="text-lg">Search</span>
                                </div>
                                <Button className="w-full mt-4">Start building</Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-primary focus:bg-accent focus:text-primary",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";
