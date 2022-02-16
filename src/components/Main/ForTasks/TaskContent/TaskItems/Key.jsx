import { useEffect, useState } from "react";
const Key = () => {
	const [inpVal, setInpVal] = useState('')
	const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
	// console.log(numbers)
	const addStartList = () => {
		setNumbers([+inpVal, ...numbers])
		// В таком случае не будет, рерэндера т.к. реакт следит за стэйтом
		// numbers.unshift(+inpVal)
	}
	const addEndList = () => {
		setNumbers([...numbers, +inpVal])
		// numbers.push(+inpVal)
	}

	return (
		<div>
			<ul>
				{console.log(numbers), numbers.map((i, d) => {
					return <li key={`${d}`}>{i}</li>
				})}
			</ul>
			<input type="text" onChange={(e) => {
				setInpVal(e.target.value)
			}
			} value={inpVal} />
			<button onClick={addStartList}>add start list</button>
			<button onClick={addEndList}>add end list</button>
		</div>
	)
}

export default Key;