import { Stack } from "expo-router"

const LayoutDetailCategory = ()=>{
    return (
        <Stack >
            <Stack.Screen name="[idCategory]" options={{ headerShown: false }} />
        </Stack>
    )
}

export default LayoutDetailCategory;