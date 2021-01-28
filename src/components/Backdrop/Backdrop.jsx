import React from 'react'
import classNames from 'classnames'

const BackDrop = (props) => {
	const { onClose } = props
	return (
		<div
			className={classNames({ backdrop: true, active: props.image })}
			style={props.image ? { display: 'block' } : {}}
			onClick={onClose}
			key="backdrop"
		></div>
	)
}
export default BackDrop
