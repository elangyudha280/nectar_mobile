import { useState,useEffect } from "react";
import { Stack } from "expo-router"

// import component
import { Spinner } from "tamagui";
import { SafeAreaView,StatusBar } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";


const LayoutDashboard = ()=>{

    let [checkProtected,setCheckProtected] = useState<string | boolean>('')
    let [loadingProtected,setLoadingProtected] = useState(true)

    // checking data user
    useEffect(()=>{
        // check protected
        AsyncStorage.getItem('profile-user').then((value) => {

            console.log(value)
          // jika ada data user maka protected false atau tampil halaman dashboard
          if (value !== null) {
            setCheckProtected(false)
          }
          // jika tidak ada data user  ada maka protected true atau arahkan ke login
          else{
            setCheckProtected(true)
            router.replace('/(auth)')
          }
        }).catch((error) => {
            setCheckProtected(true)
            router.replace('/(auth)')
        })
        .finally(()=>[
          setLoadingProtected(false)
        ])
      },[])
    return (
        <>
            {
                loadingProtected  ? 
                <SafeAreaView style={{flex:1 , paddingTop:StatusBar.currentHeight, padding:10, alignItems:'center',justifyContent:'center'}}>
                <Spinner size="large" color="$green10"/>
                </SafeAreaView>
                :
                <Stack >
                    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                    <Stack.Screen name="(detailFood)/[id]" options={{ headerShown:false }} />
                    <Stack.Screen name="(detailCategory)" options={{ headerShown:false }} />
                </Stack>
            }
        </>
       
    )
}

export default LayoutDashboard;