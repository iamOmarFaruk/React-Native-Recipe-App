import React, { useRef } from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity,
	Animated,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
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

	// Animated value
	const scrollY = useRef(new Animated.Value(0)).current;

	const imageHeight = scrollY.interpolate({
		inputRange: [0, 150],
		outputRange: [300, 50],
		extrapolate: "clamp",
	});

	const imageScale = scrollY.interpolate({
		inputRange: [0, 150],
		outputRange: [1, 1.5],
		extrapolate: "clamp",
	});

	const borderRadius = scrollY.interpolate({
		inputRange: [0, 150],
		outputRange: [30, 0], // From rounded to flat
		extrapolate: "clamp",
	});

	return (
		<SafeAreaView style={styles.safeArea}>
			{/* Fullscreen Image Section */}
			<Animated.View style={[styles.imageContainer, { height: imageHeight }]}>
				<Animated.Image
					source={image}
					style={[styles.image, { transform: [{ scale: imageScale }] }]}
				/>
				<TouchableOpacity
					style={styles.backButton}
					onPress={() => navigation.goBack()}
				>
					<MaterialIcons name="arrow-back" size={24} color="#fff" />
				</TouchableOpacity>
			</Animated.View>

			{/* Details Section */}
			<Animated.ScrollView
				style={[
					styles.detailsContainer,
					{
						borderTopLeftRadius: borderRadius,
						borderTopRightRadius: borderRadius,
					},
				]}
				onScroll={Animated.event(
					[{ nativeEvent: { contentOffset: { y: scrollY } } }],
					{ useNativeDriver: false }
				)}
				scrollEventThrottle={16}
				showsVerticalScrollIndicator={false}
			>
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
					{/* Long description text */}
					inima deleniti quae nobis odit, porro tempora repudiandae.Lorem ipsum
					dolor sit amet consectetur adipisicing elit. Doloribus excepturi
					nihil, cupiditate nam aliquam, odio pariatur facilis aspernatur,
					deserunt dolores commodi id culpa inventore sapiente! Est nobis
					expedita fuga impedit ipsum commodi reprehenderit obcaecati excepturi
					quae amet. Repellendus atque animi aliquid ab? Ratione est quos
					explicabo mollitia magni optio placeat rem, cumque quo molestiae
					molestias pariatur, alias laboriosam commodi? Blanditiis itaque soluta
					delectus, non, excepturi asperiores nisi aperiam quo aut officia
					maiores, voluptatem cum vero hic quisquam architecto sequi mollitia!
					Autem at ipsum veritatis quo soluta ab, accusamus culpa qui
					consequatur? Ex m inima deleniti quae nobis odit, porro tempora
					repudiandae.Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Doloribus excepturi nihil, cupiditate nam aliquam, odio pariatur
					facilis aspernatur, deserunt dolores commodi id culpa inventore
					sapiente! Est nobis expedita fuga impedit ipsum commodi reprehenderit
					obcaecati excepturi quae amet. Repellendus atque animi aliquid ab?
					Ratione est quos explicabo mollitia magni optio placeat rem, cumque
					quo molestiae molestias pariatur, alias laboriosam commodi? Blanditiis
					itaque soluta delectus, non, excepturi asperiores nisi aperiam quo aut
					officia maiores, voluptatem cum vero hic quisquam architecto sequi
					mollitia! Autem at ipsum veritatis quo soluta ab, accusamus culpa qui
					consequatur? Ex m inima deleniti quae nobis odit, porro tempora
					repudiandae.Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Doloribus excepturi nihil, cupiditate nam aliquam, odio pariatur
					facilis aspernatur, deserunt dolores commodi id culpa inventore
					sapiente! Est nobis expedita fuga impedit ipsum commodi reprehenderit
					obcaecati excepturi quae amet. Repellendus atque animi aliquid ab?
					Ratione est quos explicabo mollitia magni optio placeat rem, cumque
					quo molestiae molestias pariatur, alias laboriosam commodi? Blanditiis
					itaque soluta delectus, non, excepturi asperiores nisi aperiam quo aut
					officia maiores, voluptatem cum vero hic quisquam architecto sequi
					mollitia! Autem at ipsum veritatis quo soluta ab, accusamus culpa qui
					consequatur? Ex m
				</Text>
			</Animated.ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeArea: { flex: 1, backgroundColor: "#fff" },
	imageContainer: {
		position: "relative",
		backgroundColor: "#000",
		overflow: "hidden",
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
		padding: 30,
		backgroundColor: "#fff",
		marginTop: -50,
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
		color: "#444",
		lineHeight: 22,
	},
});
