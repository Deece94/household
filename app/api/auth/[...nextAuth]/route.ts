import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
        }),
    ],
    callbacks: {
        async signIn({ account, profile }) {
            if (account?.provider === 'google') {
                // @ts-expect-error - TS doesn't know what data is on the profile object
                return profile?.email_verified;
            }
            return true; // Do different verification for other providers that don't have `email_verified`
        },
    },
});
