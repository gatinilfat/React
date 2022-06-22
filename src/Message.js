import './index.css'

function Message(props) {
    return (
        <div className="message">
            <p>{props.author}</p>
            <p className='text'>{props.text}</p>
        </div>
    )
}

export default Message