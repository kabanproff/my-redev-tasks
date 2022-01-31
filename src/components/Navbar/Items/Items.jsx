import React from 'react';
import Item from './Item/Item';
import s from './Items.module.css';

class Items extends React.Component {
	render() {
		return (
			<ul className={s.ul}>
				<Item itemText={'Task 1'} />
				<Item itemText={'Task 2'} />
			</ul>
		)
	}
}

export default Items;