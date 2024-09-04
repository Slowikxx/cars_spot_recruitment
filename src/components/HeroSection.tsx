import CustomButton from './CustomButton';
import cars from '../assets/Removal-575.png';

const HeroSection = () => {
	return (
		<div className="flex flex-row justify-between px-4 h-[100vh] mt-16">
			<div className="flex flex-col sm:gap-12 gap-8">
				<h1 className="font-bebasNeue sm:text-[76.29px] text-4xl sm:leading-[83.92px] font-normal whitespace-pre-line">
					SPRZEDAJEMY SAMOCHODY{'\n'}Z EUROPY
				</h1>
				<p className="font-robotoCondensed font-normal text-base whitespace-pre-line">
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
					src={cars}
					alt="three-cars-hero-img"
					className="absolute right-0 w-[1200px] lg:-bottom-20 bottom-16 -z-10"
				/>
			</div>
		</div>
	);
};

export default HeroSection;
