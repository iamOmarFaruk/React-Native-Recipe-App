import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
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
			<View style={styles.container}>
				<Image source={image} style={styles.image} />
				<Text style={styles.title}>{title || "No Title"}</Text>
				<Text style={styles.subtitle}>{subtitle || "No Subtitle"}</Text>
				<Text style={styles.rating}>
					⭐ {rating || "4.5"}{" "}
					<Text style={styles.reviews}>
						({(reviews ?? 1000).toLocaleString()} reviews)
					</Text>
				</Text>
				<Button
					title="Go to Home"
					onPress={() => navigation.navigate("Home")}
					color="#4CAF50"
				/>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeArea: { flex: 1, backgroundColor: "#fff" },
	container: { padding: 20, alignItems: "center" },
	image: { width: 200, height: 200, borderRadius: 12, marginBottom: 16 },
	title: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 8,
		textAlign: "center",
	},
	subtitle: {
		fontSize: 16,
		color: "#777",
		marginBottom: 8,
		textAlign: "center",
	},
	rating: {
		fontSize: 16,
		color: "#4CAF50",
		fontWeight: "bold",
		marginBottom: 8,
	},
	reviews: { fontSize: 14, color: "#777" },
});
