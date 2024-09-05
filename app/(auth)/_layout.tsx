import { Stack } from "expo-router";
import { StatusBar } from "react-native";


const LayoutAuth = ()=>{
    return (
    <>
      <Stack>
               <Stack.Screen name="index" options={{ headerShown: false,title:'onBoarding',animationDuration:20 }} />
               <Stack.Screen name="login/index" options={{ headerShown: false,title:'login',animationDuration:20 }} />
               <Stack.Screen name="signup/index" options={{ headerShown: false,title:'login',animationDuration:20 }} />
      </Stack> 


    </>
      
    )
}

export default LayoutAuth;