export const softBackgroundColors = [
    "#FCE4EC",
    "#F3E5F5",
    "#E8EAF6",
    "#E3F2FD",
    "#E0F7FA",
    "#E0F2F1",
    "#E8F5E9",
    "#FFFDE7",
    "#FFF3E0",
    "#FBE9E7",
];

export const getRandomColor = (): string => {
    return softBackgroundColors[Math.floor(Math.random() * softBackgroundColors.length)];
};
