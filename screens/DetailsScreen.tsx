import React, { useRef } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Animated, {
	useSharedValue,
	useAnimatedStyle,
	withSpring,
	useAnimatedScrollHandler,
} from "react-native-reanimated";

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

	// ============ Animation Stuff ==============
	const scrollY = useSharedValue(0);

	const scrollHandler = useAnimatedScrollHandler((event) => {
		scrollY.value = event.contentOffset.y;
	});

	const animatedWrapperStyle = useAnimatedStyle(() => {
		const scale = 1 + scrollY.value / 300;
		return {
			transform: [{ scale: Math.min(scale, 1.5) }],
		};
	});

	return (
		<View style={styles.safeArea}>
			{/* Fullscreen Image Section */}
			<Animated.View style={[styles.imagewrapper, animatedWrapperStyle]}>
				<Animated.Image source={image} style={styles.headerimage} />
			</Animated.View>

			{/* Details Section */}
			<Animated.ScrollView
				style={styles.Scrolltwrapper}
				onScroll={scrollHandler}
				scrollEventThrottle={16}
				showsVerticalScrollIndicator={false}
			>
				<View style={styles.Contentwrapper}>
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
						inima deleniti quae nobis odit, porro tempora repudiandae.Lorem
						ipsum dolor sit amet consectetur adipisicing elit. Doloribus
						excepturi nihil, cupiditate nam aliquam, odio pariatur facilis
						aspernatur, deserunt dolores commodi id culpa inventore sapiente!
						Est nobis expedita fuga impedit ipsum commodi reprehenderit
						obcaecati excepturi quae amet. Repellendus atque animi aliquid ab?
						Ratione est quos explicabo mollitia magni optio placeat rem, cumque
						quo molestiae molestias pariatur, alias laboriosam commodi?
						Blanditiis itaque soluta delectus, non, excepturi asperiores nisi
						aperiam quo aut officia maiores, voluptatem cum vero hic quisquam
						architecto sequi mollitia! Autem at ipsum veritatis quo soluta ab,
						accusamus culpa qui consequatur? Ex m inima deleniti quae nobis
						odit, porro tempora repudiandae.Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Doloribus excepturi nihil, cupiditate
						nam aliquam, odio pariatur facilis aspernatur, deserunt dolores
						commodi id culpa inventore sapiente! Est nobis expedita fuga impedit
						ipsum commodi reprehenderit obcaecati excepturi quae amet.
						Repellendus atque animi aliquid ab? Ratione est quos explicabo
						mollitia magni optio placeat rem, cumque quo molestiae molestias
						pariatur, alias laboriosam commodi? Blanditiis itaque soluta
						delectus, non, excepturi asperiores nisi aperiam quo aut officia
						maiores, voluptatem cum vero hic quisquam architecto sequi mollitia!
						Autem at ipsum veritatis quo soluta ab, accusamus culpa qui
						consequatur? Ex m inima deleniti quae nobis odit, porro tempora
						repudiandae.Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Doloribus excepturi nihil, cupiditate nam aliquam, odio pariatur
						facilis aspernatur, deserunt dolores commodi id culpa inventore
						sapiente! Est nobis expedita fuga impedit ipsum commodi
						reprehenderit obcaecati excepturi quae amet. Repellendus atque animi
						aliquid ab? Ratione est quos explicabo mollitia magni optio placeat
						rem, cumque quo molestiae molestias pariatur, alias laboriosam
						commodi? Blanditiis itaque soluta delectus, non, excepturi
						asperiores nisi aperiam quo aut officia maiores, voluptatem cum vero
						hic quisquam architecto sequi mollitia! Autem at ipsum veritatis quo
						soluta ab, accusamus culpa qui consequatur? Ex m
					</Text>
				</View>
			</Animated.ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		position: "relative",
		justifyContent: "center",
		alignItems: "center",
	},
	imagewrapper: {
		height: 400,
		width: "150%",
		position: "absolute",
		top: 0,
		justifyContent: "center",
		alignItems: "center",
	},
	headerimage: {
		height: "100%",
		width: "100%",
		resizeMode: "cover",
	},
	Scrolltwrapper: {
		paddingBottom: 30,
	},
	Contentwrapper: {
		flex: 1,
		backgroundColor: "#fff",
		width: "100%",
		transform: [{ translateY: 300 }], // Correct syntax for translateY
		borderRadius: 30,
		paddingHorizontal: 20,
		paddingVertical: 30,
		paddingBottom: 350,
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
		zIndex: 2,
	},
});
