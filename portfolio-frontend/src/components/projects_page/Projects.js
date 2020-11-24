//IMPORT DEPENDENCIES
import React, { useState } from 'react'
import Navigation from '../navigation-bar/Navigation'
import { useSelector } from 'react-redux'
import { FaCode } from 'react-icons/fa'
import { AiFillEye } from 'react-icons/ai'

//DATA OBJECTS IMPORTING
import {linksENProjects} from '../data_objects/links'

//IMPORT STYLES
import './projects.scss'
import './projectsPageMobile.scss'

function Projects() {
	let projects = useSelector(state => state.projects)


	const [pictureURL, setPictureURL] = useState("https://i.imgur.com/DclRzsb.png")
	const [description, setDescription] = useState("My idea of this project was to create a movie picker when you're bored, you can track those movies but you'll need to create account for that purpose. I used The Movie Database API for this project.")
	const [gitURL, setGitURL] = useState("https://github.com/stancic/boredMoviePicker")
	const [livePreviewURL, setLivePreview] = useState("https://stancic.github.io/boredMoviePicker/")



	const changeDescAndImage = (project) => {
		setPictureURL(project.img_link)
		setDescription(project.description)
		setGitURL(project.git)
		setLivePreview(project.live_preview)
		const cursor = document.querySelector('.custom-cursor')
		cursor.classList.add("grow-cursor")
	}

	const growCursor = () => {
		const cursor = document.querySelector('.custom-cursor')
		cursor.classList.add("grow-cursor")
	}

	const removeStyle = () => {
		const cursor = document.querySelector('.custom-cursor')
		cursor.classList.remove("grow-cursor")
	}

	return (
		<div>
			<Navigation {...linksENProjects}/>
			<div className="projects-page-data-container">
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
							<div className="git-and-live-preview">
								<div className="display-style">
									<a href={gitURL} target="_blank" rel="noreferrer" onMouseOver={growCursor} onMouseLeave={removeStyle}>
										<FaCode className="link-icon"/>
										<p>&lt;view_code /&gt;</p>
									</a>
								</div>
								<div className="display-style" onMouseOver={growCursor} onMouseLeave={removeStyle}>
									<a href={livePreviewURL} target="_blank" rel="noreferrer" >
										<AiFillEye className="link-icon"/>
										<p>&lt;live_preview /&gt;</p>
									</a>
								</div>
							</div>
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
