import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, View,Text } from 'react-native';
import { Button } from '~/components/Button';
import { supabase } from '~/utils/supabase';

export default function Home() {
  return (
    <>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home</Text>
        <Button
          title="Logout"
          onPress={async () => {
            await supabase.auth.signOut();
          }}
        />
      </View>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'light'} />
    </>
  );
}
