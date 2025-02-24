const Notification = ({ message }) => {
    const notificationStyle = {
        
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }
    if (message === null) {
        return null
    }
    
    return (
        <div style={notificationStyle} className={message.type}>
            {message.text}
        </div>
    )
}

export default Notification