import React, { useMemo } from 'react'
let renderCount = 0;

export default React.memo(function IsFive({ value }) {
	console.log(`🧨 isFive render: ${++renderCount}`)

	const getResult = useMemo(() => {
		let i = 0;
		while (i < 60000000) ++i;
		console.log(value)
		return value === 5 ? `✅ Это пять :)` : `❌ Это не пять :(`
	}, [value])
	return (
		<div>{getResult}</div>
	)
}, (prevProps, nextProps) => {
	return nextProps.value === 5 || prevProps.value === 5
		? false : true
}
);