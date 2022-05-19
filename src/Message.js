import './index.css'

function Message(props) {
    return (
        <div className="message">
            <p className='text'>{props.text}</p>
        </div>
    )
}

export default Message