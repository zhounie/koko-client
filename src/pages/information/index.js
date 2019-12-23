import React from 'react'
import Header from '../../components/Header'
import Bottom from '../../components/Bottom'

class About extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="About">
        45
      </div>
    );
  }
  componentDidMount() {
    console.log(this.props.history);
  }
}


export default About;
