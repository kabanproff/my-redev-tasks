import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';



function App() {

	return (
		<div className={'app-wrapper'}>
			<Header />
			<Navbar />
			<Main />
			<Footer />
		</div>

	);
}

export default App;
