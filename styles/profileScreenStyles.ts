import { StyleSheet } from "react-native";

const profileScreenStyles = StyleSheet.create({
	// SafeArea and Container Styles
	safeArea: {
		flex: 1,
		backgroundColor: "#fff",
	},
	container: {
		flex: 1,
		backgroundColor: "#fff",
		paddingHorizontal: 16,
		paddingVertical: 30,
		paddingBottom: 0,
	},

	// Profile Header Section
	profileHeader: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 20,
		marginTop: 10,
	},
	profileImageContainer: {
		position: "relative",
	},
	profileImage: {
		width: 80,
		height: 80,
		borderRadius: 40,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 3,
		elevation: 5,
		borderWidth: 3,
		borderColor: "#4CAF50",
	},
	onlineIndicator: {
		position: "absolute",
		bottom: 4,
		right: 4,
		width: 16,
		height: 16,
		borderRadius: 8,
		backgroundColor: "#4CAF50",
		borderWidth: 2,
		borderColor: "#fff",
	},
	profileTextContainer: {
		flex: 1,
		marginLeft: 15,
	},
	profileName: {
		fontSize: 20,
		fontWeight: "bold",
		color: "#000",
		marginBottom: 5,
	},
	profileDesignation: {
		fontSize: 14,
		color: "#777",
	},

	// Metrics Section
	metricsContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 20,
		backgroundColor: "#fff",
		borderRadius: 12,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 5,
		elevation: 5,
		paddingVertical: 20,
		paddingHorizontal: 20,
	},
	metricCard: {
		alignItems: "center",
	},
	metricNumber: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#000",
	},
	metricLabel: {
		fontSize: 12,
		color: "#777",
	},

	// Service Cards Section
	serviceCard: {
		padding: 16,
		borderRadius: 12,
		marginBottom: 15,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 5,
		elevation: 3,
		overflow: "hidden",
	},
	serviceCardContent: {
		flexDirection: "row",
		alignItems: "flex-start",
	},
	serviceIcon: {
		marginRight: 15,
	},
	textWrapper: {
		flex: 1,
	},
	serviceTitle: {
		fontSize: 16,
		fontWeight: "bold",
		color: "#000",
		marginBottom: 5,
	},
	serviceDescription: {
		fontSize: 14,
		color: "#555",
		lineHeight: 20,
	},

	// Scroll Section
	scrollContainer: {
		paddingVertical: 20,
	},
});

export default profileScreenStyles;
