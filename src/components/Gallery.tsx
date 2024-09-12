import { useState, useEffect } from 'react';
import {
	galleryImageType,
	galleryTypes,
	passengerCars,
	deliveryCars,
} from '../constants';
import { motion } from 'framer-motion';
import { slideIn } from '../utils/animation';

const Gallery = () => {
	const [carFilter, setCarFilter] = useState<string>('passenger');
	const [buttonOnIndex, setButtonOnIndex] = useState<number>(0);
	const [imageOffset, setImageOffset] = useState<number>(0);
	const [carImages, setCarImages] =
		useState<Array<galleryImageType>>(passengerCars);

	const onGalleryButtonClick = (galleryButtonIndex: number) => {
		const isMobileScreen = window.innerWidth < 768;
		setButtonOnIndex(galleryButtonIndex);
		setImageOffset(
			isMobileScreen ? -468 * galleryButtonIndex : -664 * galleryButtonIndex
		);
	};

	useEffect(() => {
		setCarImages(carFilter === 'passenger' ? passengerCars : deliveryCars);
	}, [carFilter]);

	return (
		<div id="gallery">
			<div>
				<motion.div
					variants={slideIn('top', 'spring', 0.15)}
					initial="hidden"
					whileInView="show"
				>
					<p className="text-dark-blue font-normal font-robotoCondensed text-[21.5px] leading-[32.25px]">
						Prezentacja firmy
					</p>
					<h1 className="font-bebasNeue font-normal text-[40px] leading-[48px] text-gray-100 mb-6">
						ZOBACZ NASZĄ GALERIĘ ZDJĘĆ
					</h1>
				</motion.div>
				<motion.div
					variants={slideIn('bottom', 'spring', 0.15)}
					initial="hidden"
					whileInView="show"
					className="flex flex-row gap-5"
				>
					{galleryTypes.map((galleryType, i) => (
						<p
							key={i}
							onClick={() => setCarFilter(galleryType.type)}
							className={`font-robotoFlex text-[15px] leading-[22.5px] ${
								carFilter === galleryType.type
									? 'font-semibold text-dark-blue border-b-2 border-dark-blue'
									: 'font-normal text-black'
							} cursor-pointer hover:border-b-2 hover:border-dark-blue hover:text-dark-blue`}
						>
							Samochody {galleryType.name}
						</p>
					))}
				</motion.div>
				<div className="mt-20 mb-12">
					<div
						className="flex flex-row gap-16 transition-transform duration-300"
						style={{ transform: `translateX(${imageOffset}px)` }}
					>
						{carImages.map((car, i) => (
							<motion.img
								variants={
									window.innerWidth < 768
										? {}
										: slideIn('left', 'spring', 0.2 * i)
								}
								initial="hidden"
								whileInView="show"
								key={i}
								src={car.src}
								alt={car.alt}
								className="w-[600px] h-[446px] flex-shrink-0"
							/>
						))}
					</div>
				</div>
				<div className="w-full flex flex-row mb-20 gap-3 justify-center items-center">
					{[1, 2, 3, 4, 5].map((_, i) => (
						<div
							key={i}
							onClick={() => onGalleryButtonClick(i)}
							className={`${
								buttonOnIndex === i
									? 'bg-dark-blue'
									: 'bg-[#ededed] hover:bg-dark-blue hover:opacity-40'
							}  w-3 h-3 rounded-full cursor-pointer`}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Gallery;
