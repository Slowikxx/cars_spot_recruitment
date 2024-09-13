import CustomButton from './CustomButton';
import { useState, useEffect } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoClose } from 'react-icons/io5';
import { textLogo } from '../assets';
import { motion } from 'framer-motion';
import { navAnim, slideIn } from '../utils/animation';

const Navigation = () => {
	const [menuOpened, setMenuOpened] = useState<boolean>(false);

	useEffect(() => {
		if (menuOpened) {
			document.body.classList.add('overflow-hidden');
		} else {
			document.body.classList.remove('overflow-hidden');
		}

		return () => document.body.classList.remove('overflow-hidden');
	}, [menuOpened]);

	return (
		<motion.nav
			variants={navAnim}
			initial="hidden"
			whileInView="show"
			className="max-w-screen px-4 flex justify-between items-center py-4 bg-transparent overflow-x-hidden"
		>
			<div className="flex flex-row items-center gap-2 cursor-pointer">
				<img src={textLogo} alt="carsspot_logo" />
			</div>
			<div className="sm:flex hidden flex-row gap-4">
				<a
					href="#gallery"
					onClick={(e) => {
						e.preventDefault();
						window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
					}}
					className="navLinks"
				>
					Galeria zdjęć
				</a>
				<a
					href="#faq"
					onClick={(e) => {
						e.preventDefault();
						window.scrollTo({
							top: window.innerHeight * 2,
							behavior: 'smooth',
						});
					}}
					className="navLinks"
				>
					FaQ
				</a>
			</div>
			<CustomButton
				btnText="Zadzwoń do nas"
				additionalStyles="w-40 h-12 bg-dark-blue text-white-100 md:flex hidden hover:opacity-80"
			/>

			<div className="sm:hidden flex items-center cursor-pointer">
				{!menuOpened ? (
					<RxHamburgerMenu
						className="text-3xl text-gray-200"
						onClick={() => setMenuOpened(true)}
					/>
				) : (
					<IoClose
						className="text-4xl text-dark-blue"
						onClick={() => setMenuOpened(false)}
					/>
				)}
			</div>

			{menuOpened && (
				<motion.div
					variants={slideIn('top', 'spring', -0.3)}
					initial="hidden"
					whileInView="show"
					className="sm:hidden flex absolute top-20 right-0 w-full border-t-2 py-4 border-dark-blue px-6 flex-col z-10 bg-white h-full"
				>
					<ul className="list-none flex flex-col flex-1 gap-6 justify-center items-center">
						<li>
							<a
								href="#gallery"
								onClick={(e) => {
									e.preventDefault();
									setMenuOpened(false);
									window.scrollTo({
										top: window.innerHeight,
										behavior: 'smooth',
									});
								}}
								className="navLinks text-2xl"
							>
								Galeria zdjęć
							</a>
						</li>
						<li>
							<a
								href="#faq"
								onClick={(e) => {
									e.preventDefault();
									setMenuOpened(false);
									window.scrollTo({
										top: window.innerHeight * 2,
										behavior: 'smooth',
									});
								}}
								className="navLinks text-2xl"
							>
								FaQ
							</a>
						</li>
						<CustomButton
							btnText="Zadzwoń do nas"
							additionalStyles="w-40 h-12 bg-dark-blue text-white-100 hover:opacity-80 mt-10"
						/>
					</ul>
				</motion.div>
			)}
		</motion.nav>
	);
};

export default Navigation;
