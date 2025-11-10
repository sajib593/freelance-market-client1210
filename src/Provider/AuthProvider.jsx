import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";



export let AuthContext = createContext();
let auth = getAuth(app)


const AuthProvider = ({children}) => {


     let [user, setUser] = useState(null);
    let [loading, setLoading] = useState(true);

    let googleProvider = new GoogleAuthProvider();


    let createUser = (email, password)=>{

        setLoading(true);

        return createUserWithEmailAndPassword(auth, email, password);
    }


    let signin =(email, password) =>{
        setLoading(true);

        return signInWithEmailAndPassword(auth, email, password);
    }

    let signInGoogle =()=>{

        return signInWithPopup(auth, googleProvider)
    }


    let updateUser =(updateData) =>{

        return updateProfile(auth.currentUser, updateData)

    }


    useEffect(()=>{

       let unsubscribe = onAuthStateChanged(auth, (currentUser)=>{

            setUser(currentUser);
            setLoading(false);
        });

        return ()=> unsubscribe();
        

    }, []);


    let logOut = ()=>{

        return signOut(auth);
    }



    let authData ={

        user,
        setUser,
        loading,
        setLoading,
        createUser,
        signin,
        updateUser,
        logOut,
        signInGoogle
    }



    return <AuthContext.Provider value={authData}>

            {children}

    </AuthContext.Provider>
};

export default AuthProvider;