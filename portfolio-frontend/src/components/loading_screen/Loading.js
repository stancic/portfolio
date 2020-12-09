//IMPOPRT DEPENDENCIES
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { unload } from '../../reducers/loadingPageReducer';

//IMPORT STYLES
import './loading.scss'

function Loading() {
	const [loadFlag, setLoadFlag] = useState(false)
	const [letterFlag, setLetterFlag] = useState(false)

	useEffect(()=>{
		setTimeout(()=>{
			setLetterFlag(true)
		}, 1500)
		setTimeout(()=>{
			setLoadFlag(true)
		}, 3000)
		return() => {
			setLetterFlag(false)
			setLoadFlag(false)
		}
	},[])

	return (
		<div className="loader-container" style={loadFlag ? {opacity: "0", zIndex: '-40'} : {opacity: "1"}}>
			<h1 className="loading-title" style={letterFlag ? {letterSpacing:'14px', opacity: '0'} : {}}>Dino Stancic</h1>
		</div>
	)
}

export default Loading
