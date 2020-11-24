//IMPORT DEPENDENCIES
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { send } from '../../reducers/mailReducer'

//IMPORT STYLES
import './contactForm.scss'

function ContactForm() {

	const dispatch = useDispatch()

	const [name, setName] = useState('')
	const [mail, setMail] = useState('')
	const [subject, setSubject] = useState('')
	const [message, setMessage] = useState('')

	const addStyle = () => {
		const cursor = document.querySelector('.custom-cursor')
		cursor.classList.add("grow-cursor")
	}
	const removeStyle = () => {
		const cursor = document.querySelector('.custom-cursor')
		cursor.classList.remove("grow-cursor")
	}
	
	const sendMail = (event) => {
		let mailObject = {
			name: name,
			mail: mail,
			subject: subject,
			message: message
		}
		dispatch(send(mailObject))
		setName('')
		setMail('')
		setSubject('')
		setMessage('')
	}

	return (
		<div>
			<form onSubmit={sendMail}>
				<div className="name-and-mail-container">
					<div className="name-container">
						<input 
							type="text" 
							className="name input-size border-and-background" 
							onChange={({target}) => setName(target.value)}
							onMouseEnter={addStyle}
							onMouseLeave={removeStyle} 
							placeholder="&lt;name /&gt;"/>
					</div>
					<div className="mail-container">
						<input 
						type="text" 
						className="mail input-size border-and-background" 
						onChange={({target}) => setMail(target.value)}
						onMouseEnter={addStyle}
						onMouseLeave={removeStyle}
						placeholder="&lt;mail /&gt;"/>
					</div>
				</div>

				<div className="subject-container">
					<input 
					type="text" 
					className="subject input-size border-and-background" 
					onChange={({target}) => setSubject(target.value)} 
					onMouseEnter={addStyle}
					onMouseLeave={removeStyle}
					placeholder="&lt;subject /&gt;"/>
				</div>
				
				<div className="message-container">
					<textarea 
					cols="60" 
					rows="10" 
					className="message input-size border-and-background" 
					onChange={({target}) => setMessage(target.value)} 
					onMouseEnter={addStyle}
					onMouseLeave={removeStyle}
					placeholder="&lt;message /&gt;"></textarea>
				</div>

				<div className="button-container">
					<button 
					className="contact"
					onMouseEnter={addStyle}
					onMouseLeave={removeStyle}
					type="submit">
						Contact me!
					</button>
				</div>
			</form>
		</div>
	)
}

export default ContactForm
