import React, { useRef, useEffect, useState } from "react";
import {
	View,
	Text,
	Image,
	SafeAreaView,
	Animated,
	ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { getRandomColor } from "../data/colors";
import styles from "../styles/profileScreenStyles";
import { services } from "../data/services-data";

export default function ProfileScreen() {
	const animations = useRef(services.map(() => new Animated.Value(50))).current;
	const [showMetrics, setShowMetrics] = useState(false);
	const metricsAnimation = useRef(new Animated.Value(0)).current; // For spring animation

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

	const handleScroll = (event: any) => {
		const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
		const isBottomReached =
			layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;

		if (isBottomReached && !showMetrics) {
			setShowMetrics(true);
			// Spring animation for metrics
			Animated.spring(metricsAnimation, {
				toValue: 1,
				friction: 5,
				tension: 80,
				useNativeDriver: true,
			}).start();
		}
	};

	return (
		<SafeAreaView style={styles.safeArea}>
			<View style={styles.container}>
				{/* Profile Header */}
				<View style={styles.profileHeader}>
					<View style={styles.profileImageContainer}>
						<Image
							source={require("../assets/images/profile.jpeg")} // Replace with the path to your local image
							style={styles.profileImage}
						/>

						{/* Green Dot */}
						<View style={styles.onlineIndicator} />
					</View>
					<View style={styles.profileTextContainer}>
						<Text style={styles.profileName}>Omar Faruk</Text>
						<Text style={styles.profileDesignation}>
							Full Stack App Developer
						</Text>
					</View>
				</View>

				{/* Metrics Section */}
				{showMetrics && (
					<Animated.View
						style={[
							styles.metricsContainer,
							{
								opacity: metricsAnimation, // Fade-in effect
								transform: [
									{
										scale: metricsAnimation.interpolate({
											inputRange: [0, 1],
											outputRange: [0.5, 1], // Zoom-in effect
										}),
									},
									{
										translateY: metricsAnimation.interpolate({
											inputRange: [0, 1],
											outputRange: [50, 0], // Slide-up effect
										}),
									},
								],
							},
						]}
					>
						<View style={styles.metricCard}>
							<Text style={styles.metricNumber}>15+</Text>
							<Text style={styles.metricLabel}>Clients</Text>
						</View>
						<View style={styles.metricCard}>
							<Text style={styles.metricNumber}>300+</Text>
							<Text style={styles.metricLabel}>Projects</Text>
						</View>
						<View style={styles.metricCard}>
							<Text style={styles.metricNumber}>12+</Text>
							<Text style={styles.metricLabel}>Years of Experience</Text>
						</View>
					</Animated.View>
				)}

				{/* Services Section */}
				<ScrollView
					contentContainerStyle={styles.scrollContainer}
					onScroll={handleScroll}
					scrollEventThrottle={16} // To ensure smooth scrolling
				>
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
