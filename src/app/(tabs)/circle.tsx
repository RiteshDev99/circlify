import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Circle() {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <View>
          <Text>Circle</Text>
        </View>
      </SafeAreaView>

      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'light'} />
    </>
  );
}
