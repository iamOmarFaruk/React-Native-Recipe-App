import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import AllCategoriesScreen from '../screens/AllCategoriesScreen';
import SearchScreen from '../screens/SearchScreen';
import BookmarkScreen from '../screens/BookmarkScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Layout from '../layouts/Layout';

export type RootStackParamList = {
  Home: undefined;
  Details: undefined;
  AllCategories: undefined;
  Search: undefined;
  Bookmark: undefined;
  Profile: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Home"
          children={() => (
            <Layout>
              <HomeScreen />
            </Layout>
          )}
        />
        <Stack.Screen
          name="Details"
          children={() => (
            <Layout>
              <DetailsScreen />
            </Layout>
          )}
        />

        {/* All Categories Start */}
     <Stack.Screen
  name="AllCategories"
  children={() => (
    <Layout>
      <AllCategoriesScreen />
    </Layout>
  )}
  options={{
    headerShown: true,
    headerTitle: 'All Categories',
    headerTintColor: '#4CAF50',
    headerStyle: {
      backgroundColor: '#fff',
    },
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 18,
    },
  }}
/>


         {/* All Categories Start */}




        <Stack.Screen
          name="Search"
          children={() => (
            <Layout>
              <SearchScreen />
            </Layout>
          )}
        />
        <Stack.Screen
          name="Bookmark"
          children={() => (
            <Layout>
              <BookmarkScreen />
            </Layout>
          )}
        />
        <Stack.Screen
          name="Profile"
          children={() => (
            <Layout>
              <ProfileScreen />
            </Layout>
          )}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
