//IMPORT DEPENDECIES
import React from 'react'

//IMPORT STYLES
import './App.scss'

//IMPORT COMPONENTS
import Navigation from './components/navigation-bar/Navigation'
import Socials from './components/socials/Socials'

//DATA OBJECTS IMPORTING
import {linksEN, linksHR} from './components/data_objects/links'


function App() {
	return (
		<div>
			<Navigation {...linksEN}/>
			<Socials />
		</div>
	)
}

export default App
