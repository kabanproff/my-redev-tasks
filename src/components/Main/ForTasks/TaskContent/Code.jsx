import React from "react"
import { Route, Routes } from "react-router-dom"
import Task1 from "./TaskItems/Task1"



class Code extends React.Component {
	render() {

		const CodeItems = Task1.map((i, d) => {

			return <pre key={Math.trunc(Date.now() * d / 10000)}><code>{i}</code></pre>
		})

		return (
			<Routes>
				<Route path='/Task1/' element={CodeItems}></Route>
			</Routes>
		)
	}
}

export default Code