import { HeroSection, Navigation, Gallery, Footer } from './components';

const App = () => {
	return (
		<>
			<main className="sm:px-24 px-6 h-full w-full">
				<Navigation />
				<HeroSection />
				<Gallery />
			</main>

			<Footer />
		</>
	);
};

export default App;
