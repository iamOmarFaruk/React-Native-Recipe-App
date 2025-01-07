import React from "react";
import {
	SafeAreaView,
	TextInput,
	StyleSheet,
	FlatList,
	Text,
	View,
} from "react-native";

const SearchScreen = () => {
	const [query, setQuery] = React.useState("");
	const data = ["Pasta", "Pizza", "Salad", "Soup", "Cake", "Smoothie"];

	const filteredData = data.filter((item) =>
		item.toLowerCase().includes(query.toLowerCase())
	);

	return (
		<SafeAreaView style={styles.container}>
			<TextInput
				style={styles.input}
				placeholder="Search recipes..."
				value={query}
				onChangeText={setQuery}
			/>
			<FlatList
				data={filteredData}
				keyExtractor={(item, index) => index.toString()}
				renderItem={({ item }) => (
					<View style={styles.item}>
						<Text style={styles.text}>{item}</Text>
					</View>
				)}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		padding: 10,
	},
	input: {
		borderWidth: 1,
		borderColor: "#ccc",
		borderRadius: 5,
		padding: 10,
		marginBottom: 10,
	},
	item: {
		padding: 15,
		borderBottomWidth: 1,
		borderBottomColor: "#ddd",
	},
	text: {
		fontSize: 16,
	},
});

export default SearchScreen;
