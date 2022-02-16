import React from "react";
import axios from 'axios';
import VisibleComp from "./VisibleComp";

// function retCountChild(count) {
// 	console.log(`--CildCount - ${count}--`)
// 	// return count;
// }


class LifeCycleAxios extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			user: {},
			numbers: 0,
			visibleComp: true,
			childCount: 0,
			inpVal: '',
		}
	}

	fetchData = async () => {
		const data = await axios.get('https://api.github.com/users/kabanproff');
		console.log(data.data)
		this.setState({ user: data.data })
	}

	retCountChild = (count) => {
		console.log(`--CildCount - ${count}--`)
		// return count;
		this.setState(() => ({ childCount: count }))
	}

	componentDidMount() {
		console.log('----didmount----')
		this.fetchData()
	}

	componentDidUpdate() {
		console.log('--- didUpdate---')
		console.log(this.state)

	}

	// shouldComponentUpdate() {
	// 	return this.state.numbers === 0 ? false : true
	// }

	toggle() {
		this.state.visibleComp ? this.setState(() => ({ visibleComp: false })) : this.setState(() => ({ visibleComp: true }))
	}

	render() {
		console.log('-render-')
		let { avatar_url, name, location, html_url } = this.state.user;
		return (
			<div>
				<h1>Hi</h1>
				<img src={avatar_url} alt="Я" />
				<div>My name is {name}</div>
				<div>I'm from in {location}</div>
				<div><a href={html_url} target='_blank' rel="noreferrer"> My GIT</a></div>
				<button onClick={() => this.setState(state => ({ numbers: state.numbers + 1 }))}>{this.state.numbers} DIDuPDATE</button>

				<div>{this.state.childCount}</div>
				<div>{this.state.visibleComp && <VisibleComp reCou={this.retCountChild} oldCou={this.state.childCount} />}</div>

				<button onClick={this.toggle.bind(this)}>visible not visible</button>
				<input
					type={'text'}
					onChange={e => {
						console.log(this.state.inpVal);
						this.setState(() => ({ inpVal: e.target.value }))
					}}
					value={this.state.inpVal} />
				<div>{this.state.inpVal}</div>
			</div >
		)
	}
}



export default LifeCycleAxios;