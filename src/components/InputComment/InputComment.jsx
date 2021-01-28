import React from 'react'
import './InputComment.css'

const InputComment = (props) => {
	return (
		<div className="input_comment">
			<input type="text" />
			<button
				style={{
					background: 'url(/images/button_send.svg) no-repeat transparent',
					backgroundSize: 'contain',
				}}
			></button>
		</div>
	)
}

export default InputComment
