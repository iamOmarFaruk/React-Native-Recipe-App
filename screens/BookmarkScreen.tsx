import React, { useEffect, useState } from "react";
import {
	SafeAreaView,
	StyleSheet,
	FlatList,
	View,
	TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SingleItemCard from "../components/SingleItemCard";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/AppNavigator";

interface BookmarkItem {
	id: number;
	title: string;
	subtitle: string;
	image: any;
	rating: string;
	reviews: number;
}

const BookmarkScreen = () => {
	const [bookmarkedData, setBookmarkedData] = useState<BookmarkItem[]>([]);
	const navigation = useNavigation<NavigationProp<RootStackParamList>>();

	useEffect(() => {
		const fetchBookmarks = async () => {
			try {
				const bookmarks = await AsyncStorage.getItem("bookmarks");
				if (bookmarks) {
					const parsedBookmarks: BookmarkItem[] = JSON.parse(bookmarks);
					const uniqueBookmarks: BookmarkItem[] = Array.from(
						new Map(parsedBookmarks.map((item) => [item.id, item])).values()
					).map((item) => ({
						id: item.id,
						title: item.title,
						subtitle: item.subtitle,
						image: item.image,
						rating: item.rating,
						reviews: item.reviews,
					}));
					setBookmarkedData(uniqueBookmarks);
				}
			} catch (error) {
				console.error("Failed to load bookmarks", error);
			}
		};
		fetchBookmarks();
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				data={bookmarkedData}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) => (
					// <TouchableOpacity
					// 	onPress={() =>
					// 		navigation.navigate("Details", {
					// 			id: item.id,
					// 			title: item.title,
					// 			subtitle: item.subtitle,
					// 			image: item.image,
					// 			rating: item.rating,
					// 			reviews: item.reviews,
					// 		})
					// 	}
					// >
					<SingleItemCard
						title={item.title}
						description={item.subtitle}
						image={item.image}
					/>
					// </TouchableOpacity>
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
