import React from "react";
import {
	SafeAreaView,
	StyleSheet,
	FlatList,
	View,
	TouchableOpacity,
} from "react-native";
import SingleItemCard from "../components/SingleItemCard";

const BookmarkScreen = () => {
	const bookmarkedData = [
		{
			id: 1,
			title: "Recipe 1",
			subtitle: "Delicious dish",
			image: require("../assets/images/profile.jpeg"),
		},
		{
			id: 2,
			title: "Recipe 2",
			subtitle: "Tasty treat",
			image: require("../assets/images/profile.jpeg"),
		},
		{
			id: 3,
			title: "Recipe 3",
			subtitle: "Yummy meal",
			image: require("../assets/images/profile.jpeg"),
		},
		{
			id: 4,
			title: "Recipe 4",
			subtitle: "Healthy snack",
			image: require("../assets/images/profile.jpeg"),
		},
		{
			id: 5,
			title: "Recipe 5",
			subtitle: "Savory delight",
			image: require("../assets/images/profile.jpeg"),
		},
		{
			id: 6,
			title: "Recipe 6",
			subtitle: "Savory delight",
			image: require("../assets/images/profile.jpeg"),
		},
	];

	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				data={bookmarkedData}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) => (
					<TouchableOpacity>
						<SingleItemCard
							title={item.title}
							description={item.subtitle}
							image={item.image}
						/>
					</TouchableOpacity>
				)}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		padding: 10,
	},
});

export default BookmarkScreen;
