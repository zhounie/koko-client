import React from 'react'
import Header from '../../components/Header'
import Bottom from '../../components/Bottom'

class Mine extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="mine">
        <Header title="我的" />
        <Bottom />
      </div>
    );
  }
  componentDidMount() {
    console.log(this.props.history);
  }
}


export default Mine;
