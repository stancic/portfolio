//IMPORT DEPENDENCIES
import React from 'react'

//IMPORT COMPONENTS
import Navigation from '../navigation-bar/Navigation'
import ContactForm from './ContactForm'
import { useSelector } from 'react-redux'


//IMPORT STYLES
import './contact.scss'
import './contactPageMobile.scss'

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
								based in Kutina
							</p>
						</div>
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
