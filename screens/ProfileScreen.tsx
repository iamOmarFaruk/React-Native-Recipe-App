import React, { useRef, useEffect } from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	SafeAreaView,
	Animated,
	ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { getRandomColor } from "../data/colors";

type Service = {
	id: number;
	icon: keyof typeof MaterialIcons.glyphMap; // Restrict to valid MaterialIcons names
	title: string;
	description: string;
};

const services: Service[] = [
	{
		id: 1,
		icon: "language",
		title: "Custom Website Development",
		description: "Responsive websites using Next.js, Nuxt.js, and React",
	},
	{
		id: 2,
		icon: "shopping-cart",
		title: "E-commerce Solutions",
		description:
			"Build scalable stores with Shopify, WooCommerce, or custom Laravel solutions",
	},
	{
		id: 3,
		icon: "mobile-friendly",
		title: "Mobile App Development",
		description: "Create apps with Flutter, Jetpack Compose, Kotlin, or Swift",
	},
	{
		id: 4,
		icon: "settings",
		title: "API Development",
		description: "Secure APIs with Nest.js, Django, and .NET Core",
	},
	{
		id: 5,
		icon: "computer",
		title: "Web App Development",
		description: "Single Page Applications with React, Vue, and Angular",
	},
	{
		id: 6,
		icon: "build",
		title: "Maintenance & Support",
		description: "Ongoing support for WordPress, Laravel, and Django projects",
	},
	{
		id: 7,
		icon: "web",
		title: "CMS Development",
		description:
			"Powerful CMS solutions with WordPress, Strapi, and Contentful",
	},
	{
		id: 8,
		icon: "apps",
		title: "Cross-Platform Apps",
		description: "Develop once, deploy anywhere using React Native or Flutter",
	},
	{
		id: 9,
		icon: "security",
		title: "Enterprise Solutions",
		description: "Enterprise-grade apps with .NET, Laravel, and Django",
	},
	{
		id: 10,
		icon: "cloud",
		title: "Cloud Integration",
		description: "Deploy on AWS, Azure, or Google Cloud with DevOps support",
	},
	{
		id: 11,
		icon: "style",
		title: "UI/UX Design",
		description: "Design stunning interfaces with Figma and Adobe XD",
	},
	{
		id: 12,
		icon: "developer-board",
		title: "Full-Stack Development",
		description: "Expertise in MERN, MEAN, and JAMstack architectures",
	},
];

export default function ProfileScreen() {
	const animations = useRef(services.map(() => new Animated.Value(50))).current;

	useEffect(() => {
		Animated.stagger(
			100,
			animations.map((animation) =>
				Animated.timing(animation, {
					toValue: 0,
					duration: 600,
					useNativeDriver: true,
				})
			)
		).start();
	}, [animations]);

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
						<Text style={styles.metricNumber}>15</Text>
						<Text style={styles.metricLabel}>Clients</Text>
					</View>
					<View style={styles.metricCard}>
						<Text style={styles.metricNumber}>300+</Text>
						<Text style={styles.metricLabel}>Projects</Text>
					</View>
					<View style={styles.metricCard}>
						<Text style={styles.metricNumber}>15+</Text>
						<Text style={styles.metricLabel}>Technologies</Text>
					</View>
				</View>

				{/* Services Section */}
				<ScrollView contentContainerStyle={styles.scrollContainer}>
					{services.map((service, index) => (
						<Animated.View
							key={service.id}
							style={[
								styles.serviceCard,
								{
									backgroundColor: getRandomColor(),
									transform: [{ translateY: animations[index] }],
								},
							]}
						>
							<View style={styles.serviceCardContent}>
								<MaterialIcons
									name={service.icon}
									size={28}
									color="#4CAF50"
									style={styles.serviceIcon}
								/>
								<View style={styles.textWrapper}>
									<Text style={styles.serviceTitle}>{service.title}</Text>
									<Text style={styles.serviceDescription}>
										{service.description}
									</Text>
								</View>
							</View>
						</Animated.View>
					))}
				</ScrollView>
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
		paddingBottom: 0,
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
	serviceCard: {
		padding: 16,
		borderRadius: 12,
		marginBottom: 15,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 5,
		elevation: 3,
		overflow: "hidden", // Ensures no content spills outside
	},
	serviceCardContent: {
		flexDirection: "row",
		alignItems: "flex-start", // Ensures icon and text align properly
	},
	serviceIcon: {
		marginRight: 15,
	},
	textWrapper: {
		flex: 1, // Ensures text fills the available space
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
		lineHeight: 20, // Adds proper spacing between text lines
	},
	scrollContainer: {
		paddingVertical: 20,
	},
});
