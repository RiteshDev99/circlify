import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform } from 'react-native';

import { ScreenContent } from '~/components/ScreenContent';

export default function Modal() {
  return (
    <>
      <ScreenContent path="app/modal.tsx" title="Mjkbfvhbmnxbvhj" />
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </>
  );
}
