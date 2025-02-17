import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Platform, SafeAreaView, StyleSheet } from 'react-native';

import { Login } from '~/src/components/auth/Login';
import { supabase } from '~/src/utils/supabase';
import { themeColors } from '~/src/constants/Colors';

export default function Modal() {
  useEffect(() => {
    const setupAuth = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session !== null) {
        router.replace('/');
      }

      const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
        if (session !== null) {
          router.replace('/');
        }
      });
    };

    setupAuth();
  }, []);
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Login />
      </SafeAreaView>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColors.light.background,
  },
});
