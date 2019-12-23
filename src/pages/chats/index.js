import React from 'react'
import './index.scss'

class Chats extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="chats">
                <div className="top">1</div>
                <div className="main">2</div>
                <div className="bottom">3</div>
            </div>
        )
    }
}

export default Chats