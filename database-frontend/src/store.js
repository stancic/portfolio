import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import projectsReducer from './reducers/projectsReducer'
import loginReducer from './reducers/loginReducer'
import throttle from 'lodash/throttle'
import notificationStatusReducer from './reducers/notificationStatusReducer'

//local storage for saving user

const loadState = () => {
	try{
		const serializedState = localStorage.getItem('user')
		if(serializedState === null){
			return undefined
		}
		else return JSON.parse(serializedState)
	} catch(error){
		console.log(error)
		return undefined
	}
}


//saving to local storage

const saveState = (state) => {
	try{
		const serializedState = JSON.stringify(state)
		localStorage.setItem('user', serializedState)
	} catch(error){
		//just ignore if error happens
		console.log(error)
	}
}

const persistedState = loadState()


const reducer = combineReducers({
	projects: projectsReducer,
	user: loginReducer,
	notification: notificationStatusReducer
})

const store = createStore(reducer, persistedState, composeWithDevTools(applyMiddleware(thunk)))

//avoids excessively store subscribing with throttle
store.subscribe(throttle(() => {
	saveState({
		user: store.getState().user
	})
}, 1000))

store.subscribe(() => console.log(store.getState()))

export default store