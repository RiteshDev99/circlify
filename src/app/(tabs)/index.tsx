import { StatusBar } from 'expo-status-bar';
import React from 'react';
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
import { EvilIcons, Feather } from '@expo/vector-icons';
import { Link } from 'expo-router';
import PostCard from '~/src/components/card/postCard';
import ScrollView = Animated.ScrollView;
import { useColorScheme } from 'nativewind';
import { themeColors } from '~/src/constants/Colors';

export default function Index({ navigation }: any) {
  const { colorScheme } = useColorScheme();

  const textColor = colorScheme === 'light' ? themeColors.light.text : themeColors.dark.text;
  const searchBarColor =
    colorScheme === 'light' ? themeColors.light.searchBarColor : themeColors.dark.searchBarColor;

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
                <EvilIcons name="search" size={30} />
                <TextInput
                  style={styles.inputBox}
                  placeholder="Search here.."
                  placeholderTextColor="#282C3F"
                />
              </View>
            </View>
          </View>
          <PostCard />
          <PostCard />
          <PostCard />
          <StatusBar style={Platform.OS === 'ios' ? 'light' : 'light'} />
        </ScrollView>
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
    // backgroundColor: 'rgb(255,253,253)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputBox: {
    height: 50,
    width: 285,
    borderRadius: 15,
    paddingHorizontal: 15,
    color: '#282C3F',
    fontSize: 16,
  },
});
