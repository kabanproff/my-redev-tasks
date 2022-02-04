

const task_1_items = `
import s from './Header.module.css';

const Header = () => {
	return (
		<header className={s.header}>
			Header
		</header>
	);
};

export default Header;
`;

const task_2_items = `
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
`;

const task_3_items = `
import s from './Footer.module.css';

const Footer = () => {
	return (
		<footer className={s.footer}>
			Footer
		</footer>
	);
}

export default Footer;
`;

const task_4_items = `
import Task from './ForTasks/Task';
import s from './Main.module.css';

const Main = () => {
	return (
		<main className={s.content}>
			<Task />
		</main>
	)
}

export default Main;
`;

const task_5_items = `
import Item from './Item/Item';
import s from './Items.module.css';

const Items = () => {
	return (
		<ul className={s.ul}>
			<Item itemText={'Task 1'} />
		</ul>
	)
}

export default Items;
`;

const task_6_items = `
import React from 'react';
import s from './Item.module.css';

class Item extends React.Component {
	render() {
		return (
			<li className={s.li}>
				{this.props.itemText}
			</li>
		)
	}
}

export default Item;
`;
const task_7_items = `
import React from 'react';
import s from './Task.module.css';
import Code from './TaskContent/Code';

class Task extends React.Component {
	render() {
		return (
			<div className={s.wrapper}>
				<Code />
			</div>
		)
	}
}

export default Task; 
`;

const task_8_items = `
import React from "react"
import Task1 from "./TaskItems/Task1"

class Code extends React.Component {
	render() {
		return (
			Task1.map(i => <pre><code>{i}</code></pre>)
		)
	}
}

export default Code;
`;

let Task1 = [
	task_1_items,
	task_2_items,
	task_3_items,
	task_4_items,
	task_5_items,
	task_6_items,
	task_7_items,
	task_8_items,
]

Task1 = Task1.map((i, d) => {
	return <pre key={Math.trunc(Date.now() * d / 10000)}><code>{i}</code></pre>
})

export default Task1;