import 'server-only';

import { cache } from 'react';
import { decrypt } from '@/lib/session';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const verifySession = cache(async () => {
    const cookie = (await cookies()).get('session')?.value;
    const session = await decrypt(cookie);

    if (!session?.uuid) {
        redirect('/login');
    }

    return { isAuth: true, uuid: session.uuid };
});

export const getUser = cache(async () => {
    const session = await verifySession();
    if (!session) return null;

    return true;
});
