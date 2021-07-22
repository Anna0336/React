import './Message.css';

function Message(props) {
    return (
        <div className="Message">
            <p className="Message-text">
                This is my first homework in React</p>
            <h3>{props.name}</h3>
        </div>
    );
}

export default Message;