import React from 'react';
import {
  Platform,
  View,
  StatusBar,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import VideoCard from '~/src/components/card/videoCard';
import { ShortsVideos } from '~/staticData/shortsVideo';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useColorScheme } from 'nativewind';
import { themeColors } from '~/src/constants/Colors';

export default function ShortsViewer() {
  const { colorScheme } = useColorScheme();
  const { height: screenHeight, width: screenWidth } = Dimensions.get('window');
  const textColor = colorScheme === 'light' ? themeColors.light.text : themeColors.dark.text;
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.cameraIconContainer}>
          <TouchableOpacity>
            <SimpleLineIcons name="camera" size={28} color={textColor} />
          </TouchableOpacity>
        </View>
        <ScrollView
          decelerationRate="fast"
          snapToAlignment="start"
          snapToInterval={screenHeight}
          showsVerticalScrollIndicator={false}
          pagingEnabled>
          {ShortsVideos.map((item, index) => (
            <View key={index} style={{ width: screenWidth, height: screenHeight }}>
              <VideoCard shorts={item} />
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
      <StatusBar barStyle={Platform.OS === 'ios' ? 'light-content' : 'light-content'} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cameraIconContainer: {
    position: 'absolute',
    right: '8%',
    top: 60,
    zIndex: 1,
  },
});
