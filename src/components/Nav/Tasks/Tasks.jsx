import React from 'react';
import s from './Tasks.module.css';

class Tasks extends React.Component {
	render() {
		return (
			<ul className={s.tasks}>
				<li className={s.task}>Task1</li>
				<li className={s.task}>Task1</li>
				<li className={s.task}>Task1</li>
				<li className={s.task}>Task1</li>
				<li className={s.task}>Task1</li>
			</ul>
		)
	}
}

export default Tasks;