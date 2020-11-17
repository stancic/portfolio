//IMPORT DEPENDECIES
import React from 'react'

//IMPORT STYLES
import './App.scss'

//IMPORT COMPONENTS
import Navigation from './components/navigation-bar/Navigation'
import Socials from './components/socials/Socials'
import LandingPage from './components/landing_page/LandingPage'

//DATA OBJECTS IMPORTING
import { linksEN, linksHR } from './components/data_objects/links'
import { dataEN } from './components/data_objects/landingPageData'

function App() {
	return (
		<div>
			<Navigation {...linksEN}/>
			<Socials />
			<LandingPage {...dataEN}/>
		</div>
	)
}

export default App
