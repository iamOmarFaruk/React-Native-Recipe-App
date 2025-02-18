import React from "react";
import {
	View,
	Text,
	ScrollView,
	Image,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AppNavigator";
import { categories } from "../data/categories-data";

// Dynamic Navigation Prop Type
type GenericNavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function CategoriesComponent() {
	const navigation = useNavigation<GenericNavigationProp>();

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.title}>Categories</Text>
				<TouchableOpacity onPress={() => navigation.navigate("AllCategories")}>
					<Text style={styles.seeAll}>See All</Text>
				</TouchableOpacity>
			</View>

			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				{categories.map((category) => (
					<TouchableOpacity
						key={category.id}
						style={styles.category}
						onPress={() =>
							navigation.navigate("AllRecipes", {
								title: category.name,
								iscategory: true,
							})
						}
					>
						<Image source={category.image} style={styles.image} />
						<Text style={styles.categoryName}>{category.name}</Text>
					</TouchableOpacity>
				))}
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: 30,
		marginHorizontal: 16,
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 20,
	},
	title: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#000",
	},
	seeAll: {
		fontSize: 14,
		color: "#4CAF50",
		fontWeight: "500",
	},
	category: {
		alignItems: "center",
		marginRight: 15,
		backgroundColor: "#fff",
		paddingVertical: 10,
		paddingHorizontal: 10,
		borderRadius: 12,
		borderColor: "#f0f0f0",
		borderWidth: 1,
	},
	image: {
		width: 60,
		height: 60,
		borderRadius: 30,
		marginBottom: 5,
	},
	categoryName: {
		fontSize: 12,
		color: "#000",
		textAlign: "center",
	},
});
