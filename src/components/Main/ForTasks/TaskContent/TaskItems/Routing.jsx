import {
	Link,
	Route,
	Routes,
	useLocation,
	// useParams
} from "react-router-dom";


// const SelCom = () => <h3>Please select a topic</h3>
const About = () => <h2>About</h2>
const Home = () => <h2>Home</h2>
const Topics = () => {
	let loc = useLocation().pathname;
	// let topicId = useParams();
	// console.log(topicId)
	console.log(loc)
	// console.log(`${loc}:Comp`)
	return (
		<div>
			<h2>Topics</h2>
			<ul>
				<li><Link to={`:Comp`}>Components</Link></li>
				<li><Link to={`${loc}`}>Props and State</Link></li>

			</ul>
			<Routes>
				<Route path={`:Comp`} element={<Comp />} />
				{/* <Route path={`${loc}/compone`} element={<SelCom />} /> */}
			</Routes>

		</div>
	)
}

// const Topic = () => {
// 	let topicId = useParams();
// 	return (
// 		<h3>Request topic ID: {topicId}</h3>
// 	)
// }

const Routing = () => {
	return (

		<div>
			<ul>
				<li><Link to='/Routing/'>Home</Link></li>
				<li><Link to='/Routing/about'>About</Link></li>
				<li><Link to='/Routing/topics'>Topics</Link></li>
			</ul>

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/topics/*' element={<Topics />} />
			</Routes>
		</div>

	)
}
function Comp(p) {
	return (
		<div>
			<div>Comp</div>
			<button onClick={() => console.log(p)}>back</button>
		</div>
	)
}

export default Routing;