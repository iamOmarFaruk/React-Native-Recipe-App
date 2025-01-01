import { StyleSheet } from "react-native";

const GridListStyles = StyleSheet.create({
	container: {
		marginTop: 20,
		marginHorizontal: 16,
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 20,
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
	gridContainer: {
		height: 190,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	leftColumn: {
		width: "60%",
	},
	rightColumn: {
		width: "35%",
		justifyContent: "space-between",
	},
	largeImage: {
		width: "100%",
		height: 190,
		borderRadius: 12,
	},
	smallImage: {
		width: "100%",
		height: 85,
		borderRadius: 12,
	},
	overlayContainer: {
		position: "relative",
	},
	overlay: {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: "rgba(0, 0, 0, 0.5)",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 12,
	},
	overlayText: {
		color: "#fff",
		fontSize: 16,
		fontWeight: "bold",
	},
});

export default GridListStyles;
