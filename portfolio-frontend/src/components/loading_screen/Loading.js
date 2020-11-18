//IMPOPRT DEPENDENCIES
import React, { useEffect, useState } from 'react'

//IMPORT STYLES
import './loading.scss'

function Loading() {
	const DIAMETER = 50;
	const STROKE_WIDTH = 0.5;
	const RADIUS = DIAMETER / 2 -STROKE_WIDTH / 2
	const CIRCUMFENCE = Math.PI * RADIUS * 2
	let [offset, setOffset] = useState(0)
	
	useEffect(()=>{
		for(let i = 0; i > -312; i--){
			setOffset(i)
		}
	}, [offset])
	
	
	
	setTimeout(()=>{
		document.querySelector(".loader-container").style.display = "none";
		document.querySelector(".loader-container").style.transition = "3s all ease-out";
	},2500)


	return (
		<div className="loader-container">
			<svg 
				viewBox="0 0 50 50"
				width="400px"
				height="400px"
				className="circular-progress"
			>
				
				<circle
					className="svg-circle" 
					cx={DIAMETER / 2}
					cy={DIAMETER / 2}
					r={RADIUS}
					stroke="#00bfa6e7" 
					fill="transparent" 
					strokeWidth={STROKE_WIDTH}
					strokeDasharray={CIRCUMFENCE}
					strokeDashoffset={offset}
				/>
			</svg>
			<img src="../../img/Logo.png" alt=""/>
		</div>
	)
}

export default Loading
