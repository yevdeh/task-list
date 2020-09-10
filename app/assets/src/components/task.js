import React from 'react'
import PropTypes from 'prop-types'

const Task = ({task, onCompletenessChange, onDelete, onNameChange}) => {
	let input = null

	function handleNameChange () {
		onNameChange(input.value)
	}

	return (
		<li>
			<input
				onChange={handleNameChange}
				ref={node => {
					input = node
				}}
				value={task.name}
			/>
			<button
				onClick={onCompletenessChange}
			>
				{task.isDone ? 'Activate' : 'Complete'}
			</button>
			<button
				onClick={onDelete}
			>
				Delete
			</button>
		</li>
	)
}

Task.propTypes = {
	task: PropTypes.shape({
		_id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		isDone: PropTypes.bool.isRequired
	}).isRequired,
	onCompletenessChange: PropTypes.func.isRequired,
	onDelete: PropTypes.func.isRequired,
	onNameChange: PropTypes.func.isRequired
}

export default Task
