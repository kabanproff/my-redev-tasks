import axios from "axios"
import { useEffect, useState } from "react"
import './RequestGet.css'


const RequestGet = () => {
	const [posts, setPosts] = useState([])
	const [error, setError] = useState('')

	useEffect(() => {
		// axios.get('https://1jsonplaceholder.typicode.com/posts')
		axios.get('https://jsonplaceholder.typicode.com/posts')
			.then(response => {
				console.log(response)
				setPosts(response.data)
			})
			.catch(e => {
				console.log(e);
				setError('Error retreiving data')
			})
	}, [])
	return (
		<div>
			List of Posts
			{
				posts.length ?
					posts.map(post => {
						return <div className={'posts'} key={post.id}>{post.title}</div>
					}) : null
			}
			{error ? <div>{error}</div> : null}
		</div>
	)
}

export default RequestGet;