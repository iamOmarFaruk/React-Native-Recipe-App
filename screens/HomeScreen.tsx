import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import CategoriesComponent from "../components/CategoriesComponent";
import HorizontalList from "../components/HorizontalList";
import GridList from "../components/GridList";
import { recipes } from "../data/recipes-data";

import Animated from "react-native-reanimated";
export default function HomeScreen() {
	return (
		<SafeAreaView style={styles.safeArea}>
			<Animated.ScrollView
				contentContainerStyle={styles.contentContainer}
				scrollEventThrottle={16}
			>
				{/* Header */}
				<Header />

				{/* Search Bar */}
				<SearchBar />
				{/* Categories Section */}
				<CategoriesComponent />
				{/* Recommendations */}
				<HorizontalList title="Recommendation" data={recipes} />
				{/* Popular Recipes */}
				<GridList title=" Popular Recipes" data={recipes} />
				{/* Cooking Trends */}
				<HorizontalList title="Cooking Trends" data={recipes} />
				{/* Recently Viewed */}
				<GridList title="Recently Viewed" data={recipes} />
			</Animated.ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: "#fff", // Background color matches the app design
	},
	contentContainer: {
		paddingBottom: 10, // Space for Footer to avoid overlap
	},
});
