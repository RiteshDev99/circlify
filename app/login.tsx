import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Platform } from 'react-native';

import { Login } from '~/components/auth/Login';
import { supabase } from '~/utils/supabase';

export default function Modal() {
  useEffect(() => {
    const setupAuth = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session!==null) {
        router.replace('/');
      }

      const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
        if (session!==null) {
          router.replace('/');
        }
      });
    };

    setupAuth();
  }, []);
  return (
    <>
      <Login />
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </>
  );
}
