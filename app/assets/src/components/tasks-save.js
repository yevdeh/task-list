import React from 'react'
import PropTypes from 'prop-types'

const TasksSave = ({tasksAreSaving, onClick}) => (
	<button
		disabled={tasksAreSaving}
		onClick={onClick}
	>
		Save
	</button>
)

TasksSave.propTypes = {
	tasksAreSaving: PropTypes.bool.isRequired,
	onClick: PropTypes.func.isRequired
}

export default TasksSave
