import React from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AppNavigator";

export default function SearchBar() {
	const navigation =
		useNavigation<NativeStackNavigationProp<RootStackParamList>>();
	return (
		<TouchableOpacity
			onPress={() => navigation.navigate("Search")}
			activeOpacity={0.7} // Adds slight opacity effect on touch
		>
			<View style={styles.container}>
				<Ionicons name="search" size={20} color="#aaa" style={styles.icon} />
				<TextInput
					style={styles.input}
					placeholder="Search any recipes"
					placeholderTextColor="#aaa"
					editable={false} // Disable input so user clicks and navigates to Search
				/>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#fff",
		borderRadius: 25,
		paddingHorizontal: 16,
		paddingVertical: 20,
		marginHorizontal: 20,
		borderWidth: 1,
		borderColor: "#ccc",
	},
	icon: {
		marginRight: 10,
	},
	input: {
		flex: 1,
		fontSize: 16,
		color: "#000",
	},
});
