import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AppNavigator";
import styles from "../styles/GridListStyles";

type Item = {
	id: number;
	title: string;
	subtitle: string;
	image: any; // Accept `require()` for local images
	rating: string;
	reviews: number;
};

type Props = {
	title: string;
	data: Item[];
};

export default function GridList({ title, data }: Props) {
	const navigation =
		useNavigation<NativeStackNavigationProp<RootStackParamList>>();

	const [randomImages, setRandomImages] = useState<Item[]>([]);

	// randomly select 3 items from the data
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
				{/* link to this first item from randomly selected item start */}
				<TouchableOpacity
					style={styles.leftColumn}
					onPress={() =>
						navigation.navigate("Details", {
							id: randomImages[0]?.id,
							title: randomImages[0]?.title,
							subtitle: randomImages[0]?.subtitle,
							image: randomImages[0]?.image,
							rating: randomImages[0]?.rating,
							reviews: randomImages[0]?.reviews,
						})
					}
				>
					<Image source={randomImages[0]?.image} style={styles.largeImage} />
				</TouchableOpacity>
				{/* link to this first item from randomly selected item end */}

				{/* Second Column */}
				<View style={styles.rightColumn}>
					{/* link to this second item from randomly selected item start */}
					<TouchableOpacity
						onPress={() =>
							navigation.navigate("Details", {
								id: randomImages[1]?.id,
								title: randomImages[1]?.title,
								subtitle: randomImages[1]?.subtitle,
								image: randomImages[1]?.image,
								rating: randomImages[1]?.rating,
								reviews: randomImages[1]?.reviews,
							})
						}
					>
						<Image source={randomImages[1]?.image} style={styles.smallImage} />
					</TouchableOpacity>
					{/* link to this second item from randomly selected item end */}

					<TouchableOpacity
						onPress={() =>
							navigation.navigate("Details", {
								id: randomImages[2]?.id,
								title: randomImages[2]?.title,
								subtitle: randomImages[2]?.subtitle,
								image: randomImages[2]?.image,
								rating: randomImages[2]?.rating,
								reviews: randomImages[2]?.reviews,
							})
						}
					>
						{/* Bottom Image with Overlay */}
						<View style={styles.overlayContainer}>
							{/* link to this third item from randomly selected item start */}

							<Image
								source={randomImages[2]?.image}
								style={styles.smallImage}
							/>

							{/* link to this third item from randomly selected item end */}

							<View style={styles.overlay}>
								<Text style={styles.overlayText}>
									{data.length - 3}+ Recipes
								</Text>
							</View>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}
