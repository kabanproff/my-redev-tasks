import React, { useEffect, useState } from "react"


const VisibleComp = ({ reCou, oldCou }) => {

	const [count, setCount] = useState(oldCou)

	useEffect(() => {
		console.log(`--VisibleCompMount--`)
		return () => {
			console.log(`--VisibleCompWillUnmount- ${count}-`)

		}
	}
		, [count])

	useEffect(() => {
		console.log('--VisCompUpdate--')
		reCou(count)
	})

	return (<>

		<div>VisibleComponent count = {count}</div>
		<button onClick={() => setCount(count + 1)}>Add count +1</button>
	</>
	)
}

export default React.memo(VisibleComp)