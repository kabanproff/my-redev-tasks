import React from 'react';
import s from './Item.module.css';

class Item extends React.Component {
	render() {
		return (
			// console.log({this.props.itemText});
			<li className={s.li}>{this.props.itemText}</li>
		)
	}
}

export default Item;