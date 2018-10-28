import React from 'react'
import Loader from 'react-loader-spinner'

class Wait extends React.Component {
    render() {
        return(
            <Loader type={this.props.type} color={this.props.color} height={this.props.height} width={this.props.width} />
        );
    }
}

Wait.defaultProps = {
    height: 30,
    width: 30,
    color: 'white',
    type: 'Oval'
}

export default Wait;