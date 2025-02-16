import React from 'react';
import { Platform, View, Text, StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function Setting() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View>
          <Text>Setting</Text>
        </View>
      </SafeAreaView>
      <StatusBar
        barStyle={Platform.OS === 'ios' ? 'light-content' : 'light-content'}
        backgroundColor="transparent"
        translucent
      />
    </SafeAreaProvider>
  );
}
