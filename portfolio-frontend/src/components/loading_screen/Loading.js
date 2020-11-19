//IMPOPRT DEPENDENCIES
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { unload } from '../../reducers/loadingPageReducer';

//IMPORT STYLES
import './loading.scss'

function Loading() {
	const loadState = useSelector(state => state.loading)
	const dispatch = useDispatch()

	const DIAMETER = 50;
	const STROKE_WIDTH = 0.5;
	const RADIUS = DIAMETER / 2 -STROKE_WIDTH / 2
	const CIRCUMFENCE = Math.PI * RADIUS * 2
	let [offset, setOffset] = useState(0)
	let timeout
	
	useEffect(()=>{
		if(loadState){
			for(let i = 0; i > -312; i--){
				setOffset(i)
			}
		}
	}, [loadState])
	if(loadState){
		timeout = setTimeout(()=>{
			dispatch(unload())
			if(offset === -311){
				setOffset(0)
			}
		},2700)
	}
	else{
		clearTimeout(timeout)
	}

	return (
		<div className="loader-container" style={loadState ? {display: "flex"} : {display: "none"}}>
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
