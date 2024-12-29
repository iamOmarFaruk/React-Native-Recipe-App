import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator'; 

// Dynamic Navigation Prop Type
type GenericNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const categories = [
  { 
    id: 1, 
    name: 'Breakfast', 
    image: 'https://images.unsplash.com/photo-1504708706948-13d6cbba4062?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
  },
  { 
    id: 2, 
    name: 'Lunch', 
    image: 'https://plus.unsplash.com/premium_photo-1672242676674-f4349cc6470e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
  },
  { 
    id: 3, 
    name: 'Dinner', 
    image: 'https://images.unsplash.com/photo-1729551193352-6d3fce504f4c?q=80&w=3012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
  },
  { 
    id: 4, 
    name: 'Dessert', 
    image: 'https://images.unsplash.com/photo-1516919549054-e08258825f80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
  },
  { 
    id: 5, 
    name: 'Snacks', 
    image: 'https://images.unsplash.com/photo-1628438863282-1f43ed5ab2db?q=80&w=3431&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
  },
  { 
    id: 6, 
    name: 'Beverages', 
    image: 'https://images.unsplash.com/photo-1632850210350-4c9d8a6cc236?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
  },
  { 
    id: 7, 
    name: 'Healthy', 
    image: 'https://images.unsplash.com/photo-1494390248081-4e521a5940db?q=80&w=3412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
  },
  { 
    id: 8, 
    name: 'Vegan', 
    image: 'https://plus.unsplash.com/premium_photo-1712604940148-381112f91511?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
  },
  { 
    id: 9, 
    name: 'Soups', 
    image: 'https://images.unsplash.com/photo-1670518045324-6c1f1942b2b8?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
  },
  { 
    id: 10, 
    name: 'Quick Meals', 
    image: 'https://images.unsplash.com/photo-1512034400317-de97d7d6c3ed?q=80&w=2632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
  },
];

export default function CategoriesComponent() {
  const navigation = useNavigation<GenericNavigationProp>();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Categories</Text>
        <TouchableOpacity onPress={() => navigation.navigate('AllCategories')}>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category) => (
          <View key={category.id} style={styles.category}>
            <Image source={{ uri: category.image }} style={styles.image} />
            <Text style={styles.categoryName}>{category.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  seeAll: {
    fontSize: 14,
    color: '#4CAF50',
    fontWeight: '500',
  },
  category: {
    alignItems: 'center',
    marginRight: 15,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 5,
  },
  categoryName: {
    fontSize: 12,
    color: '#000',
    textAlign: 'center',
  },
});
