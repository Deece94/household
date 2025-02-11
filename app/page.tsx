import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-black">
            <header className="flex h-14 items-center px-4 lg:px-6">
                <Link className="flex items-center justify-center" href="/">
                    <span className="text-2xl font-bold">Households</span>
                </Link>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                    <Link
                        className="text-sm font-medium underline-offset-4 hover:underline"
                        href="/login"
                    >
                        Log In
                    </Link>
                    <Link
                        className="text-sm font-medium underline-offset-4 hover:underline"
                        href="/signup"
                    >
                        Sign Up
                    </Link>
                </nav>
            </header>
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                                    Welcome to Households
                                </h1>
                                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                                    Simplify your home management. Track chores,
                                    expenses, and more with ease.
                                </p>
                            </div>
                            <div className="space-x-4">
                                <Button asChild>
                                    <Link href="/signup">Get Started</Link>
                                </Button>
                                <Button asChild variant="outline">
                                    <Link href="/login">Log In</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full bg-gray-100 py-12 md:py-24 lg:py-32 dark:bg-gray-900">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
                            <div className="flex flex-col items-center space-y-2 rounded-lg border-gray-200 p-4">
                                <svg
                                    className="text-primary h-10 w-10"
                                    fill="none"
                                    height="24"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                    <polyline points="9 22 9 12 15 12 15 22" />
                                </svg>
                                <h2 className="text-xl font-bold">
                                    Manage Your Home
                                </h2>
                                <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                                    Keep track of all your household tasks and
                                    responsibilities in one place.
                                </p>
                            </div>
                            <div className="flex flex-col items-center space-y-2 rounded-lg border-gray-200 p-4">
                                <svg
                                    className="text-primary h-10 w-10"
                                    fill="none"
                                    height="24"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                                <h2 className="text-xl font-bold">
                                    Family Collaboration
                                </h2>
                                <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                                    Easily assign tasks and share
                                    responsibilities with family members.
                                </p>
                            </div>
                            <div className="flex flex-col items-center space-y-2 rounded-lg border-gray-200 p-4">
                                <svg
                                    className="text-primary h-10 w-10"
                                    fill="none"
                                    height="24"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M12 2v20" />
                                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                </svg>
                                <h2 className="text-xl font-bold">
                                    Budget Tracking
                                </h2>
                                <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                                    Monitor household expenses and manage your
                                    family budget efficiently.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                    © 2024 Households. All rights reserved.
                </p>
                <nav className="flex gap-4 sm:ml-auto sm:gap-6">
                    <Link
                        className="text-xs underline-offset-4 hover:underline"
                        href="#"
                    >
                        Terms of Service
                    </Link>
                    <Link
                        className="text-xs underline-offset-4 hover:underline"
                        href="#"
                    >
                        Privacy
                    </Link>
                </nav>
            </footer>
        </div>
    );
}
