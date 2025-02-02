import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import { HeaderButton } from '../../components/HeaderButton';
import { TabBarIcon } from '../../components/TabBarIcon';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        // tabBarActiveBackgroundColor: '#000',
        tabBarPosition: 'bottom',
        tabBarLabelPosition: 'beside-icon',
        tabBarHideOnKeyboard: true,
        tabBarAllowFontScaling: true,

        tabBarStyle: {
          flex: 1,
          backgroundColor: '#000',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          position: 'absolute',
          
          bottom: 10,
          marginHorizontal: 10,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        },
        tabBarItemStyle: {
          display: 'flex',
          backgroundColor: '#000',
          borderRadius: 20,
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
        tabBarButton: (props) => <Pressable {...props} android_ripple={{ color: 'transparent' }} />,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <TabBarIcon name="star" color={color} />
            ) : (
              <TabBarIcon name="plus" color={color} />
            ),
          headerRight: () => (
            <Link href="/modal" asChild>
              <HeaderButton />
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Pofile',
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <TabBarIcon name="star" color={color} />
            ) : (
              <TabBarIcon name="key" color={color} />
            ),
        }}
      />
    </Tabs>
  );
}
