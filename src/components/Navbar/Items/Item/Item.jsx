import React from 'react';
import s from './Item.module.css';

class Item extends React.Component {
	render() {
		return (
			<li className={this.props.className ? s.li + ' ' + this.props.className : s.li}>
				{this.props.itemText}
			</li>
		)
	}
}

export default Item;