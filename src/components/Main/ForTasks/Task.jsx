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