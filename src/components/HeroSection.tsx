import CustomButton from './CustomButton';
import { hero, shadow, heroBackground } from '../assets';

const HeroSection = () => {
	return (
		<div className="flex flex-row justify-between px-4 h-screen mt-28">
			<div className="flex flex-col">
				<h1 className="font-bebasNeue sm:text-[76.29px] text-4xl sm:leading-[83.92px] font-normal whitespace-pre-line mb-8">
					SPRZEDAJEMY SAMOCHODY{'\n'}Z EUROPY
				</h1>
				<p className="font-robotoCondensed font-normal text-base whitespace-pre-line mb-12">
					Kup komfortowy pojazd, aby każda podróż{'\n'}była wyjątkowym
					przeżyciem.
				</p>
				<div className="flex flex-row gap-8">
					<CustomButton
						btnText="Zobacz zdjęcia"
						additionalStyles="w-36 h-12 bg-dark-blue text-white-100 hover:opacity-80"
					/>
					<CustomButton
						btnText="Zadzwoń do nas"
						additionalStyles="w-36 h-12 border-dark-blue border-2 text-dark-blue hover:bg-dark-blue hover:text-white-100"
					/>
				</div>
			</div>

			<div>
				<img
					src={heroBackground}
					alt="strokes-hero-background"
					className="lg:block hidden absolute right-40 top-0 -z-10"
				/>
				<img
					src={hero}
					alt="three-cars-hero-img"
					className="absolute right-0 w-[1200px] lg:-bottom-32 bottom-12 -z-10"
				/>
				<img
					src={shadow}
					alt="cars-shadow"
					className="absolute right-0 w-[1200px] lg:-bottom-32 bottom-12 -z-10"
				/>
			</div>
		</div>
	);
};

export default HeroSection;
