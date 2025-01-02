import React from "react";
import { ScrollView, Text, View, Image, TouchableOpacity } from "react-native";

import { RouteProp } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/AppNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import styles from "../styles/AllRecipesScreenStyles";
import { recipes } from "../data/recipes-data";

type AllRecipesScreenProps = {
	route: RouteProp<RootStackParamList, "AllRecipes">;
};

export default function AllRecipesScreen({ route }: AllRecipesScreenProps) {
	const { title, iscategory = false } = route.params || {
		title: "All Recipes",
	};
	const navigation =
		useNavigation<NativeStackNavigationProp<RootStackParamList>>();

	if (iscategory) {
		// If no recipes match the category, show a placeholder message
		return (
			<View style={styles.screenContainer}>
				<Text>এখানে কাজ কোর্টে হবে</Text>
			</View>
		);
	}

	return (
		<View style={styles.screenContainer}>
			<ScrollView contentContainerStyle={styles.contentContainer}>
				<View style={styles.gridContainer}>
					{recipes.map((recipe) => (
						<TouchableOpacity
							key={recipe.id}
							onPress={() =>
								navigation.navigate("Details", {
									id: recipe.id,
									title: recipe.title,
									subtitle: recipe.subtitle,
									image: recipe.image,
									rating: recipe.rating,
									reviews: recipe.reviews,
								})
							}
						>
							<View style={styles.recipeCard}>
								<Image source={recipe.image} style={styles.recipeImage} />
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
							</View>
						</TouchableOpacity>
					))}
				</View>
			</ScrollView>
		</View>
	);
}
