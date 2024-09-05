import { Stack } from "expo-router";
import { StatusBar } from "react-native";


const LayoutAuth = ()=>{
    return (
    <>
      <Stack>
               <Stack.Screen name="index" options={{ headerShown: false,title:'start' }} />
      </Stack> 


    <StatusBar barStyle={'light-content'}/>
    </>
      
    )
}

export default LayoutAuth;