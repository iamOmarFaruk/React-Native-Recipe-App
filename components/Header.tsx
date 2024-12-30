import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
// import { Image } from "expo-image";

export default function Header() {
	return (
		<View style={styles.container}>
			<View style={styles.textContainer}>
				<Text style={styles.greeting}>Hello, Omar</Text>
				<Text style={styles.heading}>What would you like to cook today?</Text>
			</View>
			<View style={styles.imageContainer}>
				<Image
					source={require("../assets/images/profile.jpeg")}
					style={styles.profileImage}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		paddingHorizontal: 25,
		paddingVertical: 20,
	},
	textContainer: {
		flex: 4, // 80% of the space
		alignItems: "flex-start",
	},
	imageContainer: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	greeting: {
		fontSize: 16,
		color: "#777",
		marginBottom: 8,
	},
	heading: {
		fontSize: 25,
		fontWeight: "600",
		color: "#000",
		width: "70%",
	},
	profileImage: {
		width: 50,
		height: 50,
		borderRadius: 25, // Makes the image circular
	},
});
