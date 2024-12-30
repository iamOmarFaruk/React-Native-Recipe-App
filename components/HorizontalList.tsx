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
import { RootStackParamList } from "../navigation/AppNavigator"; // Update the path as needed

type Item = {
	id: number;
	title: string;
	subtitle: string;
	image: string;
};

type Props = {
	title: string;
	data: Item[];
};

export default function HorizontalList({ title, data }: Props) {
	const navigation =
		useNavigation<NativeStackNavigationProp<RootStackParamList>>();

	// Randomize the data
	const randomizedData = [...data].sort(() => Math.random() - 0.5);

	return (
		<View style={styles.container}>
			{/* Header */}
			<View style={styles.header}>
				<Text style={styles.title}>{title}</Text>
				<TouchableOpacity onPress={() => navigation.navigate("AllRecipes")}>
					<Text style={styles.seeAll}>See All</Text>
				</TouchableOpacity>
			</View>

			{/* Scrollable List */}
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				{randomizedData.map((item) => (
					<View key={item.id} style={styles.card}>
						<Image source={{ uri: item.image }} style={styles.image} />
						<Text style={styles.cardTitle}>{item.title}</Text>
						<Text style={styles.cardSubtitle}>{item.subtitle}</Text>
					</View>
				))}
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: 20,
		marginHorizontal: 16,
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 20,
		marginTop: 20,
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
	card: {
		marginRight: 15,
		backgroundColor: "#fff",
		borderRadius: 12,
		overflow: "hidden",
		width: 120,
		borderColor: "#f0f0f0",
		elevation: 3,
		borderWidth: 1,
	},
	image: {
		width: "100%",
		height: 80,
	},
	cardTitle: {
		fontSize: 14,
		fontWeight: "600",
		color: "#000",
		marginHorizontal: 8,
		marginTop: 8,
		marginBottom: 5,
	},
	cardSubtitle: {
		fontSize: 12,
		color: "#777",
		marginHorizontal: 8,
		marginBottom: 8,
	},
});
