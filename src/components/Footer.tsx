import { motion } from 'framer-motion';
import { footerAnim } from '../utils/animation';
const Footer = () => {
	return (
		<motion.footer
			variants={footerAnim}
			initial="hidden"
			whileInView="show"
			className="bg-gray-200 flex flex-row justify-between w-full h-16 items-center sm:px-24 px-6 border-t border-white"
		>
			<a
				href="#"
				onClick={(e) => {
					e.preventDefault();
					window.scrollTo({ top: 0, behavior: 'smooth' });
				}}
				className="font-robotoCondensed font-bold text-base text-center text-white cursor-pointer"
			>
				Cars Spot
			</a>

			<a className="font-robotoCondensed font-normal text-base text-center underline text-white cursor-pointer">
				Polityka prywatności
			</a>
		</motion.footer>
	);
};

export default Footer;
