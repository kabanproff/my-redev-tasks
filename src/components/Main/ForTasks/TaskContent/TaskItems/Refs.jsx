import React, { useRef, useState } from "react";
import s from './Refs.module.css'
// class Refs extends React.Component {
// 	submit() {
// 		console.log('submit')
// 		// console.log(this.input.value)
// 		console.log(this)
// 		// console.log(this.input)
// 		// this.input.focus();
// 		console.log(this.input.value || this.input2.value)
// 	}
// 	render() {
// 		return (
// 			<div>
// 				<input type='text' placeholder="test" ref={(input => this.input = input)} />
// 				<input type='password' placeholder="password" ref={(input => this.input2 = input)} />
// 				<button onClick={this.submit.bind(this)}>Submit</button>
// 			</div>
// 		)
// 	}
// }

const Refs = () => {
	const ulRef = useRef();
	// console.log(ulRef)
	const [numbers, setNumbers] = useState([1, 2, 3, 4, 5])

	const addNumber = () => {
		const lastNumber = numbers[numbers.length - 1];
		setNumbers([...numbers, lastNumber + 1])
	};


	const handleScroll = () => {
		console.log('scrolling')
	};

	React.useEffect(() => {
		console.log(ulRef)
		ulRef.current.addEventListener('scroll', handleScroll);
	}, [numbers]);

	const removeScroll = () => {
		console.log(ulRef)
		ulRef.current.removeEventListener('scroll', handleScroll);
	};


	return (
		<div>
			<ul className={s.list} ref={ulRef}>
				{numbers.map(n => {
					return <li key={n}>{n}</li>
				})}
			</ul>
			<button onClick={addNumber}>✅Добавить число</button>
			<button onClick={removeScroll}>⛔Не следить </button>
		</div>
	)
}

export default Refs;