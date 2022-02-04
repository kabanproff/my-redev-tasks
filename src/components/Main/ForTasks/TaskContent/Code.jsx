import React from "react"
import { Route, Routes } from "react-router-dom"
import Task1 from "./TaskItems/Task1"
import { User, codText } from "./TaskItems/Task2-User"

function sayHi() {
	return 'Hii'
}
function sayBye() {
	return 'Bye'
}
let from = {
	city: 'Minsk',
	address: 'st. Landera 66-76'
}

class Code extends React.Component {
	render() {

		return (
			<Routes>
				<Route path='/Task1/' element={Task1}></Route>
				<Route path='/Task2/' element={<div><User name={'Artyom'} age={35} hi={sayHi()} bye={sayBye} isAdmin from={from} />
					<div><pre><code>{codText}</code></pre></div></div>
				}></Route>
			</Routes>
		)
	}
}

export default Code