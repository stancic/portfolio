import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import loadingPageReducer from './reducers/loadingPageReducer'
import pageStatusReducer from './reducers/pageStatusReducer'
import projectsReducer from './reducers/projectsReducer'


const reducer = combineReducers({
	projects: projectsReducer,
	loading: loadingPageReducer,
	page: pageStatusReducer
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

//just for the purpose of testing
export default store