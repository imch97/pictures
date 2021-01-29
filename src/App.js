import './App.css'
import React, { useState, useEffect } from 'react'
import ModalWindow from './components/ModalWindow/ModalWindow.jsx'
import BackDrop from './components/Backdrop/Backdrop.jsx'
import LazyImage from './components/LazyImage/LazyImage.jsx'

const givePicture = () =>
	fetch(
		`https://pixabay.com/api/?key=20070078-4e870f8e496350e0a7ea4cad0&q=flore&image_type=photo&pretty=true&per_page=60`
	)
		.then((response) => {
			return response.json()
		})
		.then((data) => {
			let pic = []
			data.hits.map((el) => pic.push(el.webformatURL))
			return pic
		})

function App() {
	const [activeImage, setActiveImage] = useState(null)
	const onImageClick = (image) => setActiveImage(image)
	const onCloseModal = () => setActiveImage(null)

	const [loadPick, setloadPick] = useState([])

	useEffect(() => {
		givePicture().then((result) => setloadPick(result))
	}, [])

	useEffect((event) => {
		document.addEventListener('keydown', pressHandler)
	}, [])

	const pressHandler = (event) => {
		if (event.key === 'Escape') {
			onCloseModal()
		}
	}

	return (
		<div className="App">
			<header className="App-header">
				<h1>Pictures</h1>
			</header>
			<div className="container">
				<div className="list_pictures">
					{loadPick.map((el, index) => (
						<LazyImage src={el} key={index} onClick={onImageClick} onError />
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
