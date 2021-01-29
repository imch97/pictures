import React from 'react'
import './InputComment.css'

const InputComment = (props) => {
	function addComment(event) {
		const newText = event.target.parentNode.querySelector('input').value
		const newCom = {
			id: 'com6',
			user: 'user6',
			text: newText,
			date: 'yyyy-mm-dd',
		}
		const updated = [...props.stateComments, newCom]
		props.setStateComments(updated)
	}

	return (
		<div className="input_comment">
			<input type="text" />
			<button
				onClick={addComment}
				style={{
					background: 'url(/images/button_send.svg) no-repeat transparent',
					backgroundSize: 'contain',
				}}
			></button>
		</div>
	)
}

export default InputComment
