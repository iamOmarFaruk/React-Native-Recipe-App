import { categories } from "./categories-data";

export const recipes = [
	{
		id: 1,
		title: "Creamy Pasta",
		subtitle: "By David Charles",
		image: require("../assets/images/recipes/Creamy-Pasta.jpeg"),
		rating: "4.6",
		reviews: 230,
		category: [categories[3], categories[14], categories[10]], // Dessert, Italian, Quick Meals
	},
	{
		id: 2,
		title: "Macarons",
		subtitle: "By Rachel William",
		image: require("../assets/images/recipes/Macarons.webp"),
		rating: "4.5",
		reviews: 120,
		category: [categories[3]], // Dessert
	},
	{
		id: 3,
		title: "Chicken Salad",
		subtitle: "By Samuel Green",
		image: require("../assets/images/recipes/Chicken-Salad.jpeg"),
		rating: "4.7",
		reviews: 310,
		category: [categories[2], categories[19], categories[7]], // Dinner, Salads, Healthy
	},
	{
		id: 4,
		title: "Grilled Cheese",
		subtitle: "By John Doe",
		image: require("../assets/images/recipes/Grilled-Cheese.webp"),
		rating: "4.4",
		reviews: 150,
		category: [categories[18], categories[13], categories[10]], // Sandwiches, Grilled Dishes, Quick Meals
	},
	{
		id: 5,
		title: "Tomato Soup",
		subtitle: "By Jane Smith",
		image: require("../assets/images/recipes/Tomato-Soup.jpeg"),
		rating: "4.3",
		reviews: 180,
		category: [categories[9], categories[19]], // Soups, Salads
	},
	{
		id: 6,
		title: "Avocado Toast",
		subtitle: "By Alex Brown",
		image: require("../assets/images/recipes/Avocado-Toast.webp"),
		rating: "4.5",
		reviews: 200,
		category: [categories[7], categories[21], categories[23]], // Healthy, Low Carb, Kids Meals
	},
	{
		id: 7,
		title: "Caesar Salad",
		subtitle: "By Emily White",
		image: require("../assets/images/recipes/Caesar-Salad.jpeg"),
		rating: "4.6",
		reviews: 220,
		category: [categories[19], categories[7]], // Salads, Healthy
	},
	{
		id: 8,
		title: "Pancakes",
		subtitle: "By Chris Green",
		image: require("../assets/images/recipes/Pancakes.jpeg"),
		rating: "4.7",
		reviews: 300,
		category: [categories[0], categories[26]], // Breakfast, Brunch
	},
	{
		id: 9,
		title: "Chocolate Cake",
		subtitle: "By Sarah Black",
		image: require("../assets/images/recipes/Chocolate-Cake.jpeg"),
		rating: "4.8",
		reviews: 400,
		category: [categories[3], categories[29]], // Dessert, Comfort Food
	},
	{
		id: 10,
		title: "Fruit Smoothie",
		subtitle: "By Kevin Blue",
		image: require("../assets/images/recipes/Fruit-Smoothie.jpeg"),
		rating: "4.6",
		reviews: 250,
		category: [categories[20], categories[7]], // Smoothies, Healthy
	},
	{
		id: 11,
		title: "Garlic Bread",
		subtitle: "By Amy Foster",
		image: require("../assets/images/recipes/Garlic-Bread.webp"),
		rating: "4.4",
		reviews: 180,
		category: [categories[2], categories[14]], // Dinner, Italian
	},
	{
		id: 12,
		title: "Vegetable Stir Fry",
		subtitle: "By Michael Scott",
		image: require("../assets/images/recipes/free-photo-of-roasted-fish-and-potatoes-served-on-tray-overhead.jpeg"),
		rating: "4.5",
		reviews: 210,
		category: [categories[2], categories[15], categories[7]], // Dinner, Asian, Healthy
	},
	{
		id: 13,
		title: "Beef Steak",
		subtitle: "By Robert Brown",
		image: require("../assets/images/recipes/pexels-photo-8696466.jpeg"),
		rating: "4.7",
		reviews: 340,
		category: [categories[13], categories[2]], // Grilled Dishes, Dinner
	},
	{
		id: 14,
		title: "Shrimp Scampi",
		subtitle: "By Patricia Johnson",
		image: require("../assets/images/recipes/pexels-photo-8697543.jpeg"),
		rating: "4.6",
		reviews: 280,
		category: [categories[12], categories[14]], // Seafood, Italian
	},
	{
		id: 15,
		title: "Veggie Pizza",
		subtitle: "By Christopher Davis",
		image: require("../assets/images/recipes/pexels-photo-11111603.webp"),
		rating: "4.5",
		reviews: 200,
		category: [categories[14], categories[19]], // Italian, Salads
	},
	{
		id: 16,
		title: "Berry Parfait",
		subtitle: "By Linda Miller",
		image: require("../assets/images/recipes/pexels-photo-14122621.webp"),
		rating: "4.7",
		reviews: 260,
		category: [categories[3], categories[20]], // Dessert, Smoothies
	},
	{
		id: 17,
		title: "Fried Rice",
		subtitle: "By Daniel Wilson",
		image: require("../assets/images/recipes/pexels-photo-7449194.webp"),
		rating: "4.5",
		reviews: 220,
		category: [categories[15], categories[2]], // Asian, Dinner
	},
	{
		id: 18,
		title: "Cheesecake",
		subtitle: "By Mary Garcia",
		image: require("../assets/images/recipes/pexels-photo-4669249.jpeg"),
		rating: "4.8",
		reviews: 300,
		category: [categories[3]], // Dessert
	},
	{
		id: 19,
		title: "Tacos",
		subtitle: "By Matthew Martinez",
		image: require("../assets/images/recipes/free-photo-of-delicious-mexican-tacos-platter-in-mexico-city.jpeg"),
		rating: "4.6",
		reviews: 240,
		category: [categories[17], categories[28]], // Mexican, Street Food
	},
	{
		id: 20,
		title: "Lemon Tart",
		subtitle: "By Sophia Anderson",
		image: require("../assets/images/recipes/pexels-photo-8743939.jpeg"),
		rating: "4.7",
		reviews: 280,
		category: [categories[3], categories[29]], // Dessert, Comfort Food
	},
];
