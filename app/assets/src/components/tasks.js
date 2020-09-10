import React from 'react'
import PropTypes from 'prop-types'
import Task from './task'

const Tasks = ({tasks, onTaskCompletenessChange, onTaskDelete, onTaskNameChange}) => (
	<ul>
		{tasks.map(task =>
			(/^abandoned|deleted$/).test(task.dbRelation)
				? null
				: (
					<Task
						key={task._id}
						onCompletenessChange={() => onTaskCompletenessChange(task._id)}
						onDelete={() => onTaskDelete(task._id)}
						onNameChange={name => onTaskNameChange(task._id, name)}
						task={task}
					/>
				)
		)}
	</ul>
)

Tasks.propTypes = {
	tasks: PropTypes.arrayOf(
		PropTypes.shape({
			_id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			isDone: PropTypes.bool.isRequired
		})
	).isRequired,
	onTaskCompletenessChange: PropTypes.func.isRequired,
	onTaskDelete: PropTypes.func.isRequired,
	onTaskNameChange: PropTypes.func.isRequired
}

export default Tasks
