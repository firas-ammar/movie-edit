import React, { Component } from 'react';
import Movi from './movie';
import { Container, Row, Col } from 'reactstrap';
import { wrap } from 'module';
import { MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter,  MDBTooltip } from "mdbreact";
import StarRatingComponent from 'react-star-rating-component';
import Demo from './carousel';
import LoadingHOC from './compoHOC'
import {connect} from 'react-redux'


const Moviecard = ({movies ,minRatingFilter, value, onAddMovie 
}) => {
    return (
        
        <Container>

            <div className="mx-auto" style={{ display: 'flex', justifyContent: 'space-around' }} >
                {movies.filter( el=> 
        el.rating >= minRatingFilter && 
        
el.title.toLowerCase().includes(value.toLowerCase())).map((el,index )=> <Movi key={el.id} element={el} id={index}  />)}
            </div>
            <button className="text-center my-5" onClick={onAddMovie} >
            +
            </button>
        </Container>

    )
} 

const mapStateToProps = state => {
  return {
      value: state.titleFilter,
      movies:state.movies,
      minRatingFilter:state.minRatingFilter
  }
}
  const mapDispatchToProps = dispatch => {
    return {
        onAddMovie: () => {
            dispatch({
                type: 'ADD_MOVIE',
                movie: {
                    id: Math.random(),
                    title: prompt('movie title: '),
                    rating: Number(prompt('movie rating: ')),
                   
                }
            })
        },
        changeRatingHandler: (rating) => { 
          dispatch({
              type: 'SET_RATING_FILTER',
              rating: rating
          })
      }
    }
}


const SmartMovieList = connect(mapStateToProps, mapDispatchToProps)(Moviecard)

export default LoadingHOC(SmartMovieList)
