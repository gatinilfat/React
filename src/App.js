import Message from "./Message";
import './index.css'

const message = "Hi React!"

function App() {
  return (
    <div className="wrapper">
      <Message text={message}/>
    </div>
  );
}

export default App;
