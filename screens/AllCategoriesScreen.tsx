import React, { useEffect, useRef } from "react";
import {
	FlatList,
	StyleSheet,
	Text,
	View,
	Dimensions,
	TouchableOpacity,
	Animated,
} from "react-native";
import { Image } from "expo-image";
import { categories } from "../data/categories-data";
import { getRandomColor } from "../data/colors";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AppNavigator";

export default function AllCategoriesScreen() {
	const navigation =
		useNavigation<NativeStackNavigationProp<RootStackParamList>>();

	const animatedValues = useRef(
		categories.map(() => new Animated.Value(50))
	).current; // Initial Y offset for each card

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

	const renderItem = ({ item, index }: { item: any; index: number }) => {
		const animatedStyle = {
			transform: [{ translateY: animatedValues[index] }], // Slide-up animation
		};

		return (
			<TouchableOpacity
				onPress={() =>
					navigation.navigate("AllRecipes", {
						title: item.name,
						iscategory: true,
					})
				}
			>
				<Animated.View
					style={[
						styles.categoryCard,
						{ backgroundColor: getRandomColor() },
						animatedStyle,
					]}
				>
					<Image source={item.image} style={styles.categoryImage} />
					<Text style={styles.categoryName}>{item.name}</Text>
				</Animated.View>
			</TouchableOpacity>
		);
	};

	return (
		<View style={styles.screenContainer}>
			<FlatList
				data={categories}
				numColumns={2}
				keyExtractor={(item) => item.id.toString()}
				renderItem={renderItem}
				contentContainerStyle={styles.contentContainer}
			/>
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
	categoryCard: {
		width: Dimensions.get("window").width / 2 - 20, // 2 cards per row with spacing
		height: 120, // Adjust card height
		borderRadius: 15,
		marginBottom: 15,
		padding: 10,
		margin: 5,
		overflow: "hidden",
		position: "relative", // To position image absolutely
	},
	categoryImage: {
		width: 100,
		height: 100,
		position: "absolute",
		top: -10,
		right: -10, // Align to the top-right corner
		borderRadius: 100,
	},
	categoryName: {
		fontSize: 18,
		fontWeight: "600",
		color: "#000",
		position: "absolute",
		bottom: 15,
		left: 10, // Align to the bottom-left corner
	},
});
