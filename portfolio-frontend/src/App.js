//IMPORT DEPENDECIES
import React, { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { useDispatch } from 'react-redux'

//IMPORT STYLES
import './App.scss'

//IMPORT COMPONENTS
import Loading from './components/loading_screen/Loading'
import Socials from './components/socials/Socials'
import LandingPage from './components/landing_page/LandingPage'
import CustomCursor from './components/custom_cursor/CustomCursor'
import Projects from './components/projects_page/Projects'
import { getProjects } from './reducers/projectsReducer'


//DATA OBJECTS IMPORTING
import { dataEN } from './components/data_objects/landingPageData'

function App() {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getProjects())
	}, [])
	return (
		<Router>
			<CustomCursor />
			<Loading />
			<Socials />
			{/*<LandingPage {...dataEN}/>*/}
			<Projects />
		</Router>
	)
}

export default App
