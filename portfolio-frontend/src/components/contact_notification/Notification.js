import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { hideNotification } from '../../reducers/notificationStatusReducer'
import { AiOutlineClose } from 'react-icons/ai'

import './Notification.scss'

function Notification({message}) {

	const [didMount, setDidMount] = useState(false);
	const dispatch = useDispatch()
	const notificationState = useSelector(state => state.notification)
	const handleClick = () => {
		dispatch(hideNotification())
	}

	useEffect(() => {
		setDidMount(true)
		setTimeout(function(){
			dispatch(hideNotification())
		},10000)
		return() => {
			setDidMount(false)
		}
	},[dispatch])

	if(!didMount){
		return null
	}

	const notificationText = message.split('\n').map(notification => <p key={notification}>{notification}</p>)

	return (
		<div className="notification-container" style={notificationState ? {opacity: 1} : {opacity: 0}}>
			<div className="notification-message-container">
				<div className="notification-message">
					{notificationText}
				</div>
			</div>
			<div className="close-notification-container">
				<AiOutlineClose onClick={handleClick}/>
			</div>
		</div>
	)
}

export default Notification
