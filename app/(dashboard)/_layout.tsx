import { useState,useEffect } from "react";
import { Tabs } from "expo-router";
import { SafeAreaView,StatusBar } from "react-native";
import { Spinner } from "tamagui";

import CustomTabBar from "@/components/customTabBar";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "tamagui";

import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
const LayoutDashboard = ()=>{
    let [checkProtected,setCheckProtected] = useState<string | boolean>('')
    let [loadingProtected,setLoadingProtected] = useState(true)

    useEffect(()=>{
        // check protected
        AsyncStorage.getItem('profile-user').then((value) => {
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
                <Tabs 
                tabBar={(props:any) => {
                    return <CustomTabBar {...props}/>
                }}
            >
                {/* router home */}
                <Tabs.Screen
                    name="index"
                    options={{
                        headerShown:false,
                        tabBarShowLabel:false,
                    }}
                />  

                {/* router explore */}
                <Tabs.Screen
                    name="(explore)"
                    options={{
                        title:"explore",
                        headerShown:false,
                        tabBarShowLabel:false,
                    }}
                />  

                {/* router cart */}
                <Tabs.Screen
                    name="cart/index"
                    options={{
                        title:"Cart",
                        headerShown:false,
                        tabBarShowLabel:false,
                    }}
                />  

                {/* router favorite */}
                <Tabs.Screen
                    name="favorite/index"
                    options={{
                        title:"Favorite",
                        headerShown:false,
                        tabBarShowLabel:false,
                    }}
                /> 

                {/* router profile */}
                <Tabs.Screen
                    name="profile/index"
                    options={{
                        title:"Profile",
                        headerShown:false,
                        tabBarShowLabel:false,
                    }}
                />
                </Tabs>
            }
        </>
        
    )
}

export default LayoutDashboard