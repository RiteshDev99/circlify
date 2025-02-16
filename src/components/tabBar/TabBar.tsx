import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

const TabBarButton: React.FC<TabBarButtonProps> = ({
  onPress,
  onLongPress,
  isFocused,
  color,
  label,
  icon,
}) => {
  return (
    <TouchableOpacity style={styles.tabbarItem} onPress={onPress} onLongPress={onLongPress}>
      {icon}
      <Text style={{ color, fontSize: 11, marginTop: 4 }}>{label}</Text>
    </TouchableOpacity>
  );
};

const TabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
  const primaryColor = '#0891b2';
  const greyColor = '#737373';

  const icons: Icons = {
    index: {
      outline: <Image source={require('~/src/assets/icons/home.png')} style={styles.tabBarIcon} />,
      filled: (
        <Image source={require('~/src/assets/icons/home_Fill.png')} style={styles.tabBarIcon} />
      ),
    },
    video: {
      outline: <Image source={require('~/src/assets/icons/video.png')} style={styles.tabBarIcon} />,
      filled: (
        <Image source={require('~/src/assets/icons/video_Fill.png')} style={styles.tabBarIcon} />
      ),
    },
    circle: {
      outline: (
        <Image source={require('~/src/assets/icons/circle.png')} style={styles.tabBarIcon} />
      ),
      filled: (
        <Image source={require('~/src/assets/icons/circle_Fill.png')} style={styles.tabBarIcon} />
      ),
    },
    setting: {
      outline: (
        <Image source={require('~/src/assets/icons/setting.png')} style={styles.tabBarIcon} />
      ),
      filled: (
        <Image source={require('~/src/assets/icons/setting_Fill.png')} style={styles.tabBarIcon} />
      ),
    },
  };

  return (
    <View style={styles.tabbar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel ?? options.title ?? route.name;
        if (['_sitemap', '+not-found'].includes(route.name)) return null;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        const icon = isFocused ? icons[route.name]?.filled : icons[route.name]?.outline;

        return (
          <TabBarButton
            key={route.key}
            onPress={onPress}
            onLongPress={onLongPress}
            isFocused={isFocused}
            color={isFocused ? primaryColor : greyColor}
            label={String(label)}
            icon={icon}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabbar: {
    position: 'absolute',
    bottom: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    marginHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 25,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.1,
    elevation: 5,
  },
  tabbarItem: {
    flex: 1,
    alignItems: 'center',
  },
  tabBarIcon: {
    height: 27,
    width: 27,
    resizeMode: 'contain',
  },
});

interface TabBarButtonProps {
  onPress: () => void;
  onLongPress: () => void;
  isFocused: boolean;
  color: string;
  label: string;
  icon: React.ReactNode;
}

interface TabIcon {
  outline: React.ReactNode;
  filled: React.ReactNode;
}

interface Icons {
  [key: string]: TabIcon;
}

export default TabBar;
