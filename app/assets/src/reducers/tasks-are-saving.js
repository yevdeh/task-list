import {
	TASKS_SAVE_REQUEST,
	TASKS_SAVE_SUCCESS
} from '../actions/action-types'

const tasksAreSaving = (state = false, action) => {
	switch (action.type) {
		case TASKS_SAVE_REQUEST:
			return true
		case TASKS_SAVE_SUCCESS:
			return false
		default:
			return state
	}
}

export default tasksAreSaving
