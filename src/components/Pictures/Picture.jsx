import React from 'react'
import ModalWindow from '../ModalWindow/ModalWindow.jsx'

const Picture = (props) => {
	return (
		<div
			className="list_pictures_item"
			key={`item_${props.path}`}
			onClick={() => props.onClick(props.path)}
		>
			<img
				src={props.path}
				key={`img_${props.path}`}
				alt="image space"
				loading="lazy"
			/>
		</div>
	)
}

export default Picture
