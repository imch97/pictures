import React from 'react'
import './comment.css'

const Comment = (props) => {
	const { comment } = props
	return (
		<div className="comment" key={comment.id}>
			<div className="comment_info">
				<div className="comment_info_user">{comment.user}</div>
				<div className="comment_info_date">{comment.date}</div>
			</div>
			<div className="comment_text">{comment.text}</div>
		</div>
	)
}
export default Comment
