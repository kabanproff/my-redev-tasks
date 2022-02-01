import React from "react"
import Task1 from "./TaskItems/Task1"

class Code extends React.Component {
	render() {
		return (
			Task1.map(i => <pre><code>{i}</code></pre>)
		)
	}
}

export default Code