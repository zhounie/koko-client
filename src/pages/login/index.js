import React from 'react'
import './index.scss'
import { login } from '../../api/index'
import { friendRequest } from '../../api/friend'
import { withRouter } from 'react-router-dom'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            password: ''
        }
    }
    render() {
        return (
            <div className="login">
                <div className="logo">
                    <img src={require('../../assets/images/2.jpg')} />
                </div>
                <div className="account">
                    <input type="text" defaultValue={this.state.userName} onChange={this.onChange.bind(this, 'userName')} />
                    <input type="password" defaultValue={this.state.password} onChange={this.onChange.bind(this, 'password')} />
                </div>
                <button className="btn_login" onClick={this.handleLogin.bind(this)}>
                    <i className="iconfont icon-arrow-right"></i>
                </button>
                <div className="else">
                    <span>忘记密码</span>
                    <i>|</i>
                    <span>用户注册</span>
                </div>
            </div>
        )
    }
    onChange(key, e) {
        this.setState({
            [key]: e.target.value
        })
    }
    async handleLogin() {
        let params = {
            userName: this.state.userName,
            password: this.state.password
        }
        let res = await login(params)
        if (res.code === 200) {
            localStorage.setItem('user', JSON.stringify(res.data))
            friendRequest({userId: res.data.id}).then(res => {
                if(res.code === 200) {
                    localStorage.setItem('friendRequest', JSON.stringify(res.data))
                    this.props.history.replace('/friends')
                }
            })
        }
    }
}

export default withRouter(Login);