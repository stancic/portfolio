//IMPORT DEPENDENCIES
import React from 'react'
import { AiFillFacebook, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

//IMPORT STYLES
import './socials.scss'
function Socials() {
	const addStyle = () => {
		const cursor = document.querySelector('.custom-cursor');
		cursor.classList.add("grow-cursor")
	}

	const removeStyle = () => {
		const cursor = document.querySelector('.custom-cursor');
		cursor.classList.remove("grow-cursor")
	}
	return (
		<div>
			<div className="socials-list-container">
				<ul>
					<li onMouseEnter={addStyle} onMouseLeave={removeStyle}><a href="https://www.facebook.com/dino.stancic.12" target="_blank" rel="noreferrer"><AiFillFacebook className="icons"/></a></li>
					<li onMouseEnter={addStyle} onMouseLeave={removeStyle}><a href="https://www.linkedin.com/in/dino-stan%C4%8Di%C4%87/" target="_blank" rel="noreferrer"><AiFillLinkedin className="icons"/></a></li>
					<li onMouseEnter={addStyle} onMouseLeave={removeStyle}><a href="https://github.com/stancic" target="_blank" rel="noreferrer"><AiFillGithub className="icons" /></a></li>
				</ul>
			</div>
		</div>
	)
}

export default Socials
