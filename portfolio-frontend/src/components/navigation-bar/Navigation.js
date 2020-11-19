//IMPORT DEPENDENCIES
import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loadPage } from '../../reducers/loadingPageReducer'
import { switchPage } from '../../reducers/pageStatusReducer'

//IMPORT STYLES
import './navigation.scss'


function Navigation({title, first_link, second_link}) {
	const dispatch = useDispatch()
	const addStyle = () => {
		const cursor = document.querySelector('.custom-cursor')
		cursor.classList.add("grow-cursor")
	}
	const removeStyle = () => {
		const cursor = document.querySelector('.custom-cursor')
		cursor.classList.remove("grow-cursor")
	}

	const handleClick = (data) => {
		dispatch(loadPage())
		dispatch(switchPage(data.link))
	} 

	return (
		<div>
			<div className="navigation-title-and-icon-container">
					<div className="title-container">
						<h1>{title}</h1>
					</div>

				<div className="navigation-container" >
					<ul className="links">
							<Link to={first_link.link} onClick={() => handleClick(first_link)} className="link">
								<li className="list-link-item" onMouseEnter={addStyle} onMouseLeave={removeStyle}>
									{first_link.data}
								</li>
							</Link>

							<Link to={second_link.link} onClick={() => handleClick(first_link)} className="link">
								<li className="list-link-item" onMouseEnter={addStyle} onMouseLeave={removeStyle}>
									{second_link.data}
								</li>
							</Link>
					</ul>
				</div>
				<div className="icon-container">
					<img src="../../img/Logo.png" alt="logo"/>
				</div>
			</div>
		</div>
	)
}

export default Navigation
