import {connect} from 'react-redux'
import TasksSave from '../components/tasks-save'
import {tasksSave} from '../actions'

const mapStateToProps = state => ({
	tasksAreSaving: state.tasksAreSaving
})

const mapDispatchToProps = dispatch => ({
	onClick: () => {
		dispatch(tasksSave())
	}
})

const TasksSaveContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(TasksSave)

export default TasksSaveContainer
