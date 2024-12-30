import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AppNavigator";

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

export default function GridList({ title, data }: Props) {
	const navigation =
		useNavigation<NativeStackNavigationProp<RootStackParamList>>();

	const [randomImages, setRandomImages] = useState<Item[]>([]);

	const fallbackImage = "https://placehold.co/300x300?text=No+Image";

	useEffect(() => {
		// Shuffle the data and select the first 3 items
		const shuffled = [...data].sort(() => 0.5 - Math.random());
		setRandomImages(shuffled.slice(0, 3));
	}, [data]);

	return (
		<View style={styles.container}>
			{/* Header Section */}
			<View style={styles.header}>
				<Text style={styles.title}>{title}</Text>
				<Text
					style={styles.seeAll}
					onPress={() => navigation.navigate("AllRecipes", { title })} // Pass dynamic title as param
				>
					See All
				</Text>
			</View>

			{/* Grid Layout */}
			<View style={styles.gridContainer}>
				{/* First Column */}
				<View style={styles.leftColumn}>
					<Image
						source={{
							uri: randomImages[0]?.image || fallbackImage,
						}}
						style={styles.largeImage}
					/>
				</View>

				{/* Second Column */}
				<View style={styles.rightColumn}>
					{/* Top Image */}
					<Image
						source={{
							uri: randomImages[1]?.image || fallbackImage,
						}}
						style={styles.smallImage}
					/>

					{/* Bottom Image with Overlay */}
					<View style={styles.overlayContainer}>
						<Image
							source={{
								uri: randomImages[2]?.image || fallbackImage,
							}}
							style={styles.smallImage}
						/>
						<View style={styles.overlay}>
							<Text style={styles.overlayText}>{data.length}+ Recipes</Text>
						</View>
					</View>
				</View>
			</View>
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
	gridContainer: {
		height: 190,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	leftColumn: {
		width: "60%",
	},
	rightColumn: {
		width: "35%", // Adjusting for spacing between columns
		justifyContent: "space-between",
	},
	largeImage: {
		width: "100%",
		height: 190,
		borderRadius: 12,
	},
	smallImage: {
		width: "100%",
		height: 85,
		borderRadius: 12,
	},
	overlayContainer: {
		position: "relative",
	},
	overlay: {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent overlay
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 12,
	},
	overlayText: {
		color: "#fff",
		fontSize: 16,
		fontWeight: "bold",
	},
});
