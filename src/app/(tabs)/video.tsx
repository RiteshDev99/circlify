import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, View, Text } from 'react-native';

export default function Video() {
  return (
    <>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Video</Text>
      </View>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'light'} />
    </>
  );
}
