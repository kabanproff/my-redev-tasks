import React from "react"
import { Route, Routes } from "react-router-dom"
import Key from "./TaskItems/Key"
import LifeCycleAxios from "./TaskItems/LifeCycleAxios/LifeCycleAxios"
import Refs from "./TaskItems/Refs"
import RequestGet from "./TaskItems/Requests/RequestGet"
import RequestPost from "./TaskItems/Requests/RequestPost"
import UserStack from "./TaskItems/Stack_Class"
import Task1 from "./TaskItems/Task1"
import { User, codText } from "./TaskItems/Task2-User"
import UseMemoReactMemo from "./TaskItems/UseMemo&ReactMemo"

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
				<Route path='/' element={Task1}></Route>
				<Route path='/Task1/' element={Task1}></Route>
				<Route path='/Task2/' element={<div><User name={'Artyom'} age={35} hi={sayHi()} bye={sayBye} isAdmin from={from} />
					<div><pre><code>{codText}</code></pre></div></div>
				}></Route>
				<Route path='/Task3/' element={<UserStack name={'Kola'} age={23} />}></Route>
				<Route path='/Task4/' element={<UseMemoReactMemo />}></Route>
				<Route path='/Task5/' element={<Refs />}></Route>
				<Route path='/Task6LifeCycleAxios/' element={<LifeCycleAxios />}></Route>
				<Route path='/Key' element={<Key />}></Route>
				<Route path='/RequestGet' element={<RequestGet />}></Route>
				<Route path='/RequestPost' element={<RequestPost />}></Route>
			</Routes>
		)
	}
}

export default Code