import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
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
  const [activeTab, setActiveTab] = React.useState<keyof RootStackParamList>('Home'); // Default active tab

  return (
    <View style={styles.footer}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.name}
          style={styles.footerButton}
          onPress={() => {
            setActiveTab(tab.name); // Update active tab
            navigation.navigate(tab.name); // Navigate to the corresponding screen
          }}
        >
          <MaterialIcons
            name={tab.icon}
            size={24}
            color={activeTab === tab.name ? '#4CAF50' : 'black'} // Green for active tab
          />
          <Text
            style={[
              styles.footerText,
              activeTab === tab.name && { color: '#4CAF50' }, // Green text for active tab
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
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fff',
  },
  footerButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#000',
    marginTop: 4,
  },
});
