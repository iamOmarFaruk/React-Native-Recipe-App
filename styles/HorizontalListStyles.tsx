import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		marginTop: 20,
		marginHorizontal: 16,
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 20,
		marginTop: 20,
	},
	title: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#000",
	},
	seeAll: {
		fontSize: 14,
		color: "#4CAF50",
		fontWeight: "500",
	},
	card: {
		marginRight: 15,
		backgroundColor: "#fff",
		borderRadius: 12,
		overflow: "hidden",
		width: 120,
		borderColor: "#f0f0f0",
		elevation: 3,
		borderWidth: 1,
	},
	image: {
		width: "100%",
		height: 80,
	},
	cardTitle: {
		fontSize: 14,
		fontWeight: "600",
		color: "#000",
		marginHorizontal: 8,
		marginTop: 8,
		marginBottom: 5,
	},
	cardSubtitle: {
		fontSize: 12,
		color: "#777",
		marginHorizontal: 8,
		marginBottom: 8,
	},
});

export default styles;
