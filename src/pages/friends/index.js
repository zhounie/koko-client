import React from 'react'
import './index.scss'
import { friendList } from '../../api/friend'
class Friends extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      friendRequest: [],
      friendList: []
    }
  }
  friendRequestList(item) {
    return (
      <li className="user_item" key={item.userName}>
        <div className="request_msg">
          <div className="user_head">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578362455&di=ae43847961c0e3049bc99e7f3242f810&imgtype=jpg&er=1&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201704%2F10%2F20170410073535_HXVfJ.thumb.700_0.jpeg" />
          </div>
          <div className="user_msg">
            <h4>{item.nikeName}</h4>
            <span>请求加为好友</span>
          </div>
        </div>
        <div className="agree_btn">
          <button onClick={this.onAgree.bind(this, item)}>同意</button>
        </div>
      </li>
    )
  }
  render() {
    return (
      <div className="friends">
        <ul className="friend_request">
          {
            this.state.friendRequest.map(item => {
              return this.friendRequestList(item)
            })
          }
        </ul>
        <ul className="user_box">
          {
            this.state.friendList.map(item => {
              return (
                <li className="user_item" key={item.userName}>
                  <div className="user_head">
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578362455&di=ae43847961c0e3049bc99e7f3242f810&imgtype=jpg&er=1&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201704%2F10%2F20170410073535_HXVfJ.thumb.700_0.jpeg" />
                  </div>
                  <div className="user_msg">
                    <h4>{item.nikeName}</h4>
                    <span>[iPhone在线]</span>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
  componentDidMount() {
    let userId = JSON.parse(localStorage.getItem('user'), '{}').id
    friendList({userId}).then(res => {
      if (res.code === 200) {
        this.setState({
          friendRequest: JSON.parse(localStorage.getItem('friendRequest'), '[]'),
          friendList: res.data
        })
      }
    })
  }
  onAgree(user) {
    console.log(user.requestId);

    
  }
}


export default Friends;
