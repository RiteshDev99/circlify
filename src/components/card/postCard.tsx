import React from 'react';
import { View, Text, Image } from 'react-native';
import { EvilIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useColorScheme } from 'nativewind';
import { themeColors } from '~/src/constants/Colors';
import { PostCardDataProps } from '~/staticData/postCardData';

const PostCard = ({ userData }: { userData: PostCardDataProps }) => {
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
              uri: userData.userProfileImage,
            }}
            className="h-10 w-10 rounded-full"
          />
          <Text className="font-bold" style={{ color: textColor }}>
            {userData.username}
          </Text>
          <Text className="font-light" style={{ color: textColor }}>
            {userData.timestamp}
          </Text>
          <Text className="font-light" style={{ color: textColor }}>
            {userData.postViews}
          </Text>
        </View>
        <View className="py-3">
          <Text className="font-semibold" numberOfLines={5} style={{ color: textColor }}>
            {userData.captionSubtitle}
          </Text>
        </View>
        <Image
          source={{
            uri: userData.postImage,
          }}
          className="mt-4 h-80 w-full rounded-lg"
        />
        <View className="mt-5 flex-row  justify-between">
          <View className="flex-row gap-2">
            <View
              className="max-w-auto h-9 min-w-20 flex-row items-center justify-center gap-1 rounded-3xl border "
              style={{ borderColor }}>
              <EvilIcons name="like" size={25} style={{ color: iconColor }} />
              <Text style={{ color: textColor }}>{userData.likes}</Text>
            </View>
            <View
              className="max-w-auto h-9 min-w-20 flex-row items-center justify-center gap-1 rounded-3xl border "
              style={{ borderColor }}>
              <EvilIcons name="comment" size={25} style={{ color: iconColor }} />
              <Text style={{ color: textColor }}>{userData.comments}</Text>
            </View>
          </View>
          <View className="flex-row gap-2">
            <View
              className="max-w-auto h-9 min-w-20 flex-row items-center justify-center gap-1 rounded-3xl border "
              style={{ borderColor }}>
              <EvilIcons name="star" size={25} style={{ color: iconColor }} />
              <Text style={{ color: textColor }}>{userData.rating}</Text>
            </View>
            <View
              className="max-w-auto h-9 min-w-20 flex-row items-center justify-center gap-1 rounded-3xl border "
              style={{ borderColor }}>
              <MaterialCommunityIcons name="share-outline" size={25} style={{ color: iconColor }} />
              <Text style={{ color: textColor }}>{userData.share}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PostCard;
