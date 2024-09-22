import React,{useState,useEffect} from "react";
import { router, Stack } from "expo-router";
import { SafeAreaView, StatusBar } from "react-native";
import { Text,Spinner } from "tamagui";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LayoutAuth = ()=>{

  let [checkProtected,setCheckProtected] = useState<string | boolean>('')
  let [loadingProtected,setLoadingProtected] = useState(true)
  
  useEffect(()=>{
    // check protected
    AsyncStorage.getItem('profile-user').then((value) => {
      // jika ada data user tidak ada maka protected true atau tampil halaman login
      if (value === null) {
        setCheckProtected(false)
      }
      // jika ada data user  ada maka protected false atau arahkan ke dashboard
      else{
        setCheckProtected(true)
        router.replace('/(dashboard)')
      }
    }).catch(() => {
      setCheckProtected(false)
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
      <Stack>
            <Stack.Screen name="index" options={{ headerShown: false,title:'onBoarding',animationDuration:20 }} />
            <Stack.Screen name="login/index" options={{ headerShown: false,title:'login',animationDuration:20 }} />
            <Stack.Screen name="signup/index" options={{ headerShown: false,title:'login',animationDuration:20 }} />
      </Stack> 
     }
    </>
      
    )
}

export default LayoutAuth;