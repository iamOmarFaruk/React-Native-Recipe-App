import React, { useState } from "react";
import {
	SafeAreaView,
	TextInput,
	StyleSheet,
	FlatList,
	Text,
	View,
	TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SingleItemCard from "../components/SingleItemCard";
import { recipes } from "../data/recipes-data";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/AppNavigator";
import NotFoundArea from "../components/NotFoundArea";

const SearchScreen = () => {
	const [searchQuery, setSearchQuery] = useState<string>("");
	const [searchResults, setSearchResults] = useState(recipes);
	const navigation = useNavigation<NavigationProp<RootStackParamList>>();

	// Handle search logic
	const handleSearch = (query: string) => {
		setSearchQuery(query);
		if (query.trim() === "") {
			setSearchResults(recipes);
		} else {
			const filteredResults = recipes.filter((recipe) =>
				recipe.title.toLowerCase().includes(query.toLowerCase())
			);
			setSearchResults(filteredResults);
		}
	};

	return (
		<SafeAreaView style={styles.safeArea}>
			{/* Search Input */}
			<View style={styles.Searchcontainer}>
				<Ionicons name="search" size={20} color="#aaa" style={styles.icon} />
				<TextInput
					style={styles.input}
					placeholder="Search any recipes"
					placeholderTextColor="#aaa"
					value={searchQuery}
					onChangeText={handleSearch}
				/>
			</View>

			{/* Search Summary */}
			<View style={styles.searchForWhat}>
				{searchQuery ? (
					<View style={{ flexDirection: "row", alignItems: "center" }}>
						<Text style={styles.searchText}>You searched for: </Text>
						<Text style={{ fontWeight: "bold" }}>{searchQuery}</Text>
					</View>
				) : (
					<Text style={styles.searchText}>
						Search for your favorite recipes
					</Text>
				)}
			</View>

			{/* Search Results */}
			<View style={styles.resultContainer}>
				<FlatList
					data={searchResults}
					keyExtractor={(item) => item.id.toString()}
					renderItem={({ item }) => (
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
							<SingleItemCard
								title={item.title}
								description={item.subtitle}
								image={item.image}
							/>
						</TouchableOpacity>
					)}
					ListEmptyComponent={() => (
						<NotFoundArea
							message="No results found"
							imageSource={require("../assets/no-result.png")}
						/>
					)}
				/>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: "#fff",
	},
	Searchcontainer: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#fff",
		borderRadius: 25,
		paddingHorizontal: 16,
		paddingVertical: 8,
		marginHorizontal: 20,
		borderWidth: 1,
		borderColor: "#ccc",
		minHeight: 50,
		marginTop: 30,
	},
	icon: {
		marginRight: 10,
	},
	input: {
		flex: 1,
		fontSize: 16,
		color: "#000",
	},
	searchForWhat: {
		textAlign: "center",
		justifyContent: "center",
		alignItems: "center",
		marginTop: 20,
	},
	searchText: {
		fontSize: 16,
		color: "#555",
	},
	resultContainer: {
		marginTop: 30,
		flex: 1,
	},
});

export default SearchScreen;
