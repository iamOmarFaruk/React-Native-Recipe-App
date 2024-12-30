import React, { useRef, useEffect } from "react";
import {
	ScrollView,
	StyleSheet,
	Text,
	View,
	Image,
	Dimensions,
	Animated,
} from "react-native";
import { recipes } from "../data/recipes-data";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/AppNavigator";

type AllRecipesScreenProps = {
	route: RouteProp<RootStackParamList, "AllRecipes">;
};

export default function AllRecipesScreen({ route }: AllRecipesScreenProps) {
	const { title } = route.params || { title: "All Recipes" }; // Use default title if not provided
	// Animations for each card
	const animations = useRef(recipes.map(() => new Animated.Value(50))).current;

	// Randomize ratings
	const generateRandomRating = () => {
		const rating = (Math.random() * (5 - 4) + 4).toFixed(1); // Between 4.0 and 5.0
		const reviews = Math.floor(Math.random() * 2000) + 500; // Between 500 and 2500
		return { rating, reviews };
	};

	// Randomize recipe order
	const randomizedRecipes = recipes
		.map((recipe) => ({ ...recipe, ...generateRandomRating() }))
		.sort(() => Math.random() - 0.5);

	// Start animations on mount
	useEffect(() => {
		Animated.stagger(
			100,
			animations.map((animation) =>
				Animated.timing(animation, {
					toValue: 0,
					duration: 600,
					useNativeDriver: true,
				})
			)
		).start();
	}, [animations]);

	return (
		<View style={styles.screenContainer}>
			<ScrollView contentContainerStyle={styles.contentContainer}>
				<View style={styles.gridContainer}>
					{randomizedRecipes.map((recipe, index) => (
						<Animated.View
							key={recipe.id}
							style={[
								styles.recipeCard,
								{ transform: [{ translateY: animations[index] }] },
							]}
						>
							<Image
								source={{ uri: recipe.image }}
								style={styles.recipeImage}
							/>
							<View style={styles.recipeInfo}>
								<Text style={styles.recipeTitle}>{recipe.title}</Text>
								<Text style={styles.recipeSubtitle}>{recipe.subtitle}</Text>
								<View style={styles.ratingContainer}>
									<Text style={styles.recipeRating}>
										⭐ {recipe.rating}
										<Text style={styles.recipeRatingCount}>
											({recipe.reviews} reviews)
										</Text>
									</Text>
								</View>
							</View>
						</Animated.View>
					))}
				</View>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	screenContainer: {
		flex: 1,
		backgroundColor: "#fff",
	},
	contentContainer: {
		paddingVertical: 20,
		paddingHorizontal: 10,
	},
	gridContainer: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-between",
	},
	recipeCard: {
		width: Dimensions.get("window").width / 2 - 20, // Two cards per row
		marginBottom: 15,
		backgroundColor: "#fff",
		borderRadius: 15,
		overflow: "hidden",
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 5,
		elevation: 3,
		borderWidth: 1,
		borderColor: "#f0f0f0",
	},
	recipeImage: {
		width: "100%",
		height: 120,
	},
	recipeInfo: {
		padding: 10,
	},
	recipeTitle: {
		fontSize: 16,
		fontWeight: "600",
		color: "#333",
	},
	recipeSubtitle: {
		fontSize: 12,
		color: "#777",
		marginTop: 5,
	},
	ratingContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: 5,
	},
	recipeRating: {
		fontSize: 14,
		fontWeight: "bold",
		color: "#4CAF50",
	},
	recipeRatingCount: {
		fontSize: 12,
		fontWeight: "normal",
		color: "#777",
	},
});
