import './App.css';

function Card(props) {
  return (
    <div className={'Card Card-' + props.color}>
      <h1 classname="title">
        {props.title}
      </h1>
      <p classname="content">
        {props.content}
      </p>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <div className="banner">
        Sextant
      </div>
      <div className="cards_container">
        <Card color="blue"
          title="Card #1"
          content="Information about Card#1 will be displayed here."
        >
        </Card>
      </div>
    </div>
  );
}

export default App;
