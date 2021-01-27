import React, { useState } from 'react'
import Comment from '../comment/comment.jsx'

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

	const [visible, setVisible] = useState(false)
	const [tittle, setTittle] = useState('')
	const [text, setText] = useState('')
	const [comm, setComm] = useState(comments)

	function closeModal() {}
	function openModal(image, comments) {
		setVisible(true)
	}

	return (
		<>
			<div className="backdrop" style={visible ? { display: block } : {}}>
				<div className="modal_window">
					<div className="modal_window_picture">
						<img src="" alt="" />
					</div>
					<div className="modal_window_comments">
						<div className="window_comments">
							{comments.map((element) => (
								<Comment comment={element} />
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
module.exports = ModalWindow
