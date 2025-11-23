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
        <nav className="w-full border-b bg-white dark:bg-black">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between pl-4 sm:pl-6 lg:pl-8 pr-0">
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
                                <NavigationMenuTrigger>Platform</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                        <li className="row-span-3">
                                            <NavigationMenuLink asChild>
                                                <a
                                                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                    href="/"
                                                >
                                                    <div className="mb-2 mt-4 text-lg font-medium">KingAlarm Platform</div>
                                                    <p className="text-sm leading-tight text-muted-foreground">
                                                        Comprehensive security solutions for your home and business.
                                                    </p>
                                                </a>
                                            </NavigationMenuLink>
                                        </li>
                                        <ListItem href="/docs" title="Introduction">
                                            Re-usable components built using Radix UI and Tailwind CSS.
                                        </ListItem>
                                        <ListItem href="/docs/installation" title="Installation">
                                            How to install dependencies and structure your app.
                                        </ListItem>
                                        <ListItem href="/docs/primitives/typography" title="Typography">
                                            Styles for headings, paragraphs, lists...etc
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
                                            Advanced protection for your commercial property.
                                        </ListItem>
                                        <ListItem title="Smart Automation" href="/solutions/automation">
                                            Control lights, locks, and thermostats remotely.
                                        </ListItem>
                                        <ListItem title="Video Monitoring" href="/solutions/video">
                                            HD cameras with cloud storage and AI detection.
                                        </ListItem>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Developers</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                        <ListItem title="API Documentation" href="/developers/api">
                                            Integrate KingAlarm with your own systems.
                                        </ListItem>
                                        <ListItem title="SDKs" href="/developers/sdks">
                                            Libraries for Python, Node.js, and more.
                                        </ListItem>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                        <ListItem title="Blog" href="/resources/blog">
                                            Latest news and security tips.
                                        </ListItem>
                                        <ListItem title="Support" href="/resources/support">
                                            Get help with your system.
                                        </ListItem>
                                    </ul>
                                </NavigationMenuContent>
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
                                <Link href="#" className="text-lg font-medium">Platform</Link>
                                <Link href="#" className="text-lg font-medium">Solutions</Link>
                                <Link href="#" className="text-lg font-medium">Developers</Link>
                                <Link href="#" className="text-lg font-medium">Resources</Link>
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
