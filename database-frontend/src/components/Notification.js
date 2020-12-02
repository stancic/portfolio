import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../reducers/loginReducer'
import { hideNotification } from '../reducers/notificationStatusReducer'


function Notification({message}) {
	const dispatch = useDispatch()
	const notificationState = useSelector(state => state.notification)
	const handleClick = () => {
		dispatch(hideNotification())
		dispatch(logout())
	}
	return (
		<div style={notificationState ? {display: 'block'} : {display: 'none'}}>
			<div>
				<h1>DALJE NECES MOCI</h1>
				<button onClick={handleClick}>Sakrij</button>
			</div>
		</div>
	)
}

export default Notification
