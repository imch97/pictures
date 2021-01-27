import './App.css'
import React, { useState } from 'react'
import ModalWindow from './components/modal_window/modal_window.jsx'
import Picture from './components/pictures/picture.jsx'

const givePicture = () => {
	let pic = []
	for (let count = 1; count <= 30; count++) {
		pic.push(`/images/space3_${count}.jpg`)
	}
	return pic
}

function App() {
	// const [modal, setModal] = useState()
	const [activeImage, setActiveImage] = useState(null)
	const onImageClick = (image) => setActiveImage(image)
	const onCloseModal = () => setActiveImage(null)

	return (
		<div className="App">
			<header className="App-header">
				<h1>Pictures</h1>
			</header>
			<div className="container">
				<div className="list_pictures">
					{givePicture().map((el, index) => (
						<Picture path={el} key={index} onClick={onImageClick} />
					))}
				</div>
			</div>
			<ModalWindow image={activeImage} onClose={onCloseModal} />
		</div>
	)
}

export default App
