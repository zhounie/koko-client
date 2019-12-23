import React, { Component } from 'react'
import './index.scss'
import { Link, withRouter } from 'react-router-dom'
class Bottom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active: ''
        }
        this.handleRouter = this.handleRouter.bind(this)
    }
    render() {
        return (
            <div className="bottom">
                <div className={this.state.active === '/information' ? 'message active' : 'message'} onClick={(event) => this.handleRouter(event, '/information')}>
                    <i className="iconfont icon-messagecenter"></i>
                    <span>消息</span>
                </div>
                <div className={this.state.active === '/friends' ? 'message active' : 'message'} onClick={(event) => this.handleRouter(event, '/friends')}>
                    <i className="iconfont icon-Customermanagement"></i>
                    <span>联系人</span>
                </div>
                <div className={this.state.active === '/mine' ? 'message active' : 'message'}  onClick={(event) => this.handleRouter(event, '/mine')}>
                    <i className="iconfont icon-usercenter"></i>
                    <span>我的</span>
                </div>
            </div>
        )
    }
    handleRouter(event, path) {
        this.setState({
            active: this.props.location.pathname
        })
        this.props.history.push(path)
    }
}

export default withRouter(Bottom)