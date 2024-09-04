import CustomButton from './CustomButton';
import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoClose } from 'react-icons/io5';
import { textLogo } from '../assets';

const Navigation = () => {
	const [menuOpened, setMenuOpened] = useState<boolean>(false);

	return (
		<nav className="max-w-full mx-4 flex justify-between items-center py-4 bg-transparent">
			<div className="flex flex-row items-center gap-2 cursor-pointer">
				{/* <HiOutlineLightningBolt className="sm:text-4xl text-3xl text-dark-blue" />
				<h1 className="sm:text-3xl text-2xl font-robotoCondensed font-bold text-black">
					<span className="text-dark-blue">Cars</span>Spot
				</h1> */}

				<img src={textLogo} alt="carsspot_logo" />
			</div>
			<div className="sm:flex hidden flex-row gap-4">
				<a
					href="#gallery"
					onClick={(e) => {
						e.preventDefault();
						window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
					}}
					className="font-robotoFlex font-normal leading-6 text-gray-200 cursor-pointer"
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
					className="font-robotoFlex font-normal leading-6 text-gray-200 cursor-pointer"
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
						className="text-3xl text-gray-200"
						onClick={() => setMenuOpened(false)}
					/>
				)}
			</div>

			{menuOpened && (
				<div className="sm:hidden flex absolute top-20 right-0 mx-4 my-2 min-w-28 border-l-2 border-dark-blue max-h-full px-6 flex-col z-10 bg-white h-full">
					<ul className="list-none flex flex-col flex-1 gap-4">
						<li className="font-robotoFlex font-normal leading-6 text-gray-200 cursor-pointer">
							Galeria zdjęć
						</li>
						<li className="font-robotoFlex font-normal leading-6 text-gray-200 cursor-pointer">
							FaQ
						</li>
					</ul>
					<CustomButton
						btnText="Zadzwoń do nas"
						additionalStyles="w-40 h-12 bg-dark-blue text-white-100 hover:opacity-80"
					/>
				</div>
			)}
		</nav>
	);
};

export default Navigation;
