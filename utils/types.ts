export type ImageData = {
	imageSrc: string;
	imageAlt: string;
};

export type Favorite = ImageData & {
	name: string;
	price: string;
};

export type Category = ImageData & {
	label: string;
};
