import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import projectsReducer from './reducers/projectsReducer'


const reducer = combineReducers({
	projects: projectsReducer
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

//just for the purpose of testing
store.subscribe(() => console.log(store.getState()))
export default store