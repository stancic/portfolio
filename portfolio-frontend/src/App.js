import React from 'react'
import './App.scss'
import Navigation from './components/navigation-bar/Navigation'


//DATA OBJECTS IMPORTING
import {linksEN, linksHR} from './components/data_objects/links'


function App() {
	return (
		<div>
			<Navigation {...linksEN}/>
		</div>
	)
}

export default App
