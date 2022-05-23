import { Message } from "./message/message"
import { useEffect, useState, useRef } from "react"
import { TextField, Button } from "@mui/material"
import styles from "./messageList.module.css"
import { nanoid } from "nanoid"


export function MessageList() {

  const [messageList, setMessageList] = useState([])  

  const [author, setAuthor] = useState('')

  const [text, setText] = useState('')

  const ref = useRef() 

  useEffect(() => {
    ref.current?.focus()
  }, [])

  const scrollRef = useRef()

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo(0, scrollRef.current.scrollHeight)
    }
  }, [messageList])

  useEffect(()=>{       
    let timerId = null
    
    if (messageList.length > 0 && messageList[messageList.length-1].author !== "Robot") {
        timerId = setTimeout(() => {
          setMessageList((messageList) =>[...messageList, {author: "Robot", text: `Welcome, ${author || "nameless man"}!`, key: nanoid(), date: new Date().toLocaleString()}])
        }, 1500)
    }
    
    return () => {
      clearInterval(timerId)
    }
  }, [messageList, author])

  const addNewMessage = () => {
    if (text){
      setMessageList((messageList) => [...messageList, {author: author, text: text, date: new Date().toLocaleString()}])
    }    
  }

  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      addNewMessage();
    }
  };

    return (
        <div className={styles.wrapper}>
          <div className={styles.messages} ref={scrollRef}>
            {messageList.map( (message, index) => {
            return <Message author={message.author} text={message.text} date={message.date} key={nanoid()}/>
            } )}
          </div> 
          <TextField 
              variant="filled"
              type="text" 
              className="input" 
              placeholder="Your name"
              value={author}
              onChange={(event) => {setAuthor(event.target.value)}}
              onKeyDown={handlePressInput} />
          <TextField 
              variant="filled"
              type="text" 
              className="input" 
              placeholder="Your message"
              value={text}
              onChange={(event) => {setText(event.target.value)}}
              onKeyDown={handlePressInput} /> 
          <Button 
              variant="outlined"
              className="button" 
              onClick={addNewMessage}>
              Send
          </Button>
        </div>
    )

}