import React, { ReactNode } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Root: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <SafeAreaView className={'flex-1'}>{children}</SafeAreaView>;
};
