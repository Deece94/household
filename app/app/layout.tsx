import { ReactNode } from 'react';
import { TopBar } from '@/components/ui/top-bar';

export default async function AppLayout({ children }: { children: ReactNode }) {
    const user = null;
    return (
        <div className="flex min-h-screen flex-col">
            <TopBar user={user} />
            <main className="container mx-auto flex-grow px-4 py-8 sm:px-6 lg:px-8">
                {children}
            </main>
        </div>
    );
}
