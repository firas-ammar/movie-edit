import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';
import {connect} from 'react-redux'


class Star extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: 1
    };
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
    this.props. changeRatingHandler(nextValue);
  }

  render() {
    const { rating } = this.state;
    
    return (                
      <div className="etoile" >
        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          onStarClick={this.onStarClick.bind(this)}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    rating: state.minRatingFilter
  }
}
const mapDispatchToProps = dispatch => {
  return {
    changeRatingHandler: (rating) => { 
          dispatch({
              type: 'SET_RATING_FILTER',
              rating: rating
          })
      }
  }
}
const SmartRatingFilter = connect(mapStateToProps, mapDispatchToProps)(Star)

export default SmartRatingFilter

