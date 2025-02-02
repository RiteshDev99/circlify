import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, StyleSheet, View, Text } from 'react-native';

export default function Home() {
  return (
    <>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      <View className="flex flex-1">
        <View className="flex flex-1 items-center justify-center">
          <Text>Two</Text>
        </View>
      </View>
    </>
  );
}
