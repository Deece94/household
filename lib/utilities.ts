import { clsx, type ClassValue } from 'clsx';
import { FirebaseError } from 'firebase/app';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function getErrorMessage(error: unknown) {
    if (error instanceof Error) return error.message;
    return String(error);
}

export function getFbErrorCode(error: unknown) {
    if (error instanceof FirebaseError) return error.code;
    return '';
}
