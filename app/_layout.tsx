import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

import { TamaguiProvider } from 'tamagui';
import config from '@/tamagui.config';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Gilroy_ligth: require('../assets/fonts/Gilroy-Light.ttf'),
    Gilroy_medium: require('../assets/fonts/Gilroy-Medium.ttf'),
    Gilroy_semiBold: require('../assets/fonts/Gilroy-SemiBold.ttf'),
    Gilroy_bold: require('../assets/fonts/Gilroy-Bold.ttf'),
    Gilroy_extraBold: require('../assets/fonts/Gilroy-ExtraBold.ttf'),
    Gilroy_black: require('../assets/fonts/Gilroy-Black.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <TamaguiProvider config={config}>
      <Stack>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        {/* <Stack.Screen name="+not-found" /> */}
      </Stack>
    </TamaguiProvider>
  );
}
