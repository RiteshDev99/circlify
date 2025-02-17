import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { Button } from '~/src/components/Button';
import { supabase } from '~/src/utils/supabase';

export default function profile() {
  return (
    <>
      <SafeAreaView style={styles.sectionContainer}>
        <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
        <View className="flex-1 items-center justify-center">
          <Text>Profile</Text>
          <Button
            title="Logout"
            onPress={async () => {
              await supabase.auth.signOut();
            }}
          />
        </View>
      </SafeAreaView>
    </>
  );
}
const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    // backgroundColor: '#fff',
  },
});
