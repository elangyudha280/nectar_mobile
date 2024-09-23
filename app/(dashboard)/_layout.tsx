import { Stack } from "expo-router"

const LayoutDashboard = ()=>{
    return (
        <Stack >
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="(detailFood)/[id]" options={{ headerShown:false }} />
        </Stack>
    )
}

export default LayoutDashboard;