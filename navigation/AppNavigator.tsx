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

	AllCategories: undefined;

	AllRecipes: { title?: string; iscategory?: boolean } | undefined;
	Search: undefined;
	Bookmark: undefined;
	Profile: undefined;

	Details: {
		id: number;
		title: string;
		subtitle: string;
		image: any; // Replace `any` with appropriate type if needed
		rating: string;
		reviews: number;
	};
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
					children={(props) => (
						<Layout>
							<DetailsScreen {...props} />
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
					children={({ route }) => (
						<Layout>
							<AllRecipesScreen route={route} />
						</Layout>
					)}
					options={({ route }) => ({
						headerShown: true,
						headerTitle: route?.params?.title || "All Recipes",
						headerTintColor: "#4CAF50",
						headerStyle: {
							backgroundColor: "#fff",
						},
						headerTitleStyle: {
							fontWeight: "bold",
							fontSize: 18,
						},
					})}
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
