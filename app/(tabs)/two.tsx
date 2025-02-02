import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';

import { ScreenContent } from '~/components/ScreenContent';

export default function Home() {
  return (
    <>
{/* 
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} /> */}
      <View style={styles.container}>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
