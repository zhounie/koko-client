import React from 'react'
import Header from '../../components/Header'
import Bottom from '../../components/Bottom'
import { connect } from 'react-redux'

class Main extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="friends">
                <Header title="联系人" />
                {this.props.children}
                <Bottom />
            </div>
        )
    }
    componentDidMount() {
        console.log(this.props);
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

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)