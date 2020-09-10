import {combineReducers} from 'redux'
import tasks from './tasks'
import tasksAreSaving from './tasks-are-saving'

const rootReducer = combineReducers({
	tasks,
	tasksAreSaving
})

export default rootReducer
