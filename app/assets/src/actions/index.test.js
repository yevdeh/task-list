import * as actionTypes from './action-types'
import * as actionCreators from './index'

const testTaskId = '5ac0f5d267627dfca3cd3cee'
const testTaskName = 'name'

test('taskAdd', () => {
	const action = actionCreators.taskAdd(testTaskName)
	expect(action.type).toBe(actionTypes.TASK_ADD)
	expect(action.id).toMatch(/^[0-9a-f]{24}$/)
	expect(action.name).toBe(testTaskName)
})

test('taskCompletenessChange', () => {
	expect(actionCreators.taskCompletenessChange(testTaskId)).toEqual({
		type: actionTypes.TASK_COMPLETENESS_CHANGE,
		id: testTaskId
	})
})

test('taskNameChange', () => {
	expect(actionCreators.taskNameChange(testTaskId, testTaskName)).toEqual({
		type: actionTypes.TASK_NAME_CHANGE,
		id: testTaskId,
		name: testTaskName
	})
})

test('taskDelete', () => {
	expect(actionCreators.taskDelete(testTaskId)).toEqual({
		type: actionTypes.TASK_DELETE,
		id: testTaskId
	})
})

test('tasksSaveRequest', () => {
	expect(actionCreators.tasksSaveRequest()).toEqual({
		type: actionTypes.TASKS_SAVE_REQUEST
	})
})

test('tasksSaveSuccess', () => {
	expect(actionCreators.tasksSaveSuccess()).toEqual({
		type: actionTypes.TASKS_SAVE_SUCCESS
	})
})
