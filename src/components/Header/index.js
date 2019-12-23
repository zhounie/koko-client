import React, { Component } from 'react'
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
                <div className="add_user iconfont icon-add-account"></div>
            </div>
        )
    }
}

export default Header