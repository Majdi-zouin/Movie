import React, { Component } from 'react';

const LoaderHOC = (WrappedComponent) => {
    return class LoaderHOC extends Component {
        render() {
            return this.props.isLoading ?
                <div> <h1>Loading Movie</h1>
                    <div class="loader"></div>
                    <h2>Loading</h2>
                </div>
                : <WrappedComponent {...this.props} />
        }

    }
}
export default LoaderHOC;

