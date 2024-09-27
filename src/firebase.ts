import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// TODO: https://firebase.google.com/docs/web/setup?hl=ko
// 가이드에 따라 firebase config를 설정합니다.
const firebaseConfig = {
    apiKey: "AIzaSyDHh1B500FYM7a9YqXzIm4zU4tfiT3mm_A",
    authDomain: "mobile-invitaion-c3174.firebaseapp.com",
    databaseURL: "https://mobile-invitaion-c3174-default-rtdb.firebaseio.com",
    projectId: "mobile-invitaion-c3174",
    storageBucket: "mobile-invitaion-c3174.appspot.com",
    messagingSenderId: "847636899124",
    appId: "1:847636899124:web:e4f3909bd6271115b1b161",
    measurementId: "G-JVH93T1XH9"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const realtimeDb = getDatabase(firebaseApp);
