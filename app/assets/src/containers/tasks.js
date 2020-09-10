import {connect} from 'react-redux'
import Tasks from '../components/tasks'
import {taskCompletenessChange, taskDelete, taskNameChange} from '../actions'

const mapStateToProps = state => ({
	tasks: state.tasks
})

const mapDispatchToProps = dispatch => ({
	onTaskCompletenessChange: id => {
		dispatch(taskCompletenessChange(id))
	},
	onTaskDelete: id => {
		dispatch(taskDelete(id))
	},
	onTaskNameChange: (id, name) => {
		dispatch(taskNameChange(id, name))
	}
})

const TasksContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Tasks)

export default TasksContainer
