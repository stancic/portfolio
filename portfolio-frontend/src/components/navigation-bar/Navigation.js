//IMPORT DEPENDENCIES
import React from 'react'

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
	return (
		<div>
			<div className="navigation-title-and-icon-container">
					<div className="title-container">
						<h1>{title}</h1>
					</div>

				<div className="navigation-container" >
					<ul className="links">
						<li className="list-link-item" onMouseEnter={addStyle} onMouseLeave={removeStyle}>
								<a href="#">{first_link}</a>
						</li>
						<li className="list-link-item" onMouseEnter={addStyle} onMouseLeave={removeStyle}>
							<a href="#">{second_link}</a>
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
