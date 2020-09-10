import {
	TASK_ADD,
	TASK_COMPLETENESS_CHANGE,
	TASK_NAME_CHANGE,
	TASK_DELETE,
	TASKS_SAVE_SUCCESS
} from '../actions/action-types'

const tasks = (state = [], action) => {
	switch (action.type) {
		case TASK_ADD:
			return [
				...state,
				{
					_id: action.id,
					dbRelation: 'new',
					isDone: false,
					name: action.name
				}
			]
		case TASK_COMPLETENESS_CHANGE:
			return state.map(task =>
				task._id === action.id
					? {
						...task,
						dbRelation: task.dbRelation === 'new' ? 'new' : 'modified',
						isDone: !task.isDone
					}
					: task
			)
		case TASK_NAME_CHANGE:
			return state.map(task =>
				task._id === action.id
					? {
						...task,
						dbRelation: task.dbRelation === 'new' ? 'new' : 'modified',
						name: action.name
					}
					: task
			)
		case TASK_DELETE:
			return state.map(task =>
				task._id === action.id
					? {
						...task,
						dbRelation: task.dbRelation === 'new' ? 'abandoned' : 'deleted'
					}
					: task
			)
		case TASKS_SAVE_SUCCESS:
			return state
				.filter(task => !(/^abandoned|deleted$/).test(task.dbRelation))
				.map(task => ({
					...task,
					dbRelation: 'synchronized'
				}))
		default:
			return state
	}
}

export default tasks
