import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
	screenContainer: {
		flex: 1,
		backgroundColor: "#fff",
	},
	contentContainer: {
		paddingVertical: 20,
		paddingHorizontal: 10,
	},
	gridContainer: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-between",
	},
	recipeCard: {
		width: Dimensions.get("window").width / 2 - 20,
		marginBottom: 15,
		backgroundColor: "#fff",
		borderRadius: 15,
		overflow: "hidden",
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 5,
		elevation: 3,
		borderWidth: 1,
		borderColor: "#f0f0f0",
	},
	recipeImage: {
		width: "100%",
		height: 120,
	},
	recipeInfo: {
		padding: 10,
	},
	recipeTitle: {
		fontSize: 16,
		fontWeight: "600",
		color: "#333",
	},
	recipeSubtitle: {
		fontSize: 12,
		color: "#777",
		marginTop: 5,
	},
	ratingContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: 5,
	},
	recipeRating: {
		fontSize: 14,
		fontWeight: "bold",
		color: "#4CAF50",
	},
	recipeRatingCount: {
		fontSize: 12,
		fontWeight: "normal",
		color: "#777",
	},
});

export default styles;
