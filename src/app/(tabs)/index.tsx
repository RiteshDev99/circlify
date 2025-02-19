import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  Platform,
  View,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
  Animated,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DrawerActions } from '@react-navigation/native';
import { EvilIcons, Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import ScrollView = Animated.ScrollView;
import { useColorScheme } from 'nativewind';
import { themeColors } from '~/src/constants/Colors';
import { postCardData } from '~/staticData/postCardData';
import PostCard from '~/src/components/card/postCard';
import RBSheet from 'react-native-raw-bottom-sheet';

export default function Index({ navigation }: any) {
  const { colorScheme } = useColorScheme();
  // @ts-ignore
  const refRBSheet = useRef<RBSheet | null>(null);
  const textColor = colorScheme === 'light' ? themeColors.light.text : themeColors.dark.text;
  const searchBarColor =
    colorScheme === 'light' ? themeColors.light.searchBarColor : themeColors.dark.searchBarColor;
  const BottomSheetBgColor =
    colorScheme === 'light'
      ? themeColors.light.bottomSheetBgColor
      : themeColors.dark.bottomSheetBgColor;
  return (
    <>
      <SafeAreaView style={styles.sectionContainer}>
        <ScrollView>
          <View style={styles.topBar}>
            <View style={styles.topBarItem}>
              <View style={styles.item}>
                <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                  <Feather name="menu" size={28} style={{ color: textColor }} />
                </TouchableOpacity>
                <Text style={[styles.appName, { color: textColor }]}>Circlify</Text>
              </View>
              <Link href="/profile">
                <Image
                  source={{
                    uri: 'https://media.istockphoto.com/id/2182084297/photo/closeup-photo-of-young-impressed-funny-student-man-wear-gray-t-shirt-touch-cheeks-shocked-low.jpg?s=612x612&w=0&k=20&c=aJZ0ZzIDzpdkNuqOe7TZUdbtekmJ0yFR4p9U_c0B_ZM=',
                  }}
                  style={styles.profileImage}
                />
              </Link>
            </View>
            <View style={styles.textInput}>
              <View style={[styles.inputContainer, { backgroundColor: searchBarColor }]}>
                <EvilIcons name="search" size={30} color={textColor} />
                <TextInput
                  style={[styles.inputBox, { color: textColor }]}
                  placeholder="Search here.."
                  placeholderTextColor={textColor}
                />
              </View>
            </View>
          </View>
          <View className="h-auto pb-36 ">
            {postCardData.map((item, index) => (
              <PostCard key={index} userData={item} />
            ))}
          </View>
          <StatusBar style={Platform.OS === 'ios' ? 'light' : 'light'} />
        </ScrollView>
        <TouchableOpacity className="absolute" onPress={() => refRBSheet.current.open()}>
          <View style={styles.actionBtn}>
            <MaterialIcons name="add" size={30} style={{ color: '#fff' }} />
          </View>
        </TouchableOpacity>
        <RBSheet
          ref={refRBSheet}
          height={220}
          openDuration={400}
          closeDuration={400}
          customStyles={{
            container: [styles.sheetContainer, { backgroundColor: BottomSheetBgColor }],
            wrapper: styles.sheetWrapper,
          }}>
          <Text className="text-center text-xl font-semibold mt-2" style={{color:textColor}}>Choose Option</Text>
          <View className=" flex-1 flex-row  items-center justify-evenly ">
            <Link
              href="/mediaPost"
              onPress={() => {
                refRBSheet.current?.close();
              }}>
              <View
                className=" h-40 w-40 flex-col items-center justify-center gap-3 rounded-2xl border"
                style={{ borderColor: textColor }}>
                <Feather name="image" size={35} color={textColor} />
                <Text style={[styles.postName, { color: textColor }]}>Post</Text>
              </View>
            </Link>
            <Link
              href="/reelPost"
              onPress={() => {
                refRBSheet.current?.close();
              }}>
              <View
                className=" h-40 w-40 flex-col items-center justify-center gap-3  rounded-2xl border"
                style={{ borderColor: textColor }}>
                <Ionicons name="videocam-outline" size={38} color={textColor} />
                <Text style={[styles.postName, { color: textColor }]}>Reel</Text>
              </View>
            </Link>
          </View>
        </RBSheet>
      </SafeAreaView>
    </>
  );
}
const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
  topBar: {
    height: 140,
    width: '100%',
  },
  profileImage: {
    height: 45,
    width: 45,
    borderRadius: 50,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 25,
  },
  menuIcon: {
    height: 20,
    width: 20,
  },
  appName: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  topBarItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    paddingVertical: 3,
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    height: 50,
    width: 350,
    borderRadius: 15,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.1,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputBox: {
    height: 50,
    width: 285,
    borderRadius: 15,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  actionBtn: {
    position: 'absolute',
    left: 344,
    top: Platform.OS === 'ios' ? 665 : 690,
    height: 64,
    width: 64,
    transform: [{ translateX: -32 }],
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 32,
    backgroundColor: '#0A79DF',
  },
  sheetContainer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  sheetWrapper: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  postName: {
    fontSize: 18,
    fontWeight: 'semibold',
  },
});
