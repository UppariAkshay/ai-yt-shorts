"use client"
import React, { useState, useEffect, useContext } from 'react'
import { ThemeProvider as NextThemesProvider } from "next-themes"
import {AuthContext} from './_context/AuthContext'
import { onAuthStateChanged } from "firebase/auth";
import {auth} from '@/configs/firebaseConfig'

function Provider({children}) {
  const [user, setUser] = useState()

  useEffect( () => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        setUser(user)
        console.log(user)
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

