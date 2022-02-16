import { useState } from "react"
import axios from "axios"


const RequestPost = () => {
	const [nameId, setNameId] = useState('')
	const [title, setTitle] = useState('')
	const [body, setBody] = useState('')
	const newPost = { nameId, title, body }

	const submitHandler = e => {
		e.preventDefault();
		console.log(e)
		console.log({ nameId, title, body })
		// return { nameId, title, body }
		axios.post('https://jsonplaceholder.typicode.com/posts', newPost)
			.then(response => {
				console.log(response)
			})
			.catch(e => console.log(e))
	}
	// how to know the time

	// `${new Date().getHours()}:${new Date().getMinutes()}`
	return (
		<form onSubmit={submitHandler}>
			<div><input type={'text'} name={'nameId'} value={nameId} onChange={e => setNameId(e.target.value)} />Name</div>
			<div><input type={'text'} name={'title'} value={title} onChange={e => setTitle(e.target.value)} />Title</div>
			<div><input type={'text'} name={'body'} value={body} onChange={e => setBody(e.target.value)} />Body</div>
			<button type={'submit'}>Submit</button>
		</form>
	)
}

export default RequestPost;