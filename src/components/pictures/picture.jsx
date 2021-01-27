import React from 'react'

const Picture = (props) => {
	return (
		<div className="list_pictures_item" key={`item_${props.path}`}>
			<img src={props.path} key={`img_${props.path}`} alt="image space" />
		</div>
	)
}

export default Picture
