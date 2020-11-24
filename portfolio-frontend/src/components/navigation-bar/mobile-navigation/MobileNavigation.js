//IMPORT DEPENDECIES
import React, { useState } from 'react'
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { IoIosMenu, IoIosClose } from 'react-icons/io'
import { Link } from 'react-router-dom'

//IMPORT DATA OBJECTS


//IMPORT STYLES
import './mobilenavigation.scss'

function MobileNavigation({first_link, second_link, third_link}) {

	const [iconState, setIconState] = useState(false)

	const handleIconChange = () => {
		if(iconState){
			setIconState(false)
		} else setIconState(true)
	}

	return (
		<div>
			<div className="mobile-nav-icon-container" onClick={handleIconChange}>
				<IoIosMenu className="menu-icon" style={iconState ? {opacity: 0} : {opacity: 1}}/>
				<IoIosClose className="menu-icon"  style={iconState ? {opacity: 1} : {opacity: 0}}/>
			</div>
			<div className="mobile-nav-container" style={iconState ? {background: "black", marginLeft: "0px"} : {marginLeft: "3000px"}}>
				<div className="mobile-nav-data-container" >
					<div className="mobile-nav-links-container">
						<ul className="mobile-links">
							<Link to={first_link.link} className="first-mobile-link-item link" onClick={() => setIconState(false)}>
								<li>
									{first_link.data}
								</li>
							</Link>
							<Link to={second_link.link} className="second-mobile-link-item link" onClick={() => setIconState(false)}>
								<li >
									{second_link.data}
								</li>
							</Link>
							<Link to={third_link.link} className="third-mobile-link-item link" onClick={() => setIconState(false)}>
								<li>
									{third_link.data}
								</li>
							</Link>
						</ul>
					</div>
					
					<div className="mobile-nav-button-container">
						<a href="https://drive.google.com/file/d/1PJA7rZpjLaAgJiENVXglDka1vQpi2RQq/view?usp=sharing" target="_blank" rel="noreferrer">
							<button className="download-button">Download CV!</button>
						</a>
					</div>
					<div className="mobile-nav-socials-and-mail-container">
						<div className="mobile-nav-mail-container">
							<div className="before">
								<div className="content"></div>
							</div>
							<p className="mail">
								dinostancic7@gmail.com
							</p>
						</div>
						<div className="mobile-nav-socials-container">
						<ul>
							<li><a href="https://www.facebook.com/dino.stancic.12" target="_blank" rel="noreferrer"><AiFillFacebook className="icons"/></a></li>
							<li><a href="https://www.linkedin.com/in/dino-stan%C4%8Di%C4%87/" target="_blank" rel="noreferrer"><AiFillLinkedin className="icons"/></a></li>
							<li><a href="https://github.com/stancic" target="_blank" rel="noreferrer"><AiFillGithub className="icons" /></a></li>
						</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MobileNavigation
