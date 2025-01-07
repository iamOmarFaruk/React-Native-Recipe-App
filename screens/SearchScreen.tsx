import React from "react";
import {
	SafeAreaView,
	TextInput,
	StyleSheet,
	FlatList,
	Text,
	View,
	Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
const SearchScreen = () => {
	return (
		<SafeAreaView style={styles.safeArea}>
			<View style={styles.Searchcontainer}>
				<Ionicons name="search" size={20} color="#aaa" style={styles.icon} />
				<TextInput
					style={styles.input}
					placeholder="Search any recipes"
					placeholderTextColor="#aaa"
				/>
			</View>

			{/* search result contents */}
			<View style={styles.resultContainer}>
				{/* single card design start*/}
				<View style={styles.singleItemCard}>
					<View>
						<Image
							source={require("../assets/images/profile.jpeg")} // Replace with the path to your local image
							style={styles.singleItemCardImage}
						/>
					</View>
					<View style={styles.singleItemCardContent}>
						<Text style={styles.singleItemCardContentTitle}>Awesome Title</Text>
						<Text style={styles.singleItemCardContentDescription}>
							Lorem Ipsum Doler
						</Text>
					</View>
				</View>

				<View style={styles.singleItemCard}>
					<View>
						<Image
							source={require("../assets/images/profile.jpeg")} // Replace with the path to your local image
							style={styles.singleItemCardImage}
						/>
					</View>
					<View style={styles.singleItemCardContent}>
						<Text style={styles.singleItemCardContentTitle}>Awesome Title</Text>
						<Text style={styles.singleItemCardContentDescription}>
							Lorem Ipsum Doler
						</Text>
					</View>
				</View>

				<View style={styles.singleItemCard}>
					<View>
						<Image
							source={require("../assets/images/profile.jpeg")} // Replace with the path to your local image
							style={styles.singleItemCardImage}
						/>
					</View>
					<View style={styles.singleItemCardContent}>
						<Text style={styles.singleItemCardContentTitle}>Awesome Title</Text>
						<Text style={styles.singleItemCardContentDescription}>
							Lorem Ipsum Doler
						</Text>
					</View>
				</View>

				<View style={styles.singleItemCard}>
					<View>
						<Image
							source={require("../assets/images/profile.jpeg")} // Replace with the path to your local image
							style={styles.singleItemCardImage}
						/>
					</View>
					<View style={styles.singleItemCardContent}>
						<Text style={styles.singleItemCardContentTitle}>Awesome Title</Text>
						<Text style={styles.singleItemCardContentDescription}>
							Lorem Ipsum Doler
						</Text>
					</View>
				</View>
				{/* single card design end*/}
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

	// search result content
	resultContainer: {
		marginTop: 30,
	},
	singleItemCard: {
		display: "flex",
		flexDirection: "row",
		borderColor: "#ccc",
		borderWidth: 1,
		padding: 10,
		margin: 10,
		marginHorizontal: 20,
		borderRadius: 10,
	},
	singleItemCardImage: {
		width: 50,
		height: 50,
		borderRadius: 100,
	},
	singleItemCardContent: {
		marginLeft: 20,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	singleItemCardContentTitle: {
		color: "#333",
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 5,
	},
	singleItemCardContentDescription: {
		color: "#444",
	},
});

export default SearchScreen;
