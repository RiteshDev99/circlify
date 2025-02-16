import { Tabs } from 'expo-router';
import React from 'react';
import TabBar from '~/src/components/tabBar/TabBar';

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        animation: 'fade',
        headerShown: false,
        tabBarPosition: 'bottom',
        tabBarHideOnKeyboard: true,
        tabBarAllowFontScaling: true,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
        }}
      />
      <Tabs.Screen
        name="video"
        options={{
          title: 'Video',
        }}
      />
      <Tabs.Screen
        name="circle"
        options={{
          title: 'Circle',
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: 'Setting',
        }}
      />
    </Tabs>
  );
}
