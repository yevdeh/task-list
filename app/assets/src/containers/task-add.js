import {connect} from 'react-redux'
import TaskAdd from '../components/task-add'
import {taskAdd} from '../actions'

const mapDispatchToProps = dispatch => ({
	onSubmit: name => {
		dispatch(taskAdd(name))
	}
})

const TaskAddContainer = connect(
	null,
	mapDispatchToProps
)(TaskAdd)

export default TaskAddContainer
