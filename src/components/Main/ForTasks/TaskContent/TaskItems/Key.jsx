import { useState } from "react";

const Key = () => {
	const [inpVal, setInpVal] = useState('')
	// const inpvalRef = useRef()
	// console.log(inpvalRef)
	const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
	// console.log(numbers)
	const addStartList = () => {
		setNumbers([+inpVal, ...numbers])
		// setNumbers([inpvalRef.current, ...numbers])
		// В таком случае не будет, рерэндера т.к. реакт следит за стэйтом
		// numbers.unshift(+inpVal)
		// console.log(numbers)
	}
	const addEndList = () => {
		setNumbers([...numbers, +inpVal])
		// setNumbers([...numbers, inpvalRef.current])
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
				// inpvalRef.current = +e.target.value
				// console.log(inpvalRef.current)
			}
			}
				value={inpVal}
			// value={inpvalRef.current}

			/>
			<button onClick={addStartList}>add start list</button>
			<button onClick={addEndList}>add end list</button>
		</div>
	)
}

export default Key;