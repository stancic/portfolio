import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../reducers/loginReducer'
import { hideNotification } from '../reducers/notificationStatusReducer'
import { AiOutlineCloseCircle } from 'react-icons/ai'

import './Notification.scss'

function Notification({message}) {
	const dispatch = useDispatch()
	const notificationState = useSelector(state => state.notification)
	const handleClick = () => {
		dispatch(hideNotification())
		dispatch(logout())
	}

	setTimeout(function(){
		dispatch(hideNotification())
		dispatch(logout())
	},5000)

	return (
		<div className="notification-container" style={notificationState ? {top: '15%'} : {top: '-25%'}}>
			<div className="notification-message-container">
				<p className="notification-message">wrong credentials...</p>
			</div>
			<div className="close-notification-container">
				<AiOutlineCloseCircle onClick={handleClick}/>
			</div>
		</div>
	)
}

export default Notification
