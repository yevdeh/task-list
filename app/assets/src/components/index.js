import React from 'react'
import TaskAddContainer from '../containers/task-add'
import TasksContainer from '../containers/tasks'
import TasksSaveContainer from '../containers/tasks-save'

const RootComponent = () => (
	<div>
		<TaskAddContainer />
		<TasksContainer />
		<TasksSaveContainer />
	</div>
)

export default RootComponent
