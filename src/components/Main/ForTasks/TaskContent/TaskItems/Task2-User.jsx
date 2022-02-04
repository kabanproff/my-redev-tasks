function ifAdmin(isAdmin) {
	return isAdmin ? 'I am admin' : ''
}

const User = ({ name, age, isAdmin, hi, bye, from: { city, address } }) => {

	return (
		<div className='user'>
			<p>{hi}. My name is {name} : me age is {age}  : {ifAdmin(isAdmin)}</p>
			<p>I'm from {city} : {address}</p>
			<p> {bye()}</p>
		</div>
	)
}

const codText = `
function ifAdmin(isAdmin) {
	return isAdmin ? 'I am admin' : ''
}

const User = ({ name, age, isAdmin, hi, bye, from: { city, address } }) => {

	return (
		<div className='user'>
			<p>{hi}. My name is {name} : me age is {age}  : {ifAdmin(isAdmin)}</p>
			<p>I'm from {city} : {address}</p>
			<p> {bye()}</p>
		</div>
	)
}`

export { User, codText };