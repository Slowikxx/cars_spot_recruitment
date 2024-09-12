import CustomButton from './CustomButton';
import { hero, shadow, heroBackground } from '../assets';
import { motion } from 'framer-motion';
import { fadeIn, slideIn } from '../utils/animation';

const HeroSection = () => {
	return (
		<div className="flex flex-row justify-between px-4 h-screen mt-28">
			<div className="flex flex-col">
				<motion.h1
					variants={slideIn('left', 'spring', 0.1)}
					initial="hidden"
					whileInView="show"
					className="font-bebasNeue sm:text-[76.29px] text-4xl sm:leading-[83.92px] font-normal whitespace-pre-line mb-8"
				>
					SPRZEDAJEMY SAMOCHODY{'\n'}Z EUROPY
				</motion.h1>
				<motion.p
					variants={slideIn('left', 'spring', 0.2)}
					initial="hidden"
					whileInView="show"
					className="font-robotoCondensed font-normal text-base whitespace-pre-line mb-12"
				>
					Kup komfortowy pojazd, aby każda podróż{'\n'}była wyjątkowym
					przeżyciem.
				</motion.p>
				<motion.div
					variants={slideIn('left', 'spring', 0.3)}
					initial="hidden"
					whileInView="show"
					className="flex flex-row gap-8"
				>
					<CustomButton
						btnText="Zobacz zdjęcia"
						additionalStyles="w-36 h-12 bg-dark-blue text-white-100 hover:opacity-80"
					/>
					<CustomButton
						btnText="Zadzwoń do nas"
						additionalStyles="w-36 h-12 border-dark-blue border-2 text-dark-blue hover:bg-dark-blue hover:text-white-100"
					/>
				</motion.div>
			</div>

			<div>
				<motion.img
					variants={fadeIn('right', 'spring', 0.3, 2)}
					initial="hidden"
					whileInView="show"
					src={heroBackground}
					alt="strokes-hero-background"
					className="xl:block hidden absolute right-40 top-0 -z-10"
				/>
				<motion.img
					variants={slideIn('right', 'tween', 0.2)}
					initial="hidden"
					whileInView="show"
					src={hero}
					alt="three-cars-hero-img"
					className="absolute right-0 w-[1200px] md:-bottom-32 xl:block sm:hidden bottom-12 -z-10"
				/>
				<motion.img
					variants={slideIn('right', 'tween', 0.2)}
					initial="hidden"
					whileInView="show"
					src={shadow}
					alt="cars-shadow"
					className="absolute right-0 w-[1200px] md:-bottom-32 xl:block sm:hidden bottom-12 -z-10"
				/>
			</div>
		</div>
	);
};

export default HeroSection;
