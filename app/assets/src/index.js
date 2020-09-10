import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {applyMiddleware, compose, createStore} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/index'
import RootComponent from './components/index'

fetch('/db-get')
	.then(response => response.json())
	.then(data => {
		const preloadedState = {
			tasks: data
		}
		const store = createStore(
			rootReducer,
			preloadedState,
			compose(
				applyMiddleware(
					thunk
				),
				window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
			)
		)
		render(
			<Provider store={store}>
				<RootComponent />
			</Provider>,
			document.getElementById('app')
		)
	})
	.catch(error => error)
