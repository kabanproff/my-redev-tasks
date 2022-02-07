import { useState } from "react";
import Count from "./UseMemo&ReactMemo/Count";
import IsFive from "./UseMemo&ReactMemo/IsFive";



const UseMemo_ReactMemo = () => {
	const [count1, setCount1] = useState(0);
	const [count2, setCount2] = useState(0);

	return (
		<>
			<h5>Счётчик 1:</h5>
			<div className="counter">
				<button onClick={() => setCount1(count1 + 1)}>+</button>
				<button onClick={() => setCount1(count1 - 1)}>-</button>
				<Count id={1} value={count1} />
			</div>

			<h5>Счётчик 2:</h5>
			<div className="counter">
				<button onClick={() => setCount2(count2 + 1)}>+</button>
				<button onClick={() => setCount2(count2 - 1)}>-</button>
				<Count id={2} value={count2} />
				<IsFive value={count2} />
			</div>
		</>
	)
}

export default UseMemo_ReactMemo;