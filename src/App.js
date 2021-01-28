import './App.css'
import React, { useState } from 'react'
import ModalWindow from './components/ModalWindow/ModalWindow.jsx'
import Picture from './components/Pictures/Picture.jsx'
import BackDrop from './components/Backdrop/Backdrop.jsx'
import LazyImage from './components/LazyImage/LazyImage.jsx'

const givePicture = () => {
	let pic = []
	for (let count = 1; count <= 30; count++) {
		pic.push(`/images/space3_${count}.jpg`)
	}

	for (let count = 1; count <= 66; count++) {
		pic.push(`/images/3dwall${count}.jpg`)
	}

	return pic
}

function App() {
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
						// <Picture path={el} key={index} onClick={onImageClick} />
						<LazyImage src={el} key={index} onClick={onImageClick} />
					))}
				</div>
			</div>
			<ModalWindow image={activeImage} onClose={onCloseModal} />
			<BackDrop
				image={activeImage}
				onClose={onCloseModal}
				key={`BACKDROP ${activeImage}`}
			></BackDrop>
		</div>
	)
}

export default App
