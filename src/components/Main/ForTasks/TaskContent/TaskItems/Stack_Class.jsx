import React from "react";
import Clock from "./Clock";

class UserStack extends React.Component {
	state = {
		count: 0,
	}

	handleClick = () => {
		this.setState(state => ({ count: ++state.count }))
	}
	render() {
		const { name, age } = this.props;
		const { count } = this.state;
		return (
			<div>
				<p>Имя - {name}, возраст - {age}</p>
				<p>{count}</p>
				<button onClick={() => this.handleClick()}> Click me</button >

				<h2>Clock</h2>
				<Clock />
			</div >
		)
	}
}

export default UserStack;