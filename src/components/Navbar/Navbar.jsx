import s from './Navbar.module.css';
import Items from './Items/Items';



const Navbar = () => {
	return (
		<nav className={s.nav}>
			<Items />
		</nav>
	);
}

export default Navbar;