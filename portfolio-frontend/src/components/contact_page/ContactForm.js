//IMPORT DEPENDENCIES
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { send } from '../../reducers/mailReducer'

//IMPORT STYLES
import './contactForm.scss'

function ContactForm() {

	const dispatch = useDispatch()

	const [name, setName] = useState('')
	const [nameEmptyFlag, setNameEmptyFlag] = useState(false)

	const [mail, setMail] = useState('')
	const [mailEmptyFlag, setMailEmptyFlag] = useState(false)

	const [subject, setSubject] = useState('')
	const [subjectEmptyFlag, setSubjectEmptyFlag] = useState(false)

	const [message, setMessage] = useState('')
	const [messageEmptyFlag, setMessageEmptyFlag] = useState(false)


	const addStyle = () => {
		const cursor = document.querySelector('.custom-cursor')
		cursor.classList.add("grow-cursor")
	}
	const removeStyle = () => {
		const cursor = document.querySelector('.custom-cursor')
		cursor.classList.remove("grow-cursor")
	}
	const errorBorderStyle = {
		borderColor: "red"
	}

	const sendMail = (event) => {
		event.preventDefault()
		if(name.length === 0 || mail.length === 0 || subject.length === 0 || message.length === 0){
			alert('NO FIELDS LEFT BEHIND!')
		} 
		
		else if(mail.indexOf("@") === -1 || mail.indexOf(".") === -1){
			alert('MAIL MUST CONTAIN @ AND .')
		}
		else {

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
	}

	return (
		<div>
			<form onSubmit={sendMail}>
				<div className="name-and-mail-container">
					<div className="name-container">
						<input 
							type="text" 
							value={name}
							className="name input-size border-and-background" 
							onChange={({target}) => {
								target.value.length === 0 ? setNameEmptyFlag(true) : setNameEmptyFlag(false)
								setName(target.value)
							}}
							onClick={() => name.length === 0 ? setNameEmptyFlag(true) : setNameEmptyFlag(false)}
							onMouseEnter={addStyle}
							onMouseLeave={removeStyle} 
							placeholder="&lt;name /&gt;"
							style={nameEmptyFlag ? errorBorderStyle : {}}	
							/>
					</div>
					<div className="mail-container">
						<input 
						type="text" 
						value={mail}
						title=""
						className="mail input-size border-and-background" 
						onChange={({target}) => {
								target.value.length === 0 || target.value.indexOf("@") === -1 || target.value.indexOf(".") === -1 ? setMailEmptyFlag(true) : setMailEmptyFlag(false)
								setMail(target.value)
							}}
						onClick={() => mail.length === 0 || mail.indexOf("@") === -1 || mail.indexOf(".") === -1 ? setMailEmptyFlag(true) : setMailEmptyFlag(false)}
						onMouseEnter={addStyle}
						onMouseLeave={removeStyle}
						placeholder="&lt;mail /&gt;"
						style={mailEmptyFlag ? errorBorderStyle : {}}	
						/>
					</div>
				</div>

				<div className="subject-container">
					<input 
					type="text" 
					value={subject}
					className="subject input-size border-and-background" 
					onChange={({target}) => {
								target.value.length === 0 ? setSubjectEmptyFlag(true) : setSubjectEmptyFlag(false)
								setSubject(target.value)
							}}
					onClick={() => subject.length === 0 ? setSubjectEmptyFlag(true) : setSubjectEmptyFlag(false)}
					onMouseEnter={addStyle}
					onMouseLeave={removeStyle}
					placeholder="&lt;subject /&gt;"
					style={subjectEmptyFlag ? errorBorderStyle : {}}
					/>
				</div>
				
				<div className="message-container">
					<textarea 
					cols="60" 
					rows="10" 
					value={message}
					className="message input-size border-and-background" 
					onChange={({target}) => {
								target.value.length === 0 ? setMessageEmptyFlag(true) : setMessageEmptyFlag(false)
								setMessage(target.value)
							}}
					onClick={() => name.length === 0 ? setMessageEmptyFlag(true) : setMessageEmptyFlag(false)}
					onMouseEnter={addStyle}
					onMouseLeave={removeStyle}
					placeholder="&lt;message /&gt;"
					style={messageEmptyFlag ? errorBorderStyle : {}}></textarea>
				</div>

				<div className="button-container">
					<button 
					className="contact"
					onMouseEnter={addStyle}
					onMouseLeave={removeStyle}
					type="submit"
					>
						Contact me!
					</button>
				</div>
			</form>
		</div>
	)
}

export default ContactForm
