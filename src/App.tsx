import {
	HeroSection,
	Navigation,
	Gallery,
	Information,
	Footer,
} from './components';

const App = () => {
	return (
		<>
			<main className="sm:px-24 px-6 h-full w-screen">
				<Navigation />
				<HeroSection />
				<Gallery />
			</main>

			<Information />
			<Footer />
		</>
	);
};

export default App;
