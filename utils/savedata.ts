import AsyncStorage from '@react-native-async-storage/async-storage';

const setData = async (key: string, value: any) => {
  await AsyncStorage.setItem(key, JSON.stringify(value));
};

const getData = async (key: string) => {
  const value = await AsyncStorage.getItem(key);

  if (!value) return null;
  return value;
};

const removeData = async (key: string) => {
  await AsyncStorage.removeItem(key);
};

export { setData, getData, removeData };
