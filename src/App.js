import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';



function App() {

	return (
		<div className={'app-wrapper'}>
			<Header />
			<Navbar />
			<main className={'mainContent'}>
				app-mainContent
			</main>
			<Footer />
		</div>

	);
}

export default App;
