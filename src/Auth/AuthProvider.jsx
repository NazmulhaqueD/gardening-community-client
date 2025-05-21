import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { app } from './firebase.config';

export const AuthContext = createContext();
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState('');

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInWithGoogle = () => {
        return signInWithPopup(auth, provider);
    }
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }


    const userInfo = {
        signUp,
        signInWithGoogle,
        signIn,
        user,
        setUser,
    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;