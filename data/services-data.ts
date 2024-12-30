import { MaterialIcons } from "@expo/vector-icons";

// Service type
export type Service = {
	id: number;
	icon: keyof typeof MaterialIcons.glyphMap; // Restrict to valid MaterialIcons names
	title: string;
	description: string;
};

// Services Data
export const services: Service[] = [
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
