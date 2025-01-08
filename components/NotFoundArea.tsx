import React from "react";
import {
	View,
	Text,
	Image,
	StyleSheet,
	ImageSourcePropType,
} from "react-native";

interface NotFoundAreaProps {
	message: string;
	imageSource: ImageSourcePropType;
}

const NotFoundArea: React.FC<NotFoundAreaProps> = ({
	message,
	imageSource,
}) => {
	return (
		<View style={styles.noFoundWrapper}>
			<Text style={styles.emptyText}>{message}</Text>
			<Image source={imageSource} style={styles.notFoundImage} />
		</View>
	);
};

const styles = StyleSheet.create({
	noFoundWrapper: {
		justifyContent: "center",
		alignItems: "center",
		marginTop: 20,
	},
	emptyText: {
		textAlign: "center",
		color: "#999",
		fontSize: 18,
		marginBottom: 20,
	},
	notFoundImage: {
		width: 200,
		height: 200,
		resizeMode: "contain",
	},
});

export default NotFoundArea;
