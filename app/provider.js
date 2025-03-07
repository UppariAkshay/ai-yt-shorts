"use client"
import React, { useState, useEffect, useContext } from 'react'
import { ThemeProvider as NextThemesProvider } from "next-themes"
import {AuthContext} from './_context/AuthContext'
import { onAuthStateChanged } from "firebase/auth";
import {auth} from '../configs/firebaseConfig'
import { useMutation } from 'convex/react';
import { api } from "../convex/_generated/api";

function Provider({children}) {
  const [user, setUser] = useState()
  const CreateUser = useMutation(api.users.CreateNewUser)

  useEffect( () => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        
        console.log(user)
        const userDataInConvex = await CreateUser({name: user?.displayName, email: user?.email, pictureURL: user?.photoURL})
        setUser(userDataInConvex)
        console.log(userDataInConvex)
        // ...
      } else {
        // User is signed out
        // ...
        setUser({})
      }
    });

    return () => unsubscribe()
  }, [])

  return (
    <div>
      <AuthContext.Provider value={{user}}>      
        <NextThemesProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange>
          {children}
        </NextThemesProvider>
      </AuthContext.Provider>
    </div>
  )
}

export const useAuthContext = () => {
  const context = useContext(AuthContext)
  return context;
}

export default Provider

