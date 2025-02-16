import { router, SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import '../../global.css';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import { useColorScheme } from '~/src/hooks/useColorScheme';
import { supabase } from '~/src/utils/supabase';
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
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack
        screenOptions={{
          animation: 'slide_from_right',
          headerShown: false,
          navigationBarColor: '#ffffff',
        }}>
        <Stack.Screen name="(tabs)" options={{ title: 'home' }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen
          name="profile"
          options={{ headerShown: true, title: 'Profile', animation: 'flip' }}
        />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
