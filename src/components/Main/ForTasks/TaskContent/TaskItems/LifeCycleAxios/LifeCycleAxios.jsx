import React from "react";
import axios from 'axios';
// import { NavLink } from 'react-router-dom'

class LifeCycleAxios extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {}
		}
	}

	fetchData = async () => {
		const data = await axios.get('https://api.github.com/users/kabanproff');
		console.log(data.data)
		this.setState({ user: data.data })
	}

	componentDidMount() {
		console.log('----didmount----')
		this.fetchData()
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
			</div>
		)
	}
}

export default React.memo(LifeCycleAxios);