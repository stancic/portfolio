//IMPORT DEPENDENCIES
import React, { useState } from 'react'

//IMPORT STYLES
import './contactForm.scss'

function ContactForm() {

	const [name, setName] = useState('')
	const [mail, setMail] = useState('')
	const [subject, setSubject] = useState('')
	const [message, setMessage] = useState('')

	return (
		<div>
			<form>
				<div className="name-and-mail-container">
					<div className="name-container">
						&lt;name /&gt;
						<div className="name-input">
							<input type="text" onChange={({target}) => setName(target.value)}/>
						</div>
					</div>
					<div className="mail-container">
						&lt;mail /&gt;
						<div className="mail-input">
							<input type="text" onChange={({target}) => setMail(target.value)}/>
						</div>
					</div>
				</div>

				<div className="subject-container">
					&lt;subject /&gt;
					<div className="subject-input">
						<input type="text" onChange={({target}) => setSubject(target.value)}/>
					</div>
				</div>
				
				<div className="message-container">
					&lt;message /&gt;
					<div className="subject-input">
						<textarea cols="30" rows="10" onChange={({target}) => setSubject(target.value)}></textarea>
					</div>
				</div>

				<div className="button-container">

				</div>
			</form>
		</div>
	)
}

export default ContactForm
