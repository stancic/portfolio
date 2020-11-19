//IMPORT DEPENDENCIES
import React from 'react'
import Navigation from '../navigation-bar/Navigation'
import { useSelector } from 'react-redux'

//DATA OBJECTS IMPORTING
import {linksENProjects} from '../data_objects/links'

//IMPORT STYLES
import './projects.scss'

function Projects() {
	
	let projects = useSelector(state => state.projects)
	console.log('PROJECTS', projects)

	return (
		<div>
			<Navigation {...linksENProjects}/>
			
			<div className="projects-page-data-container">
				<div className="projects-page-data-left">
					<ul>
						{projects.map(project => 
							<li key={project.id}>{project.title}</li>		
						)}
					</ul>
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
