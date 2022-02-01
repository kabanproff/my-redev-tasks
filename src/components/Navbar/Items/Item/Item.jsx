import React from 'react';
import s from './Item.module.css';
import { NavLink } from 'react-router-dom';


function setActive(elem) {
	return elem.isActive ? s.active : '';
}

class Item extends React.Component {
	render() {
		// console.log(let a = this.props.itemText)
		return (

			<li>
				<NavLink to={`/${(this.props.itemText).split(' ').join('')}`} className={elem => setActive(elem)} >
					{this.props.itemText}
				</NavLink>
			</li >
		)
	}
}

export default Item;