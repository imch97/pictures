import "./App.css";

const givePicture = () => {
  let pic = [];
  for (let count = 1; count <= 30; count++) {
    pic.push(<img src={`/images/space3_${count}.jpg`} alt="" />);
  }
  return pic;
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pictures</h1>
      </header>
      <div className="container">
        <div className="list_pictures">
          {givePicture().map((el, index) => {
            return (
              <div className="list_pictures_item" key={index}>
                {" "}
                {el}{" "}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
