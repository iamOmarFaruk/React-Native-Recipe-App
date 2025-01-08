import React from "react";
import {
	View,
	Text,
	Image,
	StyleSheet,
	ImageSourcePropType,
} from "react-native";

// Define the props interface
interface SingleItemCardProps {
	title: string;
	description: string;
	image: ImageSourcePropType;
}

const SingleItemCard: React.FC<SingleItemCardProps> = ({
	title,
	description,
	image,
}) => {
	return (
		<View style={styles.card}>
			<Image source={image} style={styles.image} />
			<View style={styles.content}>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.description}>{description}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	card: {
		flexDirection: "row",
		borderColor: "#ccc",
		borderWidth: 1,
		margin: 10,
		marginHorizontal: 20,
		borderRadius: 10,
		backgroundColor: "#fff",
		padding: 10,
		marginBottom: 15,
	},
	image: {
		width: 70,
		height: 70,
		borderRadius: 90,
	},
	content: {
		marginLeft: 20,
		justifyContent: "center",
	},
	title: {
		color: "#333",
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 5,
	},
	description: {
		color: "#444",
	},
});

export default SingleItemCard;
