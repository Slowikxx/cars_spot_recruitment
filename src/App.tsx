import {
	HeroSection,
	Navigation,
	Gallery,
	Information,
	Footer,
} from './components';

const App = () => {
	return (
		<div className="overflow-x-hidden">
			<main className="sm:px-24 px-6 h-full w-full">
				<Navigation />
				<HeroSection />
				<Gallery />
			</main>

			<Information />
			<Footer />
		</div>
	);
};

export default App;
