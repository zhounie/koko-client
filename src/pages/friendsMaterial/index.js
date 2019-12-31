import React from 'react'
import "./index.scss"
import { withRouter } from 'react-router-dom'
import { addFriend } from '../../api/friend'
class FriendsMaterial extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {}
        }
    }
    render() {
        return (
            <div className="friend_material">
                <div className="add_friend_head">
                    <i className="iconfont icon-arrow-lift" onClick={() => this.props.history.goBack()}></i>
                </div>
                <div className="head">
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578362455&di=ae43847961c0e3049bc99e7f3242f810&imgtype=jpg&er=1&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201704%2F10%2F20170410073535_HXVfJ.thumb.700_0.jpeg" />
                    <h4>{this.state.user.nikeName}</h4>
                </div>
                <div className="material">
                    <div><i className="iconfont icon-bussiness-man"></i><span>{this.state.user.userName}</span></div>
                    <div><i className="iconfont icon-Customermanagement"></i><span>{this.state.user.sex?'男':'女'}</span></div>
                    <div><i className="iconfont icon-calendar"></i><span>{this.state.user.age}</span></div>
                </div>
                <div className="friend_btn">
                    <button onClick={this.addFriend.bind(this)}>加好友</button>
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.setState({
            user: JSON.parse(this.props.location.state.user || '{}')
        })
    }
    addFriend() {
        let user = JSON.parse(localStorage.getItem('user'))
        let parse = {
            userId: user.id,
            friendId: this.state.user.userId
        }
        addFriend(parse).then(res => {
            if (res.code === 200) {
                console.log(res);
                
            }
        })
    }
}

export default withRouter(FriendsMaterial)