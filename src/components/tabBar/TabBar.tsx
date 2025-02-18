import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Entypo, FontAwesome5, Foundation, Ionicons } from '@expo/vector-icons';
import { useColorScheme } from 'nativewind';
import { themeColors } from '~/src/constants/Colors';

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
  const primaryColor = '#0A79DF';
  const { colorScheme } = useColorScheme();

  const textColor = colorScheme === 'light' ? themeColors.light.text : themeColors.dark.text;
  const tabBarBackgroundColor =
    colorScheme === 'light'
      ? themeColors.light.tabBarBackgroundColor
      : themeColors.dark.tabBarBackgroundColor;

  const tabBarIcon =
    colorScheme === 'light' ? themeColors.light.tabBarIcon : themeColors.dark.tabBarIcon;

  const icons: Icons = {
    index: {
      outline: <Ionicons name="home-outline" size={28} color={textColor} />,

      filled: <Ionicons name="home-sharp" size={28} solid color={tabBarIcon} />,
    },
    video: {
      outline: <Foundation name="play-video" size={28} style={{ color: textColor }} />,
      filled: <Entypo name="video" size={28} solid style={{ color: tabBarIcon }} />,
    },
    circle: {
      outline: <FontAwesome5 name="circle-notch" size={28} style={{ color: textColor }} />,
      filled: <FontAwesome5 name="circle-notch" size={28} style={{ color: tabBarIcon }} />,
    },
    setting: {
      outline: <Ionicons name="settings-outline" size={28} style={{ color: textColor }} />,
      filled: <Ionicons name="settings" size={28} style={{ color: tabBarIcon }} />,
    },
  };

  return (
    <View style={[styles.tabbar, { backgroundColor: tabBarBackgroundColor }]}>
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
            color={isFocused ? primaryColor : textColor}
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
    bottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  iconColor: {
    tintColor: '#0A79DF',
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
