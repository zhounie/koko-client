import React from 'react'
import Header from '../../components/Header'
import Bottom from '../../components/Bottom'
import { connect } from 'react-redux'
import { ACTIVE, TITLE } from '../../redux/types'
import { withRouter } from 'react-router-dom'

class Main extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="main">
                <Header title={this.props.title} />
                {this.props.children}
                <Bottom active={this.props.active} changeActive={this.changeActive.bind(this)}/>
            </div>
        )
    }
    componentDidMount() {
        console.log(this.props);
        
    }
    changeActive(active) {
        this.props.setActive(active)
        let title = ''
        switch(active){
            case 'information':
                title = '消息'
                break;
            case 'friends':
                title = '联系人'
                break;
            default:
                title = '我的'
        }
        this.props.setTitle(title)
        this.props.history.push(`/${active}`)
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        title: state.title,
        active: state.active
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setActive(active) {
            dispatch({
                type: ACTIVE,
                data: { active }
            })
        },
        setTitle(title) {
            dispatch({
                type: TITLE,
                data: { title }
            })
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))