import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import { SafeAreaView } from 'react-native-safe-area-context';
import CategoriesComponent from '../components/CategoriesComponent';
import HorizontalList from '../components/HorizontalList';
import GridList from '../components/GridList';

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const recommendationData = [
  { id: 1, title: 'Creamy Pasta', subtitle: 'By David Charles', image: 'https://images.unsplash.com/photo-1633337474564-1d9478ca4e2e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3JlYW15JTIwcGFzdGF8ZW58MHx8MHx8fDA%3D' },
  { id: 2, title: 'Macarons', subtitle: 'By Rachel William', image: 'https://images.unsplash.com/photo-1673901689635-878bea1c8490?q=80&w=3874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 3, title: 'Chicken Salad', subtitle: 'By Samuel Green', image: 'https://images.unsplash.com/photo-1597130870006-c951f120bb8a?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 4, title: 'Grilled Cheese', subtitle: 'By John Doe', image: 'https://images.unsplash.com/photo-1528736235302-52922df5c122?q=80&w=3954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 5, title: 'Tomato Soup', subtitle: 'By Jane Smith', image: 'https://images.unsplash.com/photo-1692776407523-8f3c4678ad36?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 6, title: 'Avocado Toast', subtitle: 'By Alex Brown', image: 'https://images.unsplash.com/photo-1498962960328-5cefb5d8d446?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 7, title: 'Caesar Salad', subtitle: 'By Emily White', image: 'https://images.unsplash.com/photo-1633368475188-1f39151aa4e4?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 8, title: 'Pancakes', subtitle: 'By Chris Green', image: 'https://images.unsplash.com/photo-1497445702960-c21c96af4c68?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 9, title: 'Chocolate Cake', subtitle: 'By Sarah Black', image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=3900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 10, title: 'Fruit Smoothie', subtitle: 'By Kevin Blue', image: 'https://images.unsplash.com/photo-1497888329096-51c27beff665?q=80&w=3871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

export default function HomeScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Header Section */}
        <Header />
        <SearchBar />
        <CategoriesComponent />
        <HorizontalList title="Recommendation" data={recommendationData} />
        <GridList title="Recently Viewed" data={recommendationData} />
        <HorizontalList title="Recommendation" data={recommendationData} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff', // Matches your screen background
  },
  contentContainer: {
    paddingBottom: 20, // Add padding to prevent content from being cut off
  },
});
