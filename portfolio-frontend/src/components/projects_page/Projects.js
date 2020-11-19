//IMPORT DEPENDENCIES
import React, { useState } from 'react'
import Navigation from '../navigation-bar/Navigation'
import { useSelector } from 'react-redux'
import { animations } from 'react-animation'

//DATA OBJECTS IMPORTING
import {linksENProjects} from '../data_objects/links'

//IMPORT STYLES
import './projects.scss'

function Projects() {
	let projects = useSelector(state => state.projects)

	const fadein = {animation: animations.fadeIn}

	const [pictureURL, setPictureURL] = useState("https://i.imgur.com/DclRzsb.png")
	const [description, setDescription] = useState("My idea of this project was to create a movie picker when you're bored, you can track those movies but you'll need to create account for that purpose. I used The Movie Database API for this project.")
	
	const changeDescAndImage = (project) => {
		setPictureURL(project.img_link)
		setDescription(project.description)
		const cursor = document.querySelector('.custom-cursor')
		cursor.classList.add("grow-cursor")
	}
	const removeStyle = () => {
		const cursor = document.querySelector('.custom-cursor')
		cursor.classList.remove("grow-cursor")
	}
	if(window.location.href.indexOf('my_projects')>-1){
		setTimeout(() => {
			document.querySelector(".projects-page-data-container").style.display = "flex";
		}, 2800)
	}
	return (
		<div>
			<Navigation {...linksENProjects}/>
			<div className="projects-page-data-container" style={fadein}>
				<div className="projects-page-data-left">
					<ul>
						{projects.map(project => 
							<li 
								key={project.id} 
								className="project" 
								onClick={() => changeDescAndImage(project)} 
								onMouseOver={() => changeDescAndImage(project)}
								onMouseLeave={removeStyle}>
									&lt;{project.title} /&gt;
							</li>		
						)}
					</ul>
				</div>
				<div className="projects-page-data-right">
					<div className="project-image-gallery">
						<div className="third-square square"></div>
						<div className="second-square square"></div>
						<div className="first-square square">
							<img src={pictureURL} alt="project_picture"/>
						</div>
					</div>
					<div className="project-description">
						<p className="description">{description}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Projects
