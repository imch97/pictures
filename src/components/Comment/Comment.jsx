import React from 'react'
import './Comment.css'

const Comment = (props) => {
	const { comment } = props
	return (
		<div className="comment" key={comment.id}>
			<div className="comment_info" key={`comment_info ${comment.id}`}>
				<div
					className="comment_info_user"
					key={`comment_info_user ${comment.id}`}
				>
					{comment.user}
				</div>
				<div
					className="comment_info_date"
					key={`comment_info_date ${comment.id}`}
				>
					{comment.date}
				</div>
			</div>
			<div className="comment_text" key={`comment_text ${comment.id}`}>
				{comment.text}
			</div>
		</div>
	)
}
export default Comment
