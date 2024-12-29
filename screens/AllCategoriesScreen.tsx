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
import { categories } from "../data/categories-data";

export default function AllCategoriesScreen() {
	const animations = useRef(
		categories.map(() => new Animated.Value(50))
	).current; // Initial Y offset for each card

	// Trigger animations on component mount
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

	// Generate random soft background colors
	const getRandomColor = () => {
		const colors = [
			"#FCE4EC",
			"#F3E5F5",
			"#E8EAF6",
			"#E3F2FD",
			"#E0F7FA",
			"#E0F2F1",
			"#E8F5E9",
			"#FFFDE7",
			"#FFF3E0",
			"#FBE9E7",
		];
		return colors[Math.floor(Math.random() * colors.length)];
	};

	return (
		<View style={styles.screenContainer}>
			<ScrollView contentContainerStyle={styles.contentContainer}>
				<View style={styles.gridContainer}>
					{categories.map((category, index) => (
						<Animated.View
							key={category.id}
							style={[
								styles.categoryCard,
								{
									backgroundColor: getRandomColor(),
									transform: [{ translateY: animations[index] }], // Slide-up animation
								},
							]}
						>
							<Image
								source={{ uri: category.image }}
								style={styles.categoryImage}
							/>
							<Text style={styles.categoryName}>{category.name}</Text>
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
	categoryCard: {
		width: Dimensions.get("window").width / 2 - 20, // 2 cards per row with spacing
		height: 120, // Adjust card height
		borderRadius: 15,
		marginBottom: 15,
		padding: 10,
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
