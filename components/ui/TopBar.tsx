'use client';

import { ChevronDown, Home, User } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

// Mock user type
type User = {
    name: string;
    email: string;
};

// Mock sub-apps
const subApps = [
    { name: 'App 1', path: '/app1' },
    { name: 'App 2', path: '/app2' },
    { name: 'App 3', path: '/app3' },
];

export function TopBar({ user }: { user: boolean | null }) {
    return (
        <div className="bg-background border-b">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <Link
                            href="/"
                            className="text-primary text-2xl font-bold"
                        >
                            My App
                        </Link>
                        <Link href="/">
                            <Button variant="ghost" size="icon">
                                <Home className="h-5 w-5" />
                                <span className="sr-only">Home</span>
                            </Button>
                        </Link>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline">
                                    Sub Apps
                                    <ChevronDown className="ml-2 h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                {subApps.map((app) => (
                                    <DropdownMenuItem key={app.path}>
                                        <Link
                                            href={app.path}
                                            className="w-full"
                                        >
                                            {app.name}
                                        </Link>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <div className="flex items-center">
                        <ThemeToggle />
                        <UserButton user={user} />
                    </div>
                </div>
            </div>
        </div>
    );
}

const UserButton = ({ user }: { user: boolean | null }) => {
    const handleLogout = () => {
        // Mock logout
        // setUser(null);
    };

    return user ? (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="relative h-8 w-8 rounded-full"
                >
                    <User className="h-5 w-5" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                        {/* <p className="text-sm leading-none font-medium">
                            {user.name}
                        </p>
                        <p className="text-muted-foreground text-xs leading-none">
                            {user.email}
                        </p> */}
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                    Log out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    ) : (
        <Link href="/login">Log in</Link>
    );
};
