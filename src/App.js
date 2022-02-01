import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import { BrowserRouter } from 'react-router-dom';



function App() {

	return (
		<BrowserRouter>
			<div className={'app-wrapper'}>
				<Header />
				<Navbar />
				<Main />
				<Footer />
			</div>
		</BrowserRouter>


	);
}

export default App;
