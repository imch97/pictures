import React from 'react'
import classNames from 'classnames'
import ModalWindow from '../ModalWindow/ModalWindow.jsx'

const BackDrop = (props) => {
	const { image, onClose } = props
	return (
		<div
			className={classNames({ backdrop: true, active: props.image })}
			style={props.image ? { display: 'block' } : {}}
			onClick={onClose}
			key="backdrop"
		>
			{/* <ModalWindow image={image} key={`modal ${props.image}`} /> */}
		</div>
	)
}

export default BackDrop
