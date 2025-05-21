import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from './firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser]=useState('');

    const signUp = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const userInfo = {
        signUp,
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