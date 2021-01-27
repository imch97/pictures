import React, { useState } from 'react'

const comments = [
	{
		user: 'user1',
		text: 'Вау вау',
		date: 'yyyy-mm-dd',
	},
	{
		user: 'user2',
		text: 'хи-хи',
		date: 'yyyy-mm-dd',
	},
	{
		user: 'user3',
		text: 'Круто!',
		date: 'yyyy-mm-dd',
	},
	{
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

	function closeModal() {}
	function openModal(image, comments) {
		setVisible(true)
	}

	return (
		<>
			<div className="backdrop">
				<div className="modal_window">
					<div className="modal_window_picture">
						<img src="" alt="" />
					</div>
					<div className="modal_window_comments">
						<div className="window_comments">
							<div className="comment">
								<div className="comment_info">
									<div className="comment_info_user"></div>
									<div className="comment_info_date"></div>
								</div>
								<div className="comment_text"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
module.exports = ModalWindow
