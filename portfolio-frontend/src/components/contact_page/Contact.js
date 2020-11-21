//IMPORT DEPENDENCIES
import React from 'react'

//IMPORT COMPONENTS
import Navigation from '../navigation-bar/Navigation'
import ContactForm from './ContactForm'
import { useSelector } from 'react-redux'


//IMPORT STYLES
import './contact.scss'


//DATA OBJECT IMPORT
import { linksENContact } from '../data_objects/links'
function Contact() {
	
	return (
		<div>
			<Navigation {...linksENContact} />
			<div className="contact-content-container">
				<div className="left-title-and-contact-container">

					<div className="left-title-container">
						<div className="stroked-title-container">
							<h1 className="stroked-title title-size">Let's talk.</h1>
						</div>
						<div className="normal-title-container">
							<h1 className="normal-title title-size">Let's talk.</h1>
						</div>
					</div>
					<div className="left-contact-container">
						<p className="mail-container">
							dinostancic7@gmail.com
						</p>
						<p className="location-container">
							based in Kutina
						</p>
					</div>
				</div>
				<div className="right-form-and-message-container">
					<div className="right-message-container">
						<p className="message">
							If you want me to work on any of your ideas or pojects,
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
