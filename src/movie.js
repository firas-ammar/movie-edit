import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import StarRatingComponent from 'react-star-rating-component';
import { MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter,  MDBTooltip } from "mdbreact";
import {connect} from 'react-redux'





const Movi = ({ element,id,onDelete,onEdit }) => {
 
    return (

            <section className="text-center my-5">
              <MDBRow>
                <MDBCol lg="10" md="12" className="mb-lg-0 mb-4">
                  <MDBCard wide ecommerce>
                    <MDBCardImage
                      cascade 
                      src={element.image}
                      top
                      alt="sample photo"
                      />
                    <MDBCardBody cascade className="text-center">
                      <a href="#!" className="text-muted">
                        <h5>Action</h5>
                      </a>
                      <MDBCardTitle>
                        <strong>
                          <a href="#!">{element.title}</a>
                        </strong>
                      </MDBCardTitle>
                      <MDBCardText>
                        Lorem ipsum dolor sit amet, consectetur adipisicing minima
                        veniam elit.
                      </MDBCardText>
                      <MDBCardFooter className="px-1">
                        <span className="float-left font-weight-bold">
                        <button
                className="movie-delete-button"
                onClick={() => onDelete(id)} >
                Del
            </button>
            <button
                className="movie-edit-button"
                onClick={() => onEdit(element)} >
                Edit
            </button>

                        </span>
                        <span className="float-right">
                        <StarRatingComponent 
                  name="rate2" 
                  editing={false}
                  starCount={5}
                  value={element.rating}
                  />
                        </span>
                      </MDBCardFooter>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </section>
            
               
          );
        }
        
        const mapDispatchToProps = dispatch => {
          return {
              onDelete: (cin) => {
                  dispatch({
                      type: 'DELETE_MOVIE',
                      cin
                  })
              },
              
              onEdit: (movie) => {
                dispatch({
                    type: 'EDIT_MOVIE',
                    id:movie.id,

                    movie: {
                      id: movie.id,
                      title: prompt('movie title: ',movie.title),
                      rating: Number(prompt('movie rating: ',movie.rating))
                
                          }
                     })
            }
          }
      }
      const SmartMovieCard = connect(null, mapDispatchToProps)(Movi)

export default SmartMovieCard;