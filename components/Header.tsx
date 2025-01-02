import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AppNavigator";

export default function Header() {
	const navigation =
		useNavigation<NativeStackNavigationProp<RootStackParamList>>();

	// Function to determine greeting based on current time
	const getGreeting = () => {
		const currentHour = new Date().getHours();
		if (currentHour < 12) {
			return "Good Morning";
		} else if (currentHour < 18) {
			return "Good Afternoon";
		} else {
			return "Good Evening";
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.textContainer}>
				<Text style={styles.greeting}>{getGreeting()}, Omar</Text>
				<Text style={styles.heading}>What would you like to cook today?</Text>
			</View>

			{/* Profile Image with Navigation */}
			<TouchableOpacity
				onPress={() => navigation.navigate("Profile")}
				activeOpacity={0.7}
				style={styles.imageContainer}
			>
				<Image
					source={require("../assets/images/profile.jpeg")}
					style={styles.profileImage}
				/>
			</TouchableOpacity>
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
