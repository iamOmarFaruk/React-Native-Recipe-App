import React from "react";
import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";

export default function ProfileScreen() {
	return (
		<SafeAreaView style={styles.safeArea}>
			<View style={styles.container}>
				{/* Profile Header */}
				<View style={styles.profileHeader}>
					<Image
						source={{
							uri: "https://media.licdn.com/dms/image/v2/D5603AQHLX8guZZkVUQ/profile-displayphoto-shrink_400_400/B56ZPst7SqG4Ak-/0/1734843283429?e=1740614400&v=beta&t=URD5pWynOaq3XEuG2xI9aD-Ni-vyC3IiqJ75yaxG4ZA",
						}}
						style={styles.profileImage}
					/>
					<View style={styles.profileTextContainer}>
						<Text style={styles.profileName}>Omar Faruk</Text>
						<Text style={styles.profileDesignation}>App Developer</Text>
					</View>
				</View>

				{/* Metrics Section */}
				<View style={styles.metricsContainer}>
					<View style={styles.metricCard}>
						<Text style={styles.metricNumber}>353</Text>
						<Text style={styles.metricLabel}>Recipes</Text>
					</View>
					<View style={styles.metricCard}>
						<Text style={styles.metricNumber}>12K</Text>
						<Text style={styles.metricLabel}>Views</Text>
					</View>
					<View style={styles.metricCard}>
						<Text style={styles.metricNumber}>1.4K</Text>
						<Text style={styles.metricLabel}>Followers</Text>
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: "#fff",
	},
	container: {
		flex: 1,
		backgroundColor: "#fff",
		paddingHorizontal: 16,
		paddingVertical: 30,
	},
	profileHeader: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 20,
	},
	profileImage: {
		width: 80,
		height: 80,
		borderRadius: 40,
		marginRight: 16,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 3,
		elevation: 5,
	},
	profileTextContainer: {
		flex: 1,
	},
	profileName: {
		fontSize: 20,
		fontWeight: "bold",
		color: "#000",
	},
	profileDesignation: {
		fontSize: 14,
		color: "#777",
	},
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
});
