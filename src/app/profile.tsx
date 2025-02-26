import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, TextInput } from 'react-native';

import { themeColors } from '~/src/constants/Colors';

export default function Profile() {
  const { colorScheme } = useColorScheme();
  const isLight = colorScheme === 'light';
  const BackgroundColor = isLight
    ? themeColors.light.backgroundColor
    : themeColors.dark.backgroundColor;
  const textColor = isLight ? themeColors.light.text : themeColors.dark.text;
  const PlaceHolderColor =
    colorScheme === 'light'
      ? themeColors.light.placeholderColor
      : themeColors.dark.placeholderColor;
  return (
    <SafeAreaView style={[styles.sectionContainer, { backgroundColor: BackgroundColor }]}>
      <StatusBar style={isLight ? 'dark' : 'light'} />
      <View className=" h-[20vh] w-full ">
        <View className="h-full w-full flex-col items-center justify-center gap-2">
          <View
            className="relative h-28 w-28 rounded-full border"
            style={{ borderColor: textColor }}>
            <Image
              source={{
                uri: 'https://media.istockphoto.com/id/2182084297/photo/closeup-photo-of-young-impressed-funny-student-man-wear-gray-t-shirt-touch-cheeks-shocked-low.jpg?s=612x612&w=0&k=20&c=aJZ0ZzIDzpdkNuqOe7TZUdbtekmJ0yFR4p9U_c0B_ZM=',
              }}
              className="h-full w-full rounded-full"
              resizeMode="cover"
            />
          </View>
          <Text className="text-xl font-semibold" style={{ color: textColor }}>
            rc@234
          </Text>
        </View>
      </View>
      <View className="h-[20vh] w-full flex-col justify-center gap-4 px-4 ">
        <TextInput
          editable
          placeholder="Name"
          placeholderTextColor={PlaceHolderColor}
          className="h-16 rounded-xl border p-3 text-base"
          style={{ borderColor: textColor, color: textColor }}
        />
        <TextInput
          editable
          multiline
          placeholder="Bio"
          placeholderTextColor={PlaceHolderColor}
          className="min-h-16 rounded-xl border p-3 text-base"
          style={{ borderColor: textColor, color: textColor }}
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
