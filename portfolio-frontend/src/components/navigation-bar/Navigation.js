//IMPORT DEPENDENCIES
import React from 'react'
import { Link } from 'react-router-dom'

//IMPORT STYLES
import './navigation.scss'


function Navigation({title, first_link, second_link}) {
	const addStyle = () => {
		const cursor = document.querySelector('.custom-cursor')
		cursor.classList.add("grow-cursor")
	}
	const removeStyle = () => {
		const cursor = document.querySelector('.custom-cursor')
		cursor.classList.remove("grow-cursor")
	}
	console.log(first_link.link)

	return (
		<div>
			<div className="navigation-title-and-icon-container">
					<div className="title-container">
						<h1>{title}</h1>
					</div>

				<div className="navigation-container" >
					<ul className="links">
						<li className="list-link-item" onMouseEnter={addStyle} onMouseLeave={removeStyle}>
							<Link to={first_link.link}>{first_link.data}</Link>
						</li>
						<li className="list-link-item" onMouseEnter={addStyle} onMouseLeave={removeStyle}>
							<Link to={second_link.link}>{second_link.data}</Link>
						</li>
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
