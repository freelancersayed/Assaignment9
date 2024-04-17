import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, TwitterAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";


export const AuthContext = createContext(null)

const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const xProvider = new TwitterAuthProvider();
const fbProvider = new FacebookAuthProvider();

const AuthProvider = ({children}) => {
const [user, setUser] = useState(null)
const [loader, setLoader] = useState(true)



    const createUser = (email, password)=>{
        // setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const singIn = (email, password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password);
    }



    const signInWithGoogle = ()=>{
        setLoader(true)
        return signInWithPopup(auth, googleProvider)
    }; 

    const signInWithGithub=()=>{
        setLoader(true)
        return signInWithPopup(auth, githubProvider)
    };

    const singInWithX=()=>{
        setLoader(true)
        return signInWithPopup(auth, xProvider)
    }
    const signInWithFb =()=>{
        setLoader(true)
        return signInWithPopup(auth, fbProvider)
    }


    const logOut = ()=>{
        setLoader(true)
        return signOut(auth);
    }

const updateUserProfile = (name, photo)=>{
    return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      })}

    useEffect(()=>{
       const clear = onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser);
            setUser(currentUser)
            setLoader(false);
            
        })
        // clear state 
        return () =>{
            clear()
        }
    },[])
 
  const authInfo = {
    user,
    loader,
    createUser,
    logOut,
    singIn,
    signInWithGoogle,
    signInWithGithub,
    singInWithX,
    signInWithFb,
    updateUserProfile
  }
 

    return (
        <AuthContext.Provider value={authInfo}>
         {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;