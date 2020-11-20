//IMPORT DEPENDENCIES
import React from 'react'

//IMPORT COMPONENTS
import Navigation from '../navigation-bar/Navigation'

//IMPORT STYLES
import './contact.scss'


//DATA OBJECT IMPORT
import { linksENContact } from '../data_objects/links'
function Contact() {
	return (
		<div>
			<Navigation {...linksENContact} />
			<div className="contact-content-container">
				<div className="contact-content-left-container">
					a
				</div>
				<div className="contact-content-right-container">
					b
				</div>
			</div>
		</div>
	)
}

export default Contact
