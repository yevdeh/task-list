import React from 'react'
import PropTypes from 'prop-types'

const TaskAdd = ({onSubmit}) => {
	let input = null

	function handleSubmit (e) {
		e.preventDefault()
		if (!input.value.trim()) {
			return
		}
		onSubmit(input.value)
		input.value = ''
		input.focus()
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				autoFocus="true"
				ref={node => {
					input = node
				}}
			/>
			<button>Add</button>
		</form>
	)
}

TaskAdd.propTypes = {
	onSubmit: PropTypes.func.isRequired
}

export default TaskAdd
