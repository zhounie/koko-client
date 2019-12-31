import React from 'react'
import './index.scss'

class Mine extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {}
    }
  }
  render() {
    return (
      <div className="mine">
        <div className="head">
          <div className="head_box">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578362455&di=ae43847961c0e3049bc99e7f3242f810&imgtype=jpg&er=1&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201704%2F10%2F20170410073535_HXVfJ.thumb.700_0.jpeg" />
            <h4>{this.state.user.userName}</h4>
          </div>
        </div>
        <ul>
          <li>
            <label>账号</label><span>{this.state.user.userName}</span>
          </li>
          <li>
            <label>性别</label><span>{this.state.user.sex?'男':'女'}</span>
          </li>
          <li>
            <label>年龄</label><span>{this.state.age}</span>
          </li>
        </ul>
        <div className="friend_btn">
            <button>编辑资料</button>
        </div>
      </div>
    )
  }
  componentDidMount() {
    this.setState({
      user: JSON.parse(localStorage.getItem('user')||'{}')
    })
  }
}


export default Mine;
