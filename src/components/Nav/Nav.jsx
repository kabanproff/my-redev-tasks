import s from './Nav.module.css';
import Tasks from './Tasks/Tasks';



const Nav = () => {
	return (
		<nav className={s.nav}>
			<Tasks />
		</nav>
	);
}

export default Nav;