import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  Platform,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { Link } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Home({ navigation }: any) {
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={styles.sectionContainer}>
          <View style={styles.topBar}>
            <View style={styles.topBarItem}>
              <View style={styles.item}>
                <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                  <Image source={require('~/src/assets/icons/menu.png')} style={styles.menuIcon} />
                </TouchableOpacity>
                <Text style={styles.appName}>Circlify</Text>
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
              <View style={styles.inputContainer}>
                <Image
                  source={require('~/src/assets/icons/search.png')}
                  style={styles.searchIcon}
                />
                <TextInput
                  style={styles.inputBox}
                  placeholder="Search here.."
                  placeholderTextColor="#282C3F"
                />
              </View>
            </View>
          </View>
          <StatusBar style={Platform.OS === 'ios' ? 'light' : 'light'} />
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}
const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    // backgroundColor: 'red',
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
    backgroundColor: 'rgba(176,169,169,0.27)',
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
    fontSize: 23,
  },
  searchIcon: {
    height: 65,
    width: 65,
  },
});
