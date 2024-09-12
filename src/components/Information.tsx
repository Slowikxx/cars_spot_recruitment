import { FaArrowDown } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { slideIn } from '../utils/animation';

const InformationPiece = ({ direction }: { direction: string }) => {
	return (
		<motion.div
			variants={slideIn(direction, 'spring', 0.3)}
			initial="hidden"
			whileInView="show"
			className="flex flex-col md:max-w-[580px] max-w-[500px] overflow-x-hidden"
		>
			<h1 className="font-bebasNeue font-normal text-2xl text-white mb-4">
				Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit nulla
				commodo.
			</h1>

			<p className="font-robotoCondensed text-normal text-sm text-white mb-6">
				Mauris varius ipsum mauris, rutrum lobortis magna efficitur a. Donec
				egestas, nisl vehicula feugiat ornare, diam turpis efficitur mi, ac
				venenatis eros ipsum ac arcu. Vestibulum et [...]
			</p>

			<button className="relative border-b-2 border-white w-14 pb-2 transform transition-transform duration-300 hover:translate-y-[6px]">
				<div className="flex flex-row items-center gap-2 transform transition-transform duration-300 hover:translate-y-[-8px] hover:scale-110">
					<p className="font-robotoCondensed text-normal text-sm text-white">
						Rozwiń
					</p>
					<FaArrowDown className="text-sm text-white" />
				</div>
			</button>
		</motion.div>
	);
};

const Information = () => {
	return (
		<div
			id="faq"
			className="flex w-full bg-gray-200 justify-between md:flex-row flex-col items-center md:px-24 px-6 md:py-[88px] py-16 gap-10"
		>
			<InformationPiece direction="left" />
			<InformationPiece direction="right" />
		</div>
	);
};

export default Information;
