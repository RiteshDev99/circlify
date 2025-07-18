import { EvilIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useColorScheme } from 'nativewind';
import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { themeColors } from '~/src/constants/Colors';

const MediaPost = () => {
  const [image, setImage] = useState<string | null>(null);
  const { colorScheme } = useColorScheme();
  const borderColor =
    colorScheme === 'light'
      ? themeColors.light.bottomBorderColor
      : themeColors.dark.bottomBorderColor;
  const iconColor = colorScheme === 'light' ? themeColors.light.icon : themeColors.dark.icon;
  const BackgroundColor =
    colorScheme === 'light' ? themeColors.light.backgroundColor : themeColors.dark.backgroundColor;
  const textColor = colorScheme === 'light' ? themeColors.light.text : themeColors.dark.text;
  const PlaceHolderColor =
    colorScheme === 'light'
      ? themeColors.light.placeholderColor
      : themeColors.dark.placeholderColor;

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View className="mediaPost flex-1" style={{ backgroundColor: BackgroundColor }}>
      <ScrollView className="topBar flex-1 p-3">
        <View className="flex-row items-start gap-2  rounded-2xl">
          <Image
            source={{
              uri: 'https://media.istockphoto.com/id/2182084297/photo/closeup-photo-of-young-impressed-funny-student-man-wear-gray-t-shirt-touch-cheeks-shocked-low.jpg?s=612x612&w=0&k=20&c=aJZ0ZzIDzpdkNuqOe7TZUdbtekmJ0yFR4p9U_c0B_ZM=',
            }}
            className=" h-12 w-12 rounded-full"
          />
          <TextInput
            editable
            autoFocus
            multiline
            placeholder="What's happening?"
            placeholderTextColor={PlaceHolderColor}
            style={[styles.textInput, { color: textColor }]}
            className="flex-1 rounded-lg p-3 text-base"
          />
        </View>
        {image && (
          <View className="mb-3 h-80 w-full flex-row justify-end overflow-hidden">
            <Image
              source={{
                uri: image,
              }}
              className=" h-full  w-[85%] rounded-xl"
            />
          </View>
        )}
        <View className="h-auto w-full px-16">
          <TouchableOpacity>
            <View
              className=" gap h-7 w-28 flex-row items-center justify-center  gap-2 rounded-3xl border"
              style={{ borderColor }}>
              <Text style={{ color: textColor }}>Tag people</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View
        className="absolute bottom-0 left-0 right-0  max-h-max min-h-20  w-full flex-row items-center justify-between border-t bg-red-300 px-8"
        style={{ borderColor, backgroundColor: BackgroundColor }}>
        <TouchableOpacity onPress={pickImage}>
          <EvilIcons name="image" size={40} color={iconColor} />
        </TouchableOpacity>
        <TouchableOpacity className="rounded-full bg-blue-600 px-8 py-2 shadow-md">
          <Text className="text-lg font-semibold text-white">Post</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    minHeight: 50,
    maxHeight: 150,
    fontSize: 18,
  },
});

export default MediaPost;
