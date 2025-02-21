import Link from 'next/link';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/Card';

const apps = [
    {
        title: 'Shared Shopping List',
        description:
            'Collaborate on grocery lists with family or roommates in real-time.',
        href: '/app/shopping-list',
    },
    {
        title: 'Chores Roster',
        description:
            'Organize and track household chores with a simple roster system.',
        href: '/app/chores-roster',
    },
    {
        title: 'Advanced Chores Roster',
        description:
            'A more detailed chore management system with additional features and customization options.',
        href: '/app/advanced-chores-roster',
    },
    {
        title: 'Weekly Calendar',
        description:
            'Plan and view your week at a glance with this easy-to-use calendar app.',
        href: '/app/weekly-calendar',
    },
];

export default function App() {
    return (
        <>
            <h1 className="mb-6 text-center text-3xl font-bold">
                Welcome to households
            </h1>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {apps.map((app, index) => (
                    <Card key={index}>
                        <CardHeader>
                            <CardTitle>{app.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>{app.description}</CardDescription>
                            <Link
                                href={app.href}
                                className="bg-primary hover:bg-primary/90 focus:ring-primary mt-4 inline-flex items-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white shadow-sm focus:ring-2 focus:ring-offset-2 focus:outline-none"
                            >
                                Open App
                            </Link>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </>
    );
}
