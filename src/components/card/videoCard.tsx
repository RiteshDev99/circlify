import React, { useState } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign, EvilIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useColorScheme } from 'nativewind';
import { themeColors } from '~/src/constants/Colors';
import { useVideoPlayer, VideoView } from 'expo-video';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ShortVideoProps } from '~/staticData/shortsVideo';

const VideoCard = ({ shorts }: { shorts: ShortVideoProps }) => {
  const { colorScheme } = useColorScheme();
  const textColor = colorScheme === 'light' ? themeColors.light.text : themeColors.dark.text;
  const player = useVideoPlayer(shorts.url, (player) => {
    player.loop = true;
    player.play();
  });
  return (
    <SafeAreaView className="h-screen-safe w-full ">
      <VideoView
        style={StyleSheet.absoluteFillObject}
        player={player}
        allowsFullscreen
        allowsPictureInPicture
      />
      <View className="absolute bottom-0  mx-3 mb-8  h-auto flex-row items-center gap-3">
        <Image
          source={{
            uri: 'https://media.istockphoto.com/id/2182084297/photo/closeup-photo-of-young-impressed-funny-student-man-wear-gray-t-shirt-touch-cheeks-shocked-low.jpg?s=612x612&w=0&k=20&c=aJZ0ZzIDzpdkNuqOe7TZUdbtekmJ0yFR4p9U_c0B_ZM=',
          }}
          className="h-10 w-10 rounded-full"
        />
        <Text className="text-lg font-semibold" style={{ color: textColor }}>
          Aman_Verma99
        </Text>
      </View>
      <View style={styles.actionBtn}>
        <TouchableOpacity>
          <AntDesign name="hearto" size={30} style={{ color: textColor }} />
        </TouchableOpacity>
        <TouchableOpacity>
          <EvilIcons name="comment" size={34} style={{ color: textColor }} />
        </TouchableOpacity>
        <MaterialCommunityIcons name="share-outline" size={35} style={{ color: textColor }} />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  actionBtn: {
    position: 'absolute',
    left: 380,
    top: Platform.OS === 'ios' ? 540 : 560,
    height: 190,
    width: 'auto',
    transform: [{ translateX: -32 }],
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 12,
  },
});
export default VideoCard;
