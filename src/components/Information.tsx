import { FaArrowDown } from 'react-icons/fa6';

const Information = () => {
	return (
		<div className="flex w-full h-96 bg-gray-200 justify-between flex-row items-center sm:px-24 px-6">
			<div className="flex flex-col max-w-[580px] gap-4">
				<h1 className="font-bebasNeue font-normal text-2xl text-white">
					ID NOSTRUD ENIM ESSE CONSECTETUR IN EU MOLLIT FUGIAT AUTE. VELIT NULLA
					COMMODO.
				</h1>

				<p className="font-robotoCondensed text-normal text-sm text-white">
					Mauris varius ipsum mauris, retrum lobortis magna efficitur a. Donec
					egestas, nisl vehicula feugiat ornare, diam turpis efficitur mi, ac
					venenatis eros ipsum ac arcu. Vestibulum et [...]
				</p>

				<button className="flex flex-row items-center gap-2 border-b-2 border-white w-14 pb-2">
					<p className="font-robotoCondensed text-normal text-sm text-white">
						Rozwiń
					</p>
					<FaArrowDown className="text-sm text-white" />
				</button>
			</div>
			<div className="flex flex-col max-w-[580px] gap-4">
				<h1 className="font-bebasNeue font-normal text-2xl text-white">
					ID NOSTRUD ENIM ESSE CONSECTETUR IN EU MOLLIT FUGIAT AUTE. VELIT NULLA
					COMMODO.
				</h1>

				<p className="font-robotoCondensed text-normal text-sm text-white">
					Mauris varius ipsum mauris, retrum lobortis magna efficitur a. Donec
					egestas, nisl vehicula feugiat ornare, diam turpis efficitur mi, ac
					venenatis eros ipsum ac arcu. Vestibulum et [...]
				</p>
				<button className="flex flex-row items-center gap-2 border-b-2 border-white w-14 pb-2">
					<p className="font-robotoCondensed text-normal text-sm text-white">
						Rozwiń
					</p>
					<FaArrowDown className="text-sm text-white" />
				</button>
			</div>
		</div>
	);
};

export default Information;
