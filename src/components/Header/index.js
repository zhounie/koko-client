import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import './index.scss'
class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="header">
                <span className="title">
                    {this.props.title}
                </span>
                <div className="add_user iconfont icon-add-account" onClick={()=>this.props.history.push(`/findFriend`)}></div>
            </div>
        )
    }
}

export default withRouter(Header)