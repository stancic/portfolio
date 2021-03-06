//IMPORT DEPENDECIES
import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getProjects } from './reducers/projectsReducer'

//IMPORT STYLES
import './App.scss'

//IMPORT COMPONENTS
import Loading from './components/loading_screen/Loading'
import Socials from './components/socials/Socials'
import LandingPage from './components/landing_page/LandingPage'
import CustomCursor from './components/custom_cursor/CustomCursor'
import Projects from './components/projects_page/Projects'
import MobileNavigation from './components/navigation-bar/mobile-navigation/MobileNavigation'
import Contact from './components/contact_page/Contact'

//DATA OBJECTS IMPORTING
import { dataEN } from './components/data_objects/landingPageData'
import { linksENMobile } from './components/data_objects/links'

function App() {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getProjects())
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	return (
		<Router>
			<div className="container-for-all">
				<CustomCursor />
				<Socials />
				<MobileNavigation {...linksENMobile}/>
						<Loading />
				<Switch>
					<Route path="/my_projects">		
						<Projects />
					</Route>
					<Route path="/contact_me">
						<Contact />
					</Route>
					<Route path="/">
						<LandingPage {...dataEN}/>
					</Route>
				</Switch>
			</div>
		</Router>
	)
}

export default App
