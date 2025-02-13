import { Link, Tabs } from 'expo-router';
import { Dimensions, Pressable, Text } from 'react-native';
import { HeaderButton } from '~/components/HeaderButton';
import { TabBarIcon } from '~/components/TabBarIcon';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        animation: 'fade',
        headerShown: true,
        headerTitle: '',
        headerTransparent: true,
        // tabBarActiveBackgroundColor: '#000',
        tabBarPosition: 'bottom',
        // tabBarLabelPosition: 'beside-icon',
        tabBarHideOnKeyboard: true,
        tabBarAllowFontScaling: true,
        tabBarStyle: {
          display: 'flex',
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: '#000',
          borderRadius: 10,
          position: 'absolute',
          bottom: 10,
          marginHorizontal: 10,
        },
        tabBarItemStyle: {
          backgroundColor: '#000',
          borderRadius: 10,
        },
        tabBarLabelStyle: {},
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
        tabBarButton: (props) => <Pressable {...props} android_ripple={{ color: 'transparent' }} />,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused, size }) =>
            focused ? (
              <TabBarIcon name="home" color={color} size={size} />
            ) : (
              <TabBarIcon name="home" color={color} size={size} />
            ),
          headerLeft: () => (
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
          headerLeft: () => (
            <Link href="/modal" asChild>
              <HeaderButton />
            </Link>
          ),
        }}
      />
    </Tabs>
  );
}
