import React from 'react';
import { View, Text, Image } from 'react-native';
import { EvilIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useColorScheme } from 'nativewind';
import { themeColors } from '~/src/constants/Colors';

const PostCard = () => {
  const { colorScheme } = useColorScheme();

  const textColor = colorScheme === 'light' ? themeColors.light.text : themeColors.dark.text;
  const iconColor = colorScheme === 'light' ? themeColors.light.icon : themeColors.dark.icon;
  const borderColor =
    colorScheme === 'light'
      ? themeColors.light.bottomBorderColor
      : themeColors.dark.bottomBorderColor;

  return (
    <View className="flex h-auto w-full items-center border-b pb-3" style={{ borderColor }}>
      <View className="h-auto w-[95%] p-2">
        <View className="flex-row items-center gap-3">
          <Image
            source={{
              uri: 'https://media.istockphoto.com/id/2182084297/photo/closeup-photo-of-young-impressed-funny-student-man-wear-gray-t-shirt-touch-cheeks-shocked-low.jpg?s=612x612&w=0&k=20&c=aJZ0ZzIDzpdkNuqOe7TZUdbtekmJ0yFR4p9U_c0B_ZM=',
            }}
            className="h-10 w-10 rounded-full"
          />
          <Text className="font-bold" style={{ color: textColor }}>
            r/developersIndia
          </Text>
          <Text className="font-light" style={{ color: textColor }}>
            3h
          </Text>
          <Text className="font-light" style={{ color: textColor }}>
            8.4k views
          </Text>
        </View>
        <View className="py-3">
          <Text className="font-semibold" numberOfLines={5} style={{ color: textColor }}>
            Im Getting So Tired of jordan peterson That im gonna Start Calling Him jordan Jenkins.
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://typli.ai/_next/image?url=%2Fai-content-planner.png&w=1200&q=75',
          }}
          className="mt-4 h-80 w-full rounded-lg"
        />
        <View className="mt-5 flex-row  justify-between">
          <View className="flex-row gap-2">
            <View
              className="h-9 w-20 flex-row items-center justify-center gap-1 rounded-3xl border "
              style={{ borderColor }}>
              <EvilIcons name="like" size={25} style={{ color: iconColor }} />
              <Text style={{ color: textColor }}>1.1K</Text>
            </View>
            <View
              className="h-9 w-20 flex-row items-center justify-center gap-1 rounded-3xl border "
              style={{ borderColor }}>
              <EvilIcons name="comment" size={25} style={{ color: iconColor }} />
              <Text style={{ color: textColor }}>50</Text>
            </View>
          </View>
          <View className="flex-row gap-2">
            <View
              className="h-9 w-20 flex-row items-center justify-center gap-1 rounded-3xl border "
              style={{ borderColor }}>
              <EvilIcons name="star" size={25} style={{ color: iconColor }} />
              <Text style={{ color: textColor }}>10</Text>
            </View>
            <View
              className="h-9 w-20 flex-row items-center justify-center gap-1 rounded-3xl border "
              style={{ borderColor }}>
              <MaterialCommunityIcons name="share-outline" size={25} style={{ color: iconColor }} />
              <Text style={{ color: textColor }}>31</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PostCard;
