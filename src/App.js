
import { Header } from "./components/header/Header"
import { ChatList } from "./components/chatList/chatList"
import { MessageList } from "./components/messageList/messageList"
import styles from "./App.module.css"

function App() {

  return (
    <div className={styles.container}>
      <Header/>
      <div className={styles.wrapper}>
        <ChatList/>
        <MessageList/>
      </div>      
    </div>
  )

  // const [messageList, setMessageList] = useState([])  

  // const [author, setAuthor] = useState('')

  // const [text, setText] = useState('')

  // const ref = useRef()

  // useEffect(() => {
  //   ref.current?.focus()
  // }, [])

  // useEffect(()=>{       
  //   let timerId = null
    
  //   if (messageList.length > 0 && messageList[messageList.length-1].author !== "Robot") {
  //       timerId = setTimeout(() => {
  //         setMessageList((messageList) =>[...messageList, {author: "Robot", text: `Welcome, ${author}!`}])
  //       }, 1500)
  //   }
    
  //   return () => {
  //     clearInterval(timerId)
  //   }
  // }, [messageList, author])

  // const addNewMessage = () => {
  //   const key = Date.now()
  //   setMessageList((messageList) => [...messageList, {author: author, text: text, key: key}] 
  //   )
  // }  

  // return (
  //   <div className="wrapper">
  //     <h1>Chat</h1>
  //     <Header/>
  //     <ChatList/>
  //     <div>
  //       <div className="messageList">
  //       {messageList.map( (message) => {
  //       return <Message author={message.author} text={message.text} />
  //       } )}
  //       </div> 
  //         <TextField 
  //           variant="filled"
  //           type="text" 
  //           className="input" 
  //           placeholder="Your name"
  //           value={author}
  //           onChange={(event) => {setAuthor(event.target.value)}} />
  //         <TextField 
  //           variant="filled"
  //           type="text" 
  //           className="input" 
  //           placeholder="Your message"
  //           value={text}
  //           onChange={(event) => {setText(event.target.value)}} /> 
  //         <Button 
  //           variant="outlined"
  //           className="button" 
  //           onClick={addNewMessage}>
  //           Send
  //         </Button>
  //     </div>     
  //   </div>
  // );
}

export default App;
