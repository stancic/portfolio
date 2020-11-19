//IMPORT DEPENDENCIES
import React, { useRef } from 'react'

//IMPORT STYLES
import './customcursor.scss'

function CustomCursor() {
	const cursorRef = useRef();
	
	document.addEventListener('mousemove', (e) => {
		cursorRef.current.style.left = e.clientX + 'px';
		cursorRef.current.style.top = e.clientY + 'px';
	})
	return (
		<div className="custom-cursor" ref={cursorRef}>
			
		</div>
	)
}

export default CustomCursor
