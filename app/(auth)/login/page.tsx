'use client';

import { useActionState } from 'react';
import { signIn } from '@/app/actions/auth';
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

export default function LoginPage() {
    const [state, loginAction, pending] = useActionState(signIn, {
        message: '',
    });
    return (
        <div className="flex min-h-screen items-center justify-center">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle className="text-center text-2xl font-bold">
                        Login
                    </CardTitle>
                    <CardDescription className="text-center">
                        Enter your credentials to access your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form action={loginAction}>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label
                                    htmlFor="email"
                                    className="text-sm leading-none font-medium"
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
                        </div>
                        <Button
                            className="mt-6 w-full"
                            type="submit"
                            disabled={pending}
                        >
                            Sign In
                        </Button>
                        <p>{state?.message}</p>
                    </form>
                </CardContent>
                <CardFooter className="flex flex-col space-y-2">
                    <Link
                        href="/forgot-password"
                        className="text-sm text-blue-600 hover:underline"
                    >
                        Forgot your password?
                    </Link>
                    <div className="text-sm text-gray-600">
                        Don&apos;t have an account?{' '}
                        <Link
                            href="/signup"
                            className="text-blue-600 hover:underline"
                        >
                            Sign up
                        </Link>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}
