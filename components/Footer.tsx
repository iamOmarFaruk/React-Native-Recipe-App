import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation, useNavigationState } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator'; // Adjust the path as needed

type IconName = keyof typeof MaterialIcons.glyphMap;

const tabs: { name: keyof RootStackParamList; icon: IconName }[] = [
  { name: 'Home', icon: 'home' },
  { name: 'Search', icon: 'search' },
  { name: 'Bookmark', icon: 'bookmark' },
  { name: 'Profile', icon: 'person' },
];

export default function Footer() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const currentRouteName = useNavigationState((state) => state.routes[state.index]?.name as keyof RootStackParamList);

  return (
    <View style={styles.footer}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.name}
          style={styles.footerButton}
          onPress={() => navigation.navigate(tab.name)}
        >
          <MaterialIcons
            name={tab.icon}
            size={24}
            color={currentRouteName === tab.name ? '#4CAF50' : 'black'} // Green for active tab
          />
          <Text
            style={[
              styles.footerText,
              currentRouteName === tab.name && { color: '#4CAF50' }, // Green text for active tab
            ]}
          >
            {tab.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 70,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  footerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
  },
  footerText: {
    fontSize: 12,
    color: '#000',
    marginTop: 5,
  },
});
