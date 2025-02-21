import 'server-only';

import { cache } from 'react';
import { decrypt } from '@/lib/session';
import {
    collection,
    doc,
    getDoc,
    getDocs,
    query,
    where,
} from 'firebase/firestore';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { db } from './firebase';

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

    try {
        const usersRef = collection(db, 'users');
        const q = query(usersRef, where('email', '==', session.email));

        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
            console.log('No user found');
            return null;
        }

        return querySnapshot.docs[0].data();
    } catch (error) {
        console.log('Failed to fetch user');
        return null;
    }

    return true;
});
