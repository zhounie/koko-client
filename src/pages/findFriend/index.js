import React from 'react'
import './index.scss'
import { withRouter } from 'react-router-dom'
import { findFriend } from '../../api/friend'
class FindFriend extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: ''
        }
    }
    render() {
        return (
            <div className="find_friend">
                <div className="add_friend_head">
                    <i className="iconfont icon-arrow-lift" onClick={() => this.props.history.goBack()}></i>
                    <span>添加</span>
                </div>
                <div className="add_friend_input">
                    <input type="text" value={this.state.userName} onChange={this.onChange.bind(this)} placeholder="KoKo号/手机号" />
                </div>
                <div className="add_friend_btn">
                    <button onClick={this.onSearch.bind(this)}>搜索</button>
                </div>
            </div>
        )
    }
    onChange(e) {
        this.setState({
            userName: e.target.value
        })
    }
    async onSearch() {
        let params = { userName: this.state.userName }
        let res = await findFriend(params)
        if (res.code === 200) {
            this.props.history.push({
                pathname: 'friendsMaterial',
                state: {
                    user: JSON.stringify(res.data)
                }
            })
        }
    }
}

export default withRouter(FindFriend)