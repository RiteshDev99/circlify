import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { Button } from '~/src/components/Button';
import { supabase } from '~/src/utils/supabase';
import { useColorScheme } from 'nativewind';
import { themeColors } from '~/src/constants/Colors';

export default function Setting() {
  const { colorScheme } = useColorScheme();
  const BackgroundColor =
    colorScheme === 'light' ? themeColors.light.backgroundColor : themeColors.dark.backgroundColor;

  return (
    <SafeAreaView style={[styles.sectionContainer, { backgroundColor: BackgroundColor }]}>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile</Text>
        <Button
          title="Logout"
          onPress={async () => {
            try {
              await supabase.auth.signOut();
            } catch (error) {
              console.error('Logout failed:', error);
            }
          }}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
});
