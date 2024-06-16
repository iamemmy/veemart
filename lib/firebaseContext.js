import { createContext, useContext, useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from './firebase'; // Import the db correctly

const FirebaseContext = createContext(null);
export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'products'), snapshot => {
            const productsData = snapshot.docs.map(doc => doc.data());
            setProducts(productsData);
        }, error => console.error('Error fetching products:', error));

        return () => unsubscribe(); // Cleanup function to unsubscribe from snapshot listener
    }, []);

    return (
        <FirebaseContext.Provider value={{ products }}>
            {children}
        </FirebaseContext.Provider>
    );
};
