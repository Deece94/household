'use server';

import { auth } from '@/lib/firebase';
import { createSession, deleteSession } from '@/lib/session';
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut as signoutUser,
} from 'firebase/auth';
import { redirect } from 'next/navigation';

const provider = new GoogleAuthProvider();

export const signIn = async (
    prevState: { message: string },
    formData: FormData,
) => {
    const email = formData.get('email');
    const password = formData.get('password');

    if (!email || !password) {
        return { message: 'All fields are required' };
    }

    try {
        const userCredential = await signInWithEmailAndPassword(
            auth,
            email as string,
            password as string,
        );

        const user = userCredential.user;

        await createSession(user.uid);

        redirect('/');

        return { message: 'Sign in successful' };
    } catch (error) {
        console.error('Sign in error: ', error.code, error.message);

        return {
            message: 'Invalid credentials',
        };
    }
};

export const signUp = async (
    prevState: { message: string },
    formData: FormData,
) => {
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');

    if (!name || !email || !password) {
        return { message: 'All fields are required' };
    }

    if (password !== confirmPassword) {
        return { message: 'Passwords do not match' };
    }

    try {
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email as string,
            password as string,
        );

        // Signed up
        const user = userCredential.user;

        await createSession(user.uid);

        redirect('/');
        return { message: 'User created successfully' };
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log('Sign up error: ', errorCode, errorMessage);

        switch (errorCode) {
            case 'auth/email-already-in-use':
            case 'auth/invalid-email':
            case 'auth/weak-password':
            case 'auth/invalid-password':
                return {
                    message: errorMessage
                        .replace('Firebase:', '')
                        .replace(`(${errorCode})`, '')
                        .replace('.', '')
                        .trim(),
                };
            default:
                return { message: 'Unknown error' };
        }
    }
};

export const signOut = async () => {
    try {
        await signoutUser(auth);
        await deleteSession();

        redirect('/login');
    } catch (error) {
        console.error('Sign out error: ', error.code, error.message);
    }
};

// export const signInWithGoogle = async () => {

//     signInWithPopup(auth, provider)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     // The signed-in user info.
//     const user = result.user;
//     // IdP data available using getAdditionalUserInfo(result)
//     // ...
//   }).catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });

// }
