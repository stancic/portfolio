import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import projectsReducer from './reducers/projectsReducer'
import loginReducer from './reducers/loginReducer'

const reducer = combineReducers({
	projects: projectsReducer,
	user: loginReducer
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))


//Just for the purpose of testing what store's output is
console.log('store',store.getState())

export default store