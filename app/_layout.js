import {Slot, useRouter, useSegments} from "expo-router";
import React, { useEffect } from "react";
import "../global.css"
import {useAuth} from "../context/authContext"
import { AuthContextProvider } from "../context/authContext";

const MainLayout = () => {
  const {isAuthenticated} = useAuth()
  const segments = useSegments()
  const router = useRouter()

  useEffect(()=>{
    if(typeof isAuthenticated === "undefined") return;
    const inApp = segments[0] == "(app)"

    if(isAuthenticated && !inApp){
        // redirect to home
        router.replace("home")
    }else if(isAuthenticated == false){
        //redirect to signed in
        router.replace("signIn")
    }
  }, [isAuthenticated])

  return <Slot />
}

export default function RootLayout() {
    return (
        <AuthContextProvider>
            <MainLayout />
        </AuthContextProvider>
    )
  }
