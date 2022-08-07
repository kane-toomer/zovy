import React, { Component } from 'react';

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError) {
            return <h1 className="text-center mt-5">Hmm... Can't return the list. Something is wrong!</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundry;