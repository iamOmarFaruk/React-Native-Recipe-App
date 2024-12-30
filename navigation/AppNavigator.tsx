import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import AllCategoriesScreen from "../screens/AllCategoriesScreen";
import AllRecipesScreen from "../screens/AllRecipesScreen";
import SearchScreen from "../screens/SearchScreen";
import BookmarkScreen from "../screens/BookmarkScreen";
import ProfileScreen from "../screens/ProfileScreen";
import Layout from "../layouts/Layout";

export type RootStackParamList = {
	Home: undefined;
	Details: undefined;
	AllCategories: undefined;
	AllRecipes: undefined;
	Search: undefined;
	Bookmark: undefined;
	Profile: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				{/* Home Screen */}
				<Stack.Screen
					name="Home"
					children={() => (
						<Layout>
							<HomeScreen />
						</Layout>
					)}
				/>

				{/* Details Screen */}
				<Stack.Screen
					name="Details"
					children={() => (
						<Layout>
							<DetailsScreen />
						</Layout>
					)}
				/>

				{/* All Categories Screen */}
				<Stack.Screen
					name="AllCategories"
					children={() => (
						<Layout>
							<AllCategoriesScreen />
						</Layout>
					)}
					options={{
						headerShown: true,
						headerTitle: "All Categories",
						headerTintColor: "#4CAF50",
						headerStyle: {
							backgroundColor: "#fff",
						},
						headerTitleStyle: {
							fontWeight: "bold",
							fontSize: 18,
						},
					}}
				/>

				{/* All Recipes Screen */}
				<Stack.Screen
					name="AllRecipes"
					children={() => (
						<Layout>
							<AllRecipesScreen />
						</Layout>
					)}
					options={{
						headerShown: true,
						headerTitle: "All Recipes", // Updated title for clarity
						headerTintColor: "#4CAF50",
						headerStyle: {
							backgroundColor: "#fff",
						},
						headerTitleStyle: {
							fontWeight: "bold",
							fontSize: 18,
						},
					}}
				/>

				{/* Search Screen */}
				<Stack.Screen
					name="Search"
					children={() => (
						<Layout>
							<SearchScreen />
						</Layout>
					)}
				/>

				{/* Bookmark Screen */}
				<Stack.Screen
					name="Bookmark"
					children={() => (
						<Layout>
							<BookmarkScreen />
						</Layout>
					)}
				/>

				{/* Profile Screen */}
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
