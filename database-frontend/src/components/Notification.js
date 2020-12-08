import React, { useEffect } from 'react'
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

	useEffect(()=>{
		setTimeout(()=>{
			dispatch(hideNotification())
			dispatch(logout())
		}, 5000)
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[notificationState])

	return (
		<div className="notification-container" style={notificationState ? {top: '15%'} : {top: '-15%'}}>
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
