import React from 'react';
import { createContext } from 'react';
import app from '../firebase/firebase.config';
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'


const auth = getAuth(app)
export const authContext = createContext();

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {

    const googleLogin = ()=>{
        return signInWithPopup(auth, googleProvider)
    }


const authInfo = {
    user: 'amir khan',
    googleLogin
}

    return (
        <div>
            <authContext.Provider value={authInfo}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default AuthProvider;