import { Tabs } from "expo-router";
import CustomTabBar from "@/components/customTabBar";
import React from "react";

import { Ionicons } from "@expo/vector-icons";
import { Text } from "tamagui";
const LayoutDashboard = ()=>{
    return (
        <Tabs 
            tabBar={(props:any) => {
                return <CustomTabBar {...props}/>
            }}
        >
             <Tabs.Screen
                name="index"
                options={{
                    headerShown:false,
                    tabBarShowLabel:false,
                    tabBarActiveTintColor:'red',
                }}
            />  
             
        </Tabs>
    )
}

export default LayoutDashboard