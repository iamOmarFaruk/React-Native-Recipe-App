import React, { useEffect, useState } from "react";
import {
	SafeAreaView,
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";
import SingleItemCard from "../components/SingleItemCard";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/AppNavigator";
import { SwipeListView } from "react-native-swipe-list-view";
import NotFoundArea from "../components/NotFoundArea";

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
					const parsed: BookmarkItem[] = JSON.parse(bookmarks);
					// Remove duplicates
					const unique = Array.from(
						new Map(parsed.map((item) => [item.id, item])).values()
					);
					setBookmarkedData(unique);
				}
			} catch (error) {
				console.error("Failed to load bookmarks", error);
			}
		};
		fetchBookmarks();
	}, []);

	const removeBookmark = async (id: number) => {
		try {
			const updated = bookmarkedData.filter((item) => item.id !== id);
			setBookmarkedData(updated);
			await AsyncStorage.setItem("bookmarks", JSON.stringify(updated));
			Toast.show({
				type: "success",
				text1: "Removed",
				text2: "Item removed from bookmarks.",
			});
		} catch (error) {
			console.error("Failed to remove bookmark", error);
			Toast.show({
				type: "error",
				text1: "Error",
				text2: "Failed to remove bookmark.",
			});
		}
	};

	if (bookmarkedData.length === 0) {
		return (
			<SafeAreaView style={styles.container}>
				<NotFoundArea
					message="No bookmarks found"
					imageSource={require("../assets/no-result.png")}
				/>
			</SafeAreaView>
		);
	}

	return (
		<SafeAreaView style={styles.container}>
			<SwipeListView
				data={bookmarkedData}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) => (
					<View style={styles.rowFront}>
						<SingleItemCard
							title={item.title}
							description={item.subtitle}
							image={item.image}
						/>
					</View>
				)}
				renderHiddenItem={({ item }) => (
					<View style={styles.rowBack}>
						<TouchableOpacity
							style={[styles.actionButton, styles.viewButton]}
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
							<Text style={styles.actionText}>View</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={[styles.actionButton, styles.deleteButton]}
							onPress={() => removeBookmark(item.id)}
						>
							<Text style={styles.actionText}>Delete</Text>
						</TouchableOpacity>
					</View>
				)}
				rightOpenValue={-160}
			/>
			<Toast />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		padding: 10,
	},
	rowFront: {
		backgroundColor: "#fff",
		marginBottom: 10,
		borderRadius: 8,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.2,
		shadowRadius: 1.41,
		elevation: 2,
		flex: 1,
	},
	rowBack: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: "center",
		marginBottom: 10,
	},
	actionButton: {
		justifyContent: "center",
		alignItems: "center",
		width: 80,
		height: "100%",
	},
	viewButton: {
		backgroundColor: "#4CAF50",
		borderTopLeftRadius: 8,
		borderBottomLeftRadius: 8,
	},
	deleteButton: {
		backgroundColor: "red",
		borderTopRightRadius: 8,
		borderBottomRightRadius: 8,
	},
	actionText: {
		color: "#fff",
		fontWeight: "bold",
	},
});

export default BookmarkScreen;
