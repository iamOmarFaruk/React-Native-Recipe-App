import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AppNavigator";
import styles from "../styles/GridListStyles";
type Item = {
	id: number;
	title: string;
	subtitle: string;
	image: any; // Accept `require()` for local images
};

type Props = {
	title: string;
	data: Item[];
};

export default function GridList({ title, data }: Props) {
	const navigation =
		useNavigation<NativeStackNavigationProp<RootStackParamList>>();

	const [randomImages, setRandomImages] = useState<Item[]>([]);

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
					<Image source={randomImages[0]?.image} style={styles.largeImage} />
				</View>

				{/* Second Column */}
				<View style={styles.rightColumn}>
					{/* Top Image */}
					<Image source={randomImages[1]?.image} style={styles.smallImage} />

					{/* Bottom Image with Overlay */}
					<View style={styles.overlayContainer}>
						<Image source={randomImages[2]?.image} style={styles.smallImage} />
						<View style={styles.overlay}>
							<Text style={styles.overlayText}>{data.length}+ Recipes</Text>
						</View>
					</View>
				</View>
			</View>
		</View>
	);
}
