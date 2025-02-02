import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform } from 'react-native';
import { Login } from '~/components/auth/Login';

export default function Modal() {
  return (
    <>
      <Login />
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </>
  );
}
