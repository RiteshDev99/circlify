import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform } from 'react-native';

import { ScreenContent } from '~/components/ScreenContent';
// import { AppOpenAd, TestIds, AdEventType } from 'react-native-google-mobile-ads';

// const adUnitId = __DEV__ ? TestIds.APP_OPEN : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';

// const appOpenAd = AppOpenAd.createForAdRequest(adUnitId, {
//   keywords: ['fashion', 'clothing'],

// });

// // Preload an app open ad
// appOpenAd.load();

// // Show the app open ad when user brings the app to the foreground.
// appOpenAd.show();
export default function Modal() {
  return (
    <>
      <ScreenContent path="app/modal.tsx" title="Modal" />

      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </>
  );
}
