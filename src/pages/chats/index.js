import React from 'react'
import './index.scss'
import { FriendMessage, SendMessage, Connection, DisConnection } from './components'

class Chats extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            message: '',
            messages: []
        }
    }

    render() {
        return (
            <div className="chats">
                <div className="top">1</div>
                <div className="main">
                    <ul ref="messageBox" className="message-box">
                        {this.state.messages.map((item, index) => {
                            if (item.type === 'friend') {
                                return <FriendMessage key={`friend${index}`} message={item.message} />
                            }
                            if (item.type === 'connection') {
                                return <Connection key={`connection${index}`} userName={item.userName} />
                            }
                            if (item.type === 'disConnection') {
                                return <DisConnection key={`disConnection${index}`} userName={item.userName} />
                            }
                            return <SendMessage key={`send${index}`} message={item.message} />
                        })}
                    </ul>
                </div>
                <div className="bottom">
                    <input type="text" value={this.state.message} onChange={this.onChange.bind(this)} />
                    <button onClick={this.sendMessage.bind(this)}>发送</button>
                </div>
            </div>
        )
    }
    componentDidMount() {
        //新加入聊天室
        global.socket.on('newConnection', (data) => {
            this.setState({
                messages: [...this.state.messages, { type: 'connection', userName: data.userName}]
            })
        })
        // 接收到的消息
        global.socket.on('receive', (data) => {
            this.setState({
                messages: [...this.state.messages, { type: 'friend', message: data.message}]
            })
        })
        // 退出聊天室
        global.socket.on('newDisconnect', (data) => {
            this.setState({
                messages: [...this.state.messages, { type: 'disConnection', userName: data.userName}]
            })
        })
    }
    onChange(e) {
        this.setState({
            message: e.target.value
        })
    }
    sendMessage() {
        let user = JSON.parse(localStorage.getItem('user'))
        let message = this.state.message
        global.socket.emit('out', {
            message: message,
            userName: user.userName
        })
        this.setState({
            messages: [...this.state.messages, {
                message: message,
                type: 'mine'
            }],
            message: ''
        })
    }
}

export default Chats