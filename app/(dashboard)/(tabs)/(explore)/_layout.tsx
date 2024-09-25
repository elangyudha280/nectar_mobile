import { Stack } from "expo-router"

const LayoutExplore = ()=>{
    return (
        <Stack >
            <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack>
    )
}

export default LayoutExplore;