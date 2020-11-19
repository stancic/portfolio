//IMPORT DEPENDENCIES
import React from 'react'
import Navigation from '../navigation-bar/Navigation'

//DATA OBJECTS IMPORTING
import {linksENProjects} from '../data_objects/links'

//IMPORT STYLES
import './projects.scss'

function Projects() {
	return (
		<div>
			<Navigation {...linksENProjects}/>
			
			<div className="projects-page-data-container">
				<div className="projects-page-data-left">
					a
				</div>
				<div className="projects-page-data-right">
					<div className="third-square">
						b
					</div>
					<div className="second-square">
						c
					</div>
					<div className="first-square">
						d
					</div>
				</div>
			</div>
		</div>
	)
}

export default Projects
