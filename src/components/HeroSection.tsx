import React from 'react';
import CustomButton from './CustomButton';
import cars from '../assets/Removal-575.png';

const HeroSection = () => {
	return (
		<div className="flex items-center flex-row justify-between px-4 mt-16">
			<div className="flex flex-col gap-12">
				<h1 className="font-bebasNeue text-[76.29px] leading-[83.92px] font-normal whitespace-pre-line">
					SPRZEDAJEMY SAMOCHODY{'\n'}Z EUROPY
				</h1>
				<p className="font-robotoCondensed font-normal text-base whitespace-pre-line">
					Kup komfortowy pojazd, aby każda podróż{'\n'}była wyjątkowym
					przeżyciem.
				</p>
				<div className="flex flex-row gap-8">
					<CustomButton
						btnText="Zobacz zdjęcia"
						additionalStyles="w-36 h-12 bg-dark-blue text-white-100"
					/>
					<CustomButton
						btnText="Zadzwoń do nas"
						additionalStyles="w-36 h-12 border-dark-blue border-2 text-dark-blue"
					/>
				</div>
			</div>

			<div>
				<img
					src={cars}
					alt="three-cars"
					className="absolute right-0 w-[1200px]"
				/>
			</div>
		</div>
	);
};

export default HeroSection;
