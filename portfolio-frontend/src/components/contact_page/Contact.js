//IMPORT DEPENDENCIES
import React, { useEffect, useRef, useState } from 'react'

//IMPORT COMPONENTS
import Navigation from '../navigation-bar/Navigation'
import ContactForm from './ContactForm'


//IMPORT STYLES
import './contact.scss'
import './contactPageMobile.scss'

//DATA OBJECT IMPORT
import { linksENContact } from '../data_objects/links'
function Contact() {

	const [didMount, setDidMount] = useState(false);

	const contactPageRef = useRef()
	
	useEffect(()=>{
		setDidMount(true)
		setTimeout(()=>{
			contactPageRef.current.style.opacity = 1
		}, 100)
		return() => {
			setDidMount(false)
		}
	},[])

	if(!didMount){
		return null
	}

	return (
		<div>
			<Navigation {...linksENContact} />
			<div className="contact-content-container" ref={contactPageRef}>
				<div className="left-title-and-contact-container">

					<div className="left-title-container">
						<div className="stroked-title-container">
							<h1 className="normal-title title-size">Let's talk.</h1>
						</div>
						<div className="normal-title-container">
							<h1 className="stroked-title title-size">Let's talk.</h1>
						</div>
					</div>
					<div className="left-contact-container">
						<div className="mail-container">
							<div className="before">
								<div className="content"></div>
							</div>
							<p className="mail">
								dinostancic7@gmail.com
							</p>
						</div>
						<div className="location-container">
							<div className="before">
								<div className="content"></div>
							</div>
							<p className="location">
								<a href="https://goo.gl/maps/9LTShUcn8SwS7HZW9" target="_blank" rel="noreferrer">based in Kutina</a>
							</p>
						</div>
					</div>
				</div>
				<div className="right-form-and-message-container">
					<div className="right-message-container">
						<p className="message">
							If you want me to work on any of your ideas or projects,
							or you just want to talk, send me a message.
						</p>
					</div>
					<div className="right-form-container">
							<ContactForm />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact
