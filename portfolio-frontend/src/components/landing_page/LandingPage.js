//DEPENDENCIES IMPORT
import React, { useRef, useState, useEffect } from 'react'
import { AnimateOnChange } from 'react-animation'

//DATA OBJECTS IMPORTING
import { linksENLanding } from '../data_objects/links'

//COMPONENTS IMPORT
import Navigation from '../navigation-bar/Navigation'
import { Link } from 'react-router-dom'
import {ReactComponent as Logo} from '../../img/code.svg'
//IMPORT STYLES
import './landingpage.scss'
import './landingPageMobile.scss'

function LandingPage({title, description, contact, download}){

	const [didMount, setDidMount] = useState(false);

	const [current, setCurrent] = useState(0)
	const [currentWidth, setCurrentWidth] = useState(0)
	const [currentTextStyle, setCurrentTextStyle] = useState({})
	const currentTextRef = useRef()
	const nextTextRef = useRef()

	const containerRef = useRef()

	const nextItem = current => {
		if(current === title.length - 1){
			return 0
		} else {
			return current + 1
		}
	}

	useEffect(() => {
		const interval = setInterval(()=>{
			setCurrent(nextItem(current))
			nextTextRef.current.innerText = title[nextItem(current)]
			// eslint-disable-next-line no-unused-vars
			const nextTextSize = nextTextRef.current.offsetWidth 
			setCurrentWidth(nextTextRef.current.offsetWidth)
			setCurrentTextStyle({
				opacity: 0
			})
			setTimeout(()=>{
				setCurrentTextStyle({
					opacity: 1
				})
			}, 500)
		}, 2000)
		return(()=>{
			clearInterval(interval)
		})
	})


	useEffect(()=>{
		setDidMount(true)
		setTimeout(()=>{
			containerRef.current.style.opacity = 1
		}, 600)
		return() => {
			setDidMount(false)
		}
	},[])
	
	if(!didMount){
		return null
	}
	return (
		<div>
			<Navigation {...linksENLanding}/>
			<div className="landing-page-data-container" ref={containerRef}>
				<div className="left-side-container">
					<div className="left-side-title-container">
						<div className="left-side-title">
							<AnimateOnChange className="foo" durationOut={500}>
								<div className="container"
									style={{width: currentWidth ? currentWidth + 'px' : 'auto'}}
									>
									<div className="text-width-wrapper"
										style={currentTextStyle}
										ref={currentTextRef}
										>
										{title[current]}
									</div>
								</div>
							</AnimateOnChange>
						</div>
						<div className="hidden-text" ref={nextTextRef}></div>
					</div>
					<div className="left-side-description-container">
						<p className="left-side-description">{description}</p>
					</div>
					<div className="left-side-buttons-container">
						<Link to="/contact_me">
							<button className="contact-button">{contact}</button>
						</Link>
						<a href="https://drive.google.com/file/d/1PJA7rZpjLaAgJiENVXglDka1vQpi2RQq/view?usp=sharing" target="_blank" rel="noreferrer">
							<button className="download-button">Download CV!</button>
						</a>
					</div>
				</div>
				<div className="right-side-container">
					<div className="right-side-image-container">					
						<Logo />
					</div>
				</div>
			</div>
		</div>
	)
}

export default LandingPage
