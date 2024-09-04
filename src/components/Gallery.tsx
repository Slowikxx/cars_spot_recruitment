import { useState } from 'react';

const Gallery = () => {
	const [carFilter, setCarFilter] = useState<string>('passenger');
	return (
		<div id="gallery" className="h-[100vh]">
			<div>
				<p className="text-dark-blue font-normal font-robotoCondensed text-[21.5px] leading-[32.25px]">
					Prezentacja firmy
				</p>
				<h1 className="font-bebasNeue font-normal text-[40px] leading-[48px] text-gray-100">
					ZOBACZ NASZĄ GALERIĘ ZDJĘĆ
				</h1>
				<div className="flex flex-row gap-5">
					<p
						onClick={() => setCarFilter('passenger')}
						className={`font-robotoFlex text-[15px] leading-[22.5px] ${
							carFilter === 'passenger'
								? 'font-semibold text-dark-blue border-b-2 border-dark-blue'
								: 'font-normal text-black'
						} cursor-pointer hover:border-b-2 hover:border-dark-blue hover:text-dark-blue`}
					>
						Samochody osobowe
					</p>
					<p
						onClick={() => setCarFilter('delivery')}
						className={`font-robotoFlex text-[15px] leading-[22.5px] ${
							carFilter === 'delivery'
								? 'font-semibold text-dark-blue border-b-2 border-dark-blue'
								: 'font-normal text-black'
						} cursor-pointer hover:border-b-2 hover:border-dark-blue hover:text-dark-blue`}
					>
						Samochody dostawcze
					</p>
				</div>
			</div>
		</div>
	);
};

export default Gallery;
