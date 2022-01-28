import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';



function App() {

	return (
		<div className={'app-wrapper'}>
			<Header />
			<Nav />
			<main className={'mainContent'}>
				app-mainContent
			</main>
			<Footer />
		</div>

	);
}

export default App;
