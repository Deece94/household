import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: '446361246756',
    appId: '1:446361246756:web:91cdaee6a8b902896dccb1',
    measurementId: 'G-SZKQHLN6WF',
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

let analytics;
if (firebaseConfig?.projectId) {
    if (app.name && typeof window !== 'undefined') {
        analytics = getAnalytics(app);
    }
}

export { auth, analytics };
export default app;
