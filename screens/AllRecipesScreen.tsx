import React, { useRef, useEffect } from "react";
import {
	FlatList,
	Text,
	View,
	Image,
	TouchableOpacity,
	Animated,
} from "react-native";
import { RouteProp } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/AppNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import styles from "../styles/AllRecipesScreenStyles";
import { recipes } from "../data/recipes-data";
import NotFoundArea from "../components/NotFoundArea";

type AllRecipesScreenProps = {
	route: RouteProp<RootStackParamList, "AllRecipes">;
};

export default function AllRecipesScreen({ route }: AllRecipesScreenProps) {
	const { title, iscategory = false } = route.params || {
		title: "All Recipes",
	};
	const navigation =
		useNavigation<NativeStackNavigationProp<RootStackParamList>>();

	const animatedValues = useRef(
		recipes.map(() => new Animated.Value(50))
	).current;

	useEffect(() => {
		Animated.stagger(
			100,
			animatedValues.map((anim) =>
				Animated.spring(anim, {
					toValue: 0,
					useNativeDriver: true,
				})
			)
		).start();
	}, [animatedValues]);

	const renderRecipe = ({ item, index }: { item: any; index: number }) => {
		const animatedStyle = {
			transform: [{ translateY: animatedValues[index] }],
		};

		return (
			<TouchableOpacity
				onPress={() =>
					navigation.navigate("Details", {
						id: item.id,
						title: item.title,
						subtitle: item.subtitle,
						image: item.image,
						rating: item.rating,
						reviews: item.reviews,
					})
				}
			>
				<Animated.View style={[styles.recipeCard, animatedStyle]}>
					<Image source={item.image} style={styles.recipeImage} />
					<View style={styles.recipeInfo}>
						<Text style={styles.recipeTitle}>{item.title}</Text>
						<Text style={styles.recipeSubtitle}>{item.subtitle}</Text>
						<View style={styles.ratingContainer}>
							<Text style={styles.recipeRating}>
								⭐ {item.rating}
								<Text style={styles.recipeRatingCount}>
									({item.reviews} reviews)
								</Text>
							</Text>
						</View>
					</View>
				</Animated.View>
			</TouchableOpacity>
		);
	};

	const filteredRecipes = iscategory
		? recipes.filter((recipe) =>
				recipe.category.some(
					(cat) => cat.toLowerCase() === title?.toLowerCase()
				)
		  )
		: recipes;

	return (
		<View style={styles.screenContainer}>
			{filteredRecipes.length === 0 ? (
				<View
					style={{
						flex: 1,
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<NotFoundArea
						message="No recipes found in this category"
						imageSource={require("../assets/no-result.png")}
					/>
				</View>
			) : (
				<FlatList
					data={filteredRecipes}
					renderItem={renderRecipe}
					keyExtractor={(item) => item.id.toString()}
					contentContainerStyle={styles.contentContainer}
					numColumns={2}
				/>
			)}
		</View>
	);
}
