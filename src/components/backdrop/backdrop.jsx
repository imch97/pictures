import React from 'react'
import classNames from 'classnames'
import ModalWindow from '../modal_window/modal_window.jsx'

const BackDrop = (props) => {
	const { image, onClose } = props
	return (
		<div
			className={classNames({ backdrop: true, active: props.image })}
			style={props.image ? { display: 'block' } : {}}
			onClick={onClose}
		>
			<ModalWindow image={image} />
		</div>
	)
}

export default BackDrop
