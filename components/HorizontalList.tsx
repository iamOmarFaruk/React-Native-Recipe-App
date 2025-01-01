import React from "react";
import {
	View,
	Text,
	ScrollView,
	Image,
	TouchableOpacity,
	ImageSourcePropType,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AppNavigator";
import styles from "../styles/HorizontalListStyles";

type Item = {
	id: number;
	title: string;
	subtitle: string;
	image: ImageSourcePropType;
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
				<TouchableOpacity
					onPress={() =>
						navigation.navigate("AllRecipes", { title: title || "All Recipes" })
					}
				>
					<Text style={styles.seeAll}>See All</Text>
				</TouchableOpacity>
			</View>

			{/* Scrollable List */}
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				{randomizedData.map((item) => (
					<TouchableOpacity
						key={item.id}
						style={styles.card}
						onPress={() =>
							navigation.navigate("Details", {
								id: item.id,
								title: item.title,
								subtitle: item.subtitle,
								image: item.image,
								rating: "4.5", // ডিফল্ট রেটিং বা ডাইনামিক ডেটা যোগ করো
								reviews: 1000, // ডিফল্ট রিভিউ বা ডাইনামিক ডেটা যোগ করো
							})
						}
					>
						<Image source={item.image} style={styles.image} />
						<Text style={styles.cardTitle}>{item.title}</Text>
						<Text style={styles.cardSubtitle}>{item.subtitle}</Text>
					</TouchableOpacity>
				))}
			</ScrollView>
		</View>
	);
}
