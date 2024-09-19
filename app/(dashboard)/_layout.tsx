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
        </Tabs>
    )
}

export default LayoutDashboard