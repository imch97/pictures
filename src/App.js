import './App.css'
import ModalWIndow from './components/modal_window/modal_window.jsx'
import Picture from './components/pictures/picture.jsx'

const givePicture = () => {
	let pic = []
	for (let count = 1; count <= 30; count++) {
		pic.push(`/images/space3_${count}.jpg`)
	}
	return pic
}

function App() {
	function openPicture() {
		ModalWIndow.open()
	}
	return (
		<div className="App">
			<header className="App-header">
				<h1>Pictures</h1>
			</header>
			<div className="container">
				<div className="list_pictures">
					{givePicture().map((el, index) => (
						<Picture path={el} />
					))}
				</div>
			</div>
		</div>
	)
}

export default App
