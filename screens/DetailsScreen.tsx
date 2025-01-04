import React from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity,
	ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons"; // Using Expo's MaterialIcons
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AppNavigator";

type DetailsScreenProps = {
	route: RouteProp<RootStackParamList, "Details">;
	navigation: NativeStackNavigationProp<RootStackParamList, "Details">;
};

export default function DetailsScreen({
	route,
	navigation,
}: DetailsScreenProps) {
	const { id, title, subtitle, image, rating, reviews } = route.params;

	return (
		<SafeAreaView style={styles.safeArea}>
			{/* Fullscreen Image Section */}
			<View style={styles.imageContainer}>
				<Image source={image} style={styles.image} />
				<TouchableOpacity
					style={styles.backButton}
					onPress={() => navigation.goBack()}
				>
					<MaterialIcons name="arrow-back" size={24} color="#fff" />
				</TouchableOpacity>
			</View>

			{/* Details Section */}
			<ScrollView style={styles.detailsContainer}>
				<Text style={styles.title}>{title || "No Title"}</Text>
				<Text style={styles.subtitle}>By {subtitle || "Unknown"}</Text>

				<View style={styles.ratingContainer}>
					<Text style={styles.rating}>⭐ {rating || "4.5"}</Text>
					<Text style={styles.reviews}>
						{reviews?.toLocaleString() || "1,000"} reviews
					</Text>
				</View>

				{/* Description Section */}
				<Text style={styles.process}>Process:</Text>
				<Text style={styles.description}>
					Maxime mollitia, molestiae quas vel sint commodi repudiandae
					consequuntur voluptatum laborum numquam blanditiis harum quisquam eius
					sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident
					similique accusantium nemo autem. Veritatis obcaecati tenetur iure
					eius earum ut molestias architecto voluptate aliquam nihil, eveniet
					aliquid culpa officia aut! Impedit sit sunt...
				</Text>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeArea: { flex: 1, backgroundColor: "#fff" },
	imageContainer: {
		position: "relative",
		height: 300,
	},
	image: {
		width: "100%",
		height: "100%",
		resizeMode: "cover",
	},
	backButton: {
		position: "absolute",
		top: 20,
		left: 20,
		backgroundColor: "rgba(0, 0, 0, 0.5)",
		padding: 8,
		borderRadius: 20,
	},
	detailsContainer: {
		padding: 20,
		backgroundColor: "#fff",
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		marginTop: -20,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		textAlign: "center",
		marginBottom: 8,
	},
	subtitle: {
		fontSize: 16,
		color: "#777",
		textAlign: "center",
		marginBottom: 16,
	},
	ratingContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 16,
	},
	rating: {
		fontSize: 16,
		fontWeight: "bold",
		color: "#4CAF50",
	},
	reviews: {
		fontSize: 14,
		color: "#777",
	},
	process: {
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 8,
	},
	description: {
		fontSize: 16,
		color: "#555",
		lineHeight: 22,
	},
});
