import { router, SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import '../../global.css';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import { useColorScheme } from '~/src/hooks/useColorScheme';
import { supabase } from '~/src/utils/supabase';
import { themeColors } from '~/src/constants/Colors';
SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  initialRouteName: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  useEffect(() => {
    const setupAuth = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (!session) {
        router.replace('/login');
      }

      const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
        if (!session) {
          router.replace('/login');
        }
      });

      SplashScreen.hideAsync();
    };

    setupAuth();
  }, []);
  const NavigationBgColor =
    colorScheme === 'light'
      ? themeColors.light.navigationBarBackgroundColor
      : themeColors.dark.navigationBarBackgroundColor;

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack
        screenOptions={{
          animation: 'slide_from_right',
          headerShown: false,
          navigationBarColor: NavigationBgColor,
        }}>
        <Stack.Screen name="(tabs)" options={{ title: 'Home' }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen
          name="profile"
          options={{ headerShown: true, title: 'Profile', animation: 'slide_from_right' }}
        />
        <Stack.Screen
          name="reelPost"
          options={{ headerShown: true, title: 'ReelPost', animation: 'slide_from_right' }}
        />
        <Stack.Screen
          name="mediaPost"
          options={{ headerShown: true, title: 'MediaPost', animation: 'slide_from_right' }}
        />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
