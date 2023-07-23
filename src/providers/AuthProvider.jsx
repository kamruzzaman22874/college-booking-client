
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
const auth = getAuth(app)
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading , setLoading] = useState(true)
    const [filterData, setFilterData] = useState([])
    const googleProvider = new GoogleAuthProvider();

    const createUser =(email, password) =>{
        setLoading(false);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const loginUser = (email, password) =>{
        setLoading(false);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleLogin = () =>{
        setLoading(false);
        return signInWithPopup(auth, googleProvider)
    }
    const logOut =() =>{
        setLoading(false);
        return signOut(auth)
    }
    const resetPassword =(email)=>{
        setLoading(false);
        return sendPasswordResetEmail(auth, email)
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth , currentUser =>{
            setUser(currentUser);
            setLoading(false);
        })
        return () =>{
            return unsubscribe()
        }
    } , [])
    

    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        googleLogin,
        logOut,
        resetPassword,
        filterData,
        setFilterData,
    }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;