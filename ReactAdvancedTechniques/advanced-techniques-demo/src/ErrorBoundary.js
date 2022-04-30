import { Component } from 'react';

export default class ErrorBoundary extends Component {

    constructor(props) {
        super(props);

        this.state = {
            error: null
        }
    }

    static getDerivedStateFromError(error) {
        console.log('getDerivedStateFromError');
        return { error }
    }

    componentDidCatch(error) {
        console.log(typeof error);
    }

    render() {
        return this.state.error
            ? <h1>Occurred an error...</h1>
            : this.props.children;
    }
}