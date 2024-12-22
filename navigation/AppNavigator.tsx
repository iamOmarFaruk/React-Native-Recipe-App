import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import AllCategoriesScreen from '../screens/AllCategoriesScreen';

// Define types for the navigation stack
export type RootStackParamList = {
  Home: undefined;
  Details: undefined;
  AllCategories: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
   <NavigationContainer>
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Details" component={DetailsScreen} />
    <Stack.Screen 
      name="AllCategories" 
      component={AllCategoriesScreen} 
      options={{ 
        headerShown: true, 
        headerTitle: 'All Available Categories', // Custom header title
        headerTintColor: '#4CAF50', // Green back button color
        headerTitleStyle: { 
          color: '#000', // Make title text black
          fontWeight: 'bold', // Optional: Add bold styling
          fontSize: 18, // Optional: Adjust font size
        },
      }} 
    />
   
  </Stack.Navigator>
</NavigationContainer>
  );
}
