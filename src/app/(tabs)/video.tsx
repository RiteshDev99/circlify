import React from 'react';
import { View, ScrollView, Dimensions, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import VideoCard from '~/src/components/card/videoCard';
import { ShortsVideos } from '~/staticData/shortsVideo';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useColorScheme } from 'nativewind';
import { themeColors } from '~/src/constants/Colors';

export default function ShortsViewer() {
  const { colorScheme } = useColorScheme();
  const { height: screenHeight } = Dimensions.get('window');
  const textColor = colorScheme === 'light' ? themeColors.light.text : themeColors.dark.text;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cameraIconContainer}>
        <TouchableOpacity>
          <SimpleLineIcons name="camera" size={28} color={textColor} />
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        decelerationRate="fast"
        snapToAlignment="start"
        snapToInterval={screenHeight}
        showsVerticalScrollIndicator={false}
        pagingEnabled>
        {ShortsVideos.map((item, index) => (
          <View key={index} style={[styles.videoContainer, { height: screenHeight }]}>
            <VideoCard shorts={item} />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  videoContainer: {
    width: '100%',
  },
  cameraIconContainer: {
    position: 'absolute',
    right: '8%',
    top: Platform.OS === 'ios' ? 65 : 50,
    zIndex: 1,
  },
});
