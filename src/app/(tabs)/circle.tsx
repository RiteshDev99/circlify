import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, View, Text } from 'react-native';

export default function Circle() {
  return (
    <>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Circle</Text>
      </View>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'light'} />
    </>
  );
}
