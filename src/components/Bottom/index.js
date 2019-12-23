import React, { Component } from 'react'
import './index.scss'
import { Link, withRouter } from 'react-router-dom'
class Bottom extends React.Component {
    constructor(props) {
        super(props)
        this.handleRouter = this.handleRouter.bind(this)
    }
    render() {
        return (
            <div className="cm-bottom">
                <div className={this.props.active === 'information' ? 'message active' : 'message'} onClick={() => this.handleRouter('information')}>
                    <i className="iconfont icon-messagecenter"></i>
                    <span>消息</span>
                </div>
                <div className={this.props.active === 'friends' ? 'message active' : 'message'} onClick={() => this.handleRouter('friends')}>
                    <i className="iconfont icon-Customermanagement"></i>
                    <span>联系人</span>
                </div>
                <div className={this.props.active === 'mine' ? 'message active' : 'message'}  onClick={() => this.handleRouter('mine')}>
                    <i className="iconfont icon-usercenter"></i>
                    <span>我的</span>
                </div>
            </div>
        )
    }
    handleRouter(active) {
        this.props.changeActive(active)
    }
}

export default withRouter(Bottom)