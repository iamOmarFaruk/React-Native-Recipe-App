import React, { useRef } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Animated, {
	useSharedValue,
	useAnimatedStyle,
	withSpring,
	useAnimatedScrollHandler,
} from "react-native-reanimated";

import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AppNavigator";

type DetailsScreenProps = {
	route: RouteProp<RootStackParamList, "Details">;
	navigation: NativeStackNavigationProp<RootStackParamList, "Details">;
};

export default function DetailsScreen({
	route,
	navigation,
}: DetailsScreenProps) {
	const { id, title, subtitle, image, rating, reviews } = route.params;

	// ============ Animation Stuff ==============
	const scrollY = useSharedValue(0);

	const scrollHandler = useAnimatedScrollHandler((event) => {
		scrollY.value = event.contentOffset.y;
	});

	const animatedWrapperStyle = useAnimatedStyle(() => {
		const scale = 1 + scrollY.value / 300;
		return {
			transform: [{ scale: Math.min(scale, 1.5) }],
		};
	});

	return (
		<View style={styles.safeArea}>
			{/* Fullscreen Image Section */}
			<Animated.View style={[styles.imagewrapper, animatedWrapperStyle]}>
				<Animated.Image source={image} style={styles.headerimage} />
			</Animated.View>

			{/* Details Section */}
			<Animated.ScrollView
				onScroll={scrollHandler}
				scrollEventThrottle={16}
				showsVerticalScrollIndicator={false}
			>
				<View style={styles.Contentwrapper}>
					<Text>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
						mollitia, molestiae quas vel sint commodi repudiandae consequuntur
						voluptatum laborum numquam blanditiis harum quisquam eius sed odit
						fugiat iusto fuga praesentium optio, eaque rerum! Provident
						similique accusantium nemo autem. Veritatis obcaecati tenetur iure
						eius earum ut molestias architecto voluptate aliquam nihil, eveniet
						aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur
						error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
						quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias
						eos sapiente officiis modi at sunt excepturi expedita sint? Sed
						quibusdam recusandae alias error harum maxime adipisci amet laborum.
						Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates
						a cumque velit quibusdam sed amet tempora. Sit laborum ab, eius
						fugit doloribus tenetur fugiat, temporibus enim commodi iusto libero
						magni deleniti quod quam consequuntur! Commodi minima excepturi
						repudiandae velit hic maxime doloremque. Quaerat provident commodi
						consectetur veniam similique ad earum omnis ipsum saepe, voluptas,
						hic voluptates pariatur est explicabo fugiat, dolorum eligendi quam
						cupiditate excepturi mollitia maiores labore suscipit quas? Nulla,
						placeat. Voluptatem quaerat non architecto ab laudantium modi minima
						sunt esse temporibus sint culpa, recusandae aliquam numquam totam
						ratione voluptas quod exercitationem fuga. Possimus quis earum
						veniam quasi aliquam eligendi, placeat qui corporis!! Lorem ipsum
						dolor sit amet consectetur adipisicing elit. Maxime mollitia,
						molestiae quas vel sint commodi repudiandae consequuntur voluptatum
						laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto
						fuga praesentium optio, eaque rerum! Provident similique accusantium
						nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias
						architecto voluptate aliquam nihil, eveniet aliquid culpa officia
						aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt
						ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error
						repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis
						modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias
						error harum maxime adipisci amet laborum. Perspiciatis minima
						nesciunt dolorem! Officiis iure rerum voluptates a cumque velit
						quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus
						tenetur fugiat, temporibus enim commodi iusto libero magni deleniti
						quod quam consequuntur! Commodi minima excepturi repudiandae velit
						hic maxime doloremque. Quaerat provident commodi consectetur veniam
						similique ad earum omnis ipsum saepe, voluptas, hic voluptates
						pariatur est explicabo fugiat, dolorum eligendi quam cupiditate
						excepturi mollitia maiores labore suscipit quas? Nulla, placeat.
						Voluptatem quaerat non architecto ab laudantium modi minima sunt
						esse temporibus sint culpa, recusandae aliquam numquam totam ratione
						voluptas quod exercitationem fuga. Possimus quis earum veniam quasi
						aliquam eligendi, placeat qui corporis! Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Maxime mollitia, molestiae quas vel
						sint commodi repudiandae consequuntur voluptatum laborum numquam
						blanditiis harum quisquam eius sed odit fugiat iusto fuga
						praesentium optio, eaque rerum! Provident similique accusantium nemo
						autem. Veritatis obcaecati tenetur iure eius earum ut molestias
						architecto voluptate aliquam nihil, eveniet aliquid culpa officia
						aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt
						ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error
						repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis
						modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias
						error harum maxime adipisci amet laborum. Perspiciatis minima
						nesciunt dolorem! Officiis iure rerum voluptates a cumque velit
						quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus
						tenetur fugiat, temporibus enim commodi iusto libero magni deleniti
						quod quam consequuntur! Commodi minima excepturi repudiandae velit
						hic maxime doloremque. Quaerat provident commodi consectetur veniam
						similique ad earum omnis ipsum saepe, voluptas, hic voluptates
						pariatur est explicabo fugiat, dolorum eligendi quam cupiditate
						excepturi mollitia maiores labore suscipit quas? Nulla, placeat.
						Voluptatem quaerat non architecto ab laudantium modi minima sunt
						esse temporibus sint culpa, recusandae aliquam numquam totam ratione
						voluptas quod exercitationem fuga. Possimus quis earum veniam quasi
						aliquam eligendi, placeat qui corporis!
					</Text>
				</View>
			</Animated.ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		position: "relative",
		justifyContent: "center",
		alignItems: "center",
	},
	imagewrapper: {
		height: 400,
		width: "150%",
		position: "absolute",
		top: 0,
		justifyContent: "center",
		alignItems: "center",
	},
	headerimage: {
		height: "100%",
		width: "100%",
		resizeMode: "cover",
	},

	Contentwrapper: {
		flex: 1,
		backgroundColor: "#fff",
		width: "100%",
		transform: [{ translateY: 250 }], // Correct syntax for translateY
		borderRadius: 30,
	},
});
