/* eslint no-bitwise: 0 */
/* eslint no-magic-numbers: 0 */

import * as actionTypes from './action-types'

export const taskAdd = name => ({
	type: actionTypes.TASK_ADD,
	id: (
		(new Date().getTime() / 1000 | 0).toString(16) +
		'xxxxxxxxxxxxxxxx'.replace(/[x]/g, () => (Math.random() * 16 | 0).toString(16))
	).toLowerCase(),
	name
})

export const taskCompletenessChange = id => ({
	type: actionTypes.TASK_COMPLETENESS_CHANGE,
	id
})

export const taskNameChange = (id, name) => ({
	type: actionTypes.TASK_NAME_CHANGE,
	id,
	name
})

export const taskDelete = id => ({
	type: actionTypes.TASK_DELETE,
	id
})

export const tasksSaveRequest = () => ({
	type: actionTypes.TASKS_SAVE_REQUEST
})

export const tasksSaveSuccess = () => ({
	type: actionTypes.TASKS_SAVE_SUCCESS
})

export const tasksSave = () => (dispatch, getState) => {
	dispatch(tasksSaveRequest())
	const {tasks} = getState()
	const data = tasks.filter(task => (/^new|modified|deleted$/).test(task.dbRelation))

	return fetch('/db-save', {
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json'
		},
		method: 'POST'
	}).then(
		response => {
			dispatch(tasksSaveSuccess())

			return response
		},
		error => error
	)
}
