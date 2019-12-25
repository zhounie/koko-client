import React from 'react'
import './index.scss'

class Chats extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            message: ''
        }
    }
    render() {
        return (
            <div className="chats">
                <div className="top">1</div>
                <div className="main">
                    <ul ref="messageBox" className="message-box">
                        <li></li>
                    </ul>
                </div>
                <div className="bottom">
                    <input type="text" defaultValue={this.state.message} onChange={this.onChange.bind(this)} />
                    <button onClick={this.sendMessage.bind(this)}>发送</button>
                </div>
            </div>
        )
    }
    componentDidMount() {
        global.socket.on('newConnection', (data) => {
            let li = document.createElement('li')
            li.innerHTML = `${data.userName}加入聊天室`
            this.refs.messageBox.appendChild(li)
        })
        global.socket.on('receive', (data) => {
            let li = document.createElement('li')
            li.innerHTML = `${data.userName}：${data.message}`
            this.refs.messageBox.appendChild(li)
        })
        global.socket.on('newDisconnect', (data) => {
            let li = document.createElement('li')
            li.innerHTML = `${data.userName}退出聊天室`
            this.refs.messageBox.appendChild(li)
        })
    }
    onChange(e) {
        this.setState({
            message: e.target.value
        })
    }
    sendMessage() {
        let user = JSON.parse(localStorage.getItem('user'))
        global.socket.emit('out', {
            message: this.state.message,
            userName: user.userName
        })
        
    }
}

export default Chats