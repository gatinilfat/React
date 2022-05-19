import Message from "./Message";
import './index.css'
import { useEffect, useState } from "react";

function App() {
    
  const [messageList, setMessageList] = useState([])  

  const [author, setAuthor] = useState('')

  const [text, setText] = useState('')

  useEffect(()=>{
    if (messageList.length > 0) {
      if (messageList[messageList.length-1].author !== "Robot") {
        const timeout = setTimeout(() => {
          setMessageList((messageList) =>[...messageList, {author: "Robot", text: `Welcome, ${author}!`}])
        }, 1500)
      }     
    }
  }, [messageList, author])

  const addNewMessage = () => {
    const key = Date.now()
    setMessageList((messageList) => [...messageList, {author: author, text: text, key: key}] 
    )
  }  

  return (
    <div className="wrapper">
      <h1>Chat</h1>
      <div>
        <div className="messageList">
        {messageList.map( (message) => {
        return <Message author={message.author} text={message.text} />
        } )}
        </div>        
          <input 
            type="text" 
            className="input" 
            placeholder="Your name"
            value={author}
            onChange={(event) => {setAuthor(event.target.value)}}></input>
          <input 
            type="text" 
            className="input" 
            placeholder="Your message"
            value={text}
            onChange={(event) => {setText(event.target.value)}}></input>   
          <button 
            className="button" 
            onClick={addNewMessage}
            >Send</button>
      </div>     
    </div>
  );
}

export default App;
