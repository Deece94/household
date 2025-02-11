'use client';

import { useActionState } from 'react';
import { signUp } from '@/app/actions/auth';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';

export default function SignUpPage() {
    const [state, signUpAction, pending] = useActionState(signUp, {
        message: '',
    });

    return (
        <div className="flex min-h-screen items-center justify-center">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle className="text-center text-2xl font-bold">
                        Sign Up
                    </CardTitle>
                    <CardDescription className="text-center">
                        Create an account to get started
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form action={signUpAction}>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label
                                    htmlFor="name"
                                    className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Name
                                </label>
                                <Input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label
                                    htmlFor="email"
                                    className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Email
                                </label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label
                                    htmlFor="password"
                                    className="text-sm leading-none font-medium"
                                >
                                    Password
                                </label>
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label
                                    htmlFor="confirmPassword"
                                    className="text-sm leading-none font-medium"
                                >
                                    Confirm Password
                                </label>
                                <Input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    required
                                />
                            </div>
                        </div>
                        <Button
                            className="mt-6 w-full"
                            type="submit"
                            disabled={pending}
                        >
                            Create Account
                        </Button>
                        <p>{state?.message}</p>
                    </form>
                </CardContent>
                <CardFooter>
                    <div className="w-full text-center text-sm text-gray-600">
                        Already have an account?{' '}
                        <Link
                            href="/login"
                            className="text-blue-600 hover:underline"
                        >
                            Log in
                        </Link>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}
