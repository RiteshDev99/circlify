import * as ImagePicker from 'expo-image-picker';
import { useVideoPlayer, VideoView } from 'expo-video';
import { useColorScheme } from 'nativewind';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { themeColors } from '~/src/constants/Colors';

const VideoPost = () => {
  const { colorScheme } = useColorScheme();
  const [video, setVideo] = useState<string | null>(null);
  const BackgroundColor =
    colorScheme === 'light' ? themeColors.light.backgroundColor : themeColors.dark.backgroundColor;
  const textColor = colorScheme === 'light' ? themeColors.light.text : themeColors.dark.text;
  const placeholderColor =
    colorScheme === 'light'
      ? themeColors.light.placeholderColor
      : themeColors.dark.placeholderColor;

  const pickVideo = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['videos'],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setVideo(result.assets[0].uri);
    }
  };
  const player = useVideoPlayer(video, (player) => {
    player.loop = true;
    player.play();
  });
  useEffect(() => {
    pickVideo();
  }, []);
  return (
    <View className="flex-1" style={{ backgroundColor: BackgroundColor }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {video && (
          <View className="h-[50vh] w-full flex-row justify-center">
            <VideoView
              style={styles.video}
              player={player}
              allowsFullscreen
              allowsPictureInPicture
            />
          </View>
        )}
        <View className="h-auto w-full">
          <TextInput
            editable
            autoFocus
            multiline
            placeholder="Write a caption and add hashtags..."
            placeholderTextColor={placeholderColor}
            style={[styles.textInput, { color: textColor }]}
            className="rounded-lg p-4 text-base"
          />
        </View>
        <View className="flex-1 items-center justify-end py-3 pb-10">
          <TouchableOpacity className="rounded-full bg-blue-600 px-28 py-3 shadow-md">
            <Text className="text-lg font-semibold text-white">Upload Video</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  video: {
    width: '100%',
    height: '100%',
  },
  textInput: {
    minHeight: 50,
    maxHeight: 150,
    fontSize: 16,
  },
});

export default VideoPost;
