import './App.css'
import React, { useState, useEffect } from 'react'
import ModalWindow from './components/ModalWindow/ModalWindow.jsx'
import BackDrop from './components/Backdrop/Backdrop.jsx'
import LazyImage from './components/LazyImage/LazyImage.jsx'

// const givePicture = () => {
// 	let pic = []
// 	for (let count = 1; count <= 30; count++) {
// 		pic.push(`/images/space3_${count}.jpg`)
// 	}

// 	for (let count = 1; count <= 64; count++) {
// 		pic.push(`/images/3dwall${count}.jpg`)
// 	}

// 	return pic
// }

// const givePicture = async () => {
// 	let pic = []
// 	let json

// 	let response = await fetch(
// 		`https://pixabay.com/api/?key=20070078-4e870f8e496350e0a7ea4cad0&q=space&image_type=photo&pretty=true&per_page=60`
// 	)

// 	if (response.ok) {
// 		json = await response.json()

// 		json.hits.map((el) => {
// 			// console.log(`${el.webformatURL}`)
// 			pic.push(el.webformatURL)
// 		})
// 	} else {
// 		alert('Ошибка HTTP: ' + response.status)
// 	}
// 	// console.log('pic', pic)

// 	return pic
// }

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

	// useEffect(() => {
	// 	fetch(
	// 		`https://pixabay.com/api/?key=20070078-4e870f8e496350e0a7ea4cad0&q=space&image_type=photo&pretty=true&per_page=60`
	// 	)
	// 		.then((response) => {
	// 			return response.json()
	// 		})
	// 		.then((data) => {
	// 			let pic = []
	// 			data.hits.map((el) => pic.push(el.webformatURL))
	// 			return pic
	// 		})
	// 		.then((result) => setloadPick(result))
	// }, [])

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

					{/* {givePicture().then((result) => result.map((el) => console.log(el)))} */}
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
