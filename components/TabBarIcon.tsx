import FontAwesome from '@expo/vector-icons/Octicons';
import { StyleSheet } from 'react-native';

export const TabBarIcon = (props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
  size?: number;
}) => {
  return <FontAwesome style={styles.tabBarIcon} {...props} />;
};

export const styles = StyleSheet.create({
  tabBarIcon: {
    marginBottom: -3,
  },
});
