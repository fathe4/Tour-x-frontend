import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import firebaseAuthentication from "../Firebase/Firebase.init";

firebaseAuthentication()
const UseFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()
    const auth = getAuth()

    const googleSignIn = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)
        // .then(result => {
        //     const user = result.user
        //     setUser(user)
        // }).catch(error => {
        //     console.log(error.message);
        // })

    }

    // GET CURRENT USER
    useEffect(() => {

        const unsubscribed = onAuthStateChanged(auth, user => {
            setIsLoading(true)
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribed
    }, [auth]);


    // SIGN OUT

    const logOut = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            console.log(error.message);
        });
    }

    return {
        googleSignIn,
        logOut,
        user,
        setIsLoading,
        isLoading
    }
}

export default UseFirebase;
