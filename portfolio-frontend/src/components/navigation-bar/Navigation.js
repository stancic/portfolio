import React from 'react'
import './navigation.scss'


function Navigation({home, projects, contact}) {
	return (
		<div>
			<div className="navigation-title-and-icon-container">
				<div className="title-container">
					<h1>Dino Stančić</h1>
				</div>

				<div className="navigation-container">
					<ul className="links">
						<li>{home}</li>
						<li>{projects}</li>
						<li>{contact}</li>
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
