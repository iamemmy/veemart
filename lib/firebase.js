import { getFirestore} from "firebase/firestore";
import { initializeApp } from "firebase/app";

  const firebaseConfig = {
    apiKey: "AIzaSyDXJfmnXHJYfqvB36c99jRuBW0_odsoHyo",
    authDomain: "veemart-9432b.firebaseapp.com",
    projectId: "veemart-9432b",
    storageBucket: "veemart-9432b.appspot.com",
    messagingSenderId: "270849575327",
    appId: "1:270849575327:web:d33cdea6b837a4132895aa"
    };
  
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };