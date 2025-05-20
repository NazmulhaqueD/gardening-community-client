import React, { createContext } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

const userInfo = {
    name: 'nazmul'
}

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;