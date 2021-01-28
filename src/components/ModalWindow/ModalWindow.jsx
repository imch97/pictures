import React, { useState, useEffect } from 'react'
import Comment from '../Comment/Comment.jsx'
import InputComment from '../InputComment/InputComment.jsx'
import './ModalWindow.css'
import classNames from 'classnames'

const comments = [
	{
		id: 'com1',
		user: 'user1',
		text: 'Вау вау',
		date: 'yyyy-mm-dd',
	},
	{
		id: 'com2',
		user: 'user2',
		text: 'хи-хи',
		date: 'yyyy-mm-dd',
	},
	{
		id: 'com3',
		user: 'user3',
		text: 'Круто!',
		date: 'yyyy-mm-dd',
	},
	{
		id: 'com4',
		user: 'user4',
		text: 'Чётко',
		date: 'yyyy-mm-dd',
	},
]

const ModalWindow = (props) => {
	const { image } = props
	const [comm, setComm] = useState(comments)

	const pressHandler = (event) => {
		if (event.key === 'Enter') {
			const newCom = {
				id: 'com5',
				user: 'user5',
				text: `${event.target.value}`,
				date: 'yyyy-mm-dd',
			}
			const updated = [newCom, ...comm]
			setComm(updated)

			event.target.value = ''
			console.log(comm)
		}
	}

	return (
		<>
			<div
				className={classNames({
					modal_window: true,
					active: image,
				})}
			>
				<div
					className="modal_window_picture"
					key={`modal_window_picture ${image}`}
				>
					<img src={image} alt="" key={`img ${image}`} />
				</div>

				<div
					className="modal_window_comments"
					key={`modal_window_comments ${image}`}
					onKeyPress={pressHandler}
				>
					<InputComment onKeyPress={pressHandler} />
					<div className="window_comments" key={`window_comments ${image}`}>
						{comm.map((element, index) => (
							<Comment comment={element} key={`COMENT ${image} ${index}`} />
						))}
					</div>
				</div>
			</div>
		</>
	)
}

export default ModalWindow
