//IMPORT DEPENDENCIES
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

//IMPORT STYLES
import './navigation.scss'


function Navigation({title, first_link, second_link}) {
	const titleRef = useRef()
	const addStyle = () => {
		const cursor = document.querySelector('.custom-cursor')
		cursor.classList.add("grow-cursor")
	}
	const removeStyle = () => {
		const cursor = document.querySelector('.custom-cursor')
		cursor.classList.remove("grow-cursor")
	}

	const handleClick = (data) => {
		removeStyle()
	}

	const [scrollState, setScrollState] = useState(false);
	const [didMount, setDidMount] = useState(false);


	document.body.addEventListener("scroll", event => {
		let scrolled = document.body.scrollTop
		if(scrolled>30){
			setScrollState(true);
		} else {
			setScrollState(false);
		}
	})

	const hiddenScrolledState = {
		opacity: 0
	}
	
	useEffect(()=>{
		setDidMount(true)
		setTimeout(()=>{
			titleRef.current.style.opacity = 1
		}, 300)
		return() => {
			setDidMount(false)

		}
	},[])

	if(!didMount){
		return null
	}

	return (
		<div>
			<div className="navigation-title-and-icon-container" style={scrollState ? hiddenScrolledState : {opacity: '1'}}>
				<div className="icon-container">
					<Link to="/home">
						<img src="../../img/Logo.png" alt="logo" onMouseEnter={addStyle} onMouseLeave={removeStyle}/>
					</Link>
				</div>
				
				<div className="title-container" ref={titleRef}>
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
				{/** 
				<div className="icon-container">
					<img src="../../img/Logo.png" alt="logo"/>
				</div>
				*/}
			</div>
		</div>
	)
}

export default Navigation
