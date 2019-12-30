import React from 'react'

export class FriendMessage extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <li className="receive_message">
                <div className="head">
                    <img src={require('../../assets/images/2.jpg')} />
                </div>
                <div className="name_message">
                    <p className="message">{this.props.message}</p>
                </div>
            </li>
        )
    }
}

export class SendMessage extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <li className="mine_message">
                <div className="name_message">
                    <p className="message">{this.props.message}</p>
                </div>
                <div className="head">
                    <img src={require('../../assets/images/2.jpg')} />
                </div>
            </li>
        )
    }
}

export class Connection extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <li class="connection"> 
                <span>{this.props.userName}加入聊天室</span>
            </li>
        )
    }
}

export class DisConnection extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <li className="connection"> 
                <span>{this.props.userName}退出聊天室</span>
            </li>
        )
    }
}