import React, { Component } from 'react';

import SpinnerPage  from './spinner';



const LoadingHOC = (WrappedComponent) => {

    return class LoadingHOC extends Component {

        render(){

           return this.props.loading ? <SpinnerPage/> : <WrappedComponent {...this.props} />

        }

    }

}



export default LoadingHOC;