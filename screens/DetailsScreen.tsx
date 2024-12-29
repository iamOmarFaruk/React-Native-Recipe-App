import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CategoriesComponent from '../components/CategoriesComponent';

export default function DetailsScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.header}>
          <Text style={styles.text}>This is the Details Screen!</Text>
          <Button
            title="Go to Home"
            onPress={() => navigation.navigate('Home')}
            color="#4CAF50" // Green button color
          />
        </View>

        {/* Categories Section */}
        <View style={styles.categories}>
          <CategoriesComponent />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5', // Matches the design
  },
  contentContainer: {
    paddingBottom: 20,
    paddingHorizontal: 15, // Add horizontal padding for content alignment
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  categories: {
    marginTop: 20,
  },
});
