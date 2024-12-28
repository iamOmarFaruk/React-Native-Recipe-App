import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';



export default function Footer() {
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.footerButton}>
        <MaterialIcons name="home" size={24} color="black" />
        <Text style={styles.footerText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerButton}>
        <MaterialIcons name="search" size={24} color="black" />
        <Text style={styles.footerText}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerButton}>
        <MaterialIcons name="bookmark" size={24} color="black" />
        <Text style={styles.footerText}>Bookmark</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerButton}>
        <MaterialIcons name="person" size={24} color="black" />
        <Text style={styles.footerText}>Profile</Text>
      </TouchableOpacity>
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
