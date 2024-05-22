import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.config";
import useAxiosCommon from "../Hooks/useAxiosCommon";
export const AuthContext = createContext(null)
const auth = getAuth(app);


const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const axiosCommon = useAxiosCommon()

    //create user
    const signUpUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    //login user
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //google Login

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)

    }

    //logout
    const signOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    //update
    const userUpdateProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }

    useEffect(() => {
        const unSubcribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)

            if (currentUser) {
                //get token and store client
                const userInfo = { email: currentUser.email }
                axiosCommon.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token)
                        }
                    })
            }
            else {
                //TODO: remove token (if token stored in the client side: Local storage,caching,in memory)
                localStorage.removeItem('access-token')
            }
            setLoading(false)
        })
        return () => {
            return unSubcribe()
        }
    }, [])

    const authInfo = {
        user,
        loading,
        signUpUser,
        signInUser,
        signOutUser,
        userUpdateProfile,
        googleSignIn,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;