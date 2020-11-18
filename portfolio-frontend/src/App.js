//IMPORT DEPENDECIES
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

//IMPORT STYLES
import './App.scss'

//IMPORT COMPONENTS
import Loading from './components/loading_screen/Loading'
import Navigation from './components/navigation-bar/Navigation'
import Socials from './components/socials/Socials'
import LandingPage from './components/landing_page/LandingPage'
import CustomCursor from './components/custom_cursor/CustomCursor'

//DATA OBJECTS IMPORTING
import { linksEN, linksHR } from './components/data_objects/links'
import { dataEN } from './components/data_objects/landingPageData'

function App() {
	return (
		<Router>
			<CustomCursor />
			<Loading />
			<Navigation {...linksEN}/>
			<Socials />
			<LandingPage {...dataEN}/>
		</Router>
	)
}

export default App
