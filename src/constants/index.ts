import {
	carouselPassenger1,
	carouselPassenger2,
	carouselPassenger3,
} from '../assets';

export const galleryTypes = [
	{
		name: 'osobowe',
		type: 'passenger',
	},
	{
		name: 'dostawcze',
		type: 'delivery',
	},
];

export type galleryImageType = {
	src: string;
	alt: string;
};

export const passengerCars = [
	{
		src: carouselPassenger1,
		alt: 'passenger-car-1',
	},
	{
		src: carouselPassenger2,
		alt: 'passenger-car-2',
	},
	{
		src: carouselPassenger3,
		alt: 'passenger-car-3',
	},
	{
		src: carouselPassenger1,
		alt: 'passenger-car-1',
	},
	{
		src: carouselPassenger2,
		alt: 'passenger-car-2',
	},
	{
		src: carouselPassenger3,
		alt: 'passenger-car-3',
	},
];

export const deliveryCars = [
	{
		src: carouselPassenger2,
		alt: 'passenger-car-2',
	},
	{
		src: carouselPassenger1,
		alt: 'passenger-car-1',
	},
	{
		src: carouselPassenger3,
		alt: 'passenger-car-3',
	},
	{
		src: carouselPassenger1,
		alt: 'passenger-car-1',
	},
	{
		src: carouselPassenger2,
		alt: 'passenger-car-2',
	},
	{
		src: carouselPassenger3,
		alt: 'passenger-car-3',
	},
];
