import React from "react";


class Clock extends React.Component {
	constructor(props) {
		super(props)
		this.state = { date: new Date(), tick: 0 }
		console.log(this)
	}

	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(), 1000
		);
	}

	componentWillUnmount() {
		clearInterval(this.timerID)
	}

	tick() {
		this.setState({ date: new Date(), tick: this.state.tick + 1 })
	}

	render() {
		return (
			<div>
				<h3>Привет, мир</h3>
				<h4>Сейчас {this.state.date.toLocaleTimeString()}.</h4>
				<h4>Элемент был загружен {this.state.tick} сек назад.</h4>
			</div>
		)
	}
}

export default Clock;