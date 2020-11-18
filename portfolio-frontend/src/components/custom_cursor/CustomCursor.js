//IMPORT DEPENDENCIES
import React, { useRef } from 'react'

//IMPORT STYLES
import './customcursor.scss'

function CustomCursor() {
	const cursorRef = useRef();
	
	document.addEventListener('mousemove', (e) => {
		cursorRef.current.style.top = e.pageY + 'px';
		cursorRef.current.style.left = e.pageX + 'px';
	})

	return (
		<div className="custom-cursor" ref={cursorRef}>
			
		</div>
	)
}

export default CustomCursor
