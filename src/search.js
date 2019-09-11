import React, { Component } from 'react'

import { MDBCol, MDBFormInline, MDBBtn } from "mdbreact";
import {connect} from 'react-redux'
import { catchClause } from "@babel/types";

class SearchPage extends Component {
  constructor(props) {
    super(props)
    this.state = {keyword:''  }
    }
  render() {
const {searchHandler,value}=this.props
    return (
      <MDBCol md="4">
             <MDBFormInline className=" mb-4">
               <input onChange={(event)=>searchHandler(event.target.value)} className="form-control mr-sm-2" 
                     type="text" 
                     value={value}
                    
                     placeholder="Search" aria-label="Search" />
               <MDBBtn gradient="aqua" rounded size="sm" type="submit" className="mr-auto">
                 Search
               </MDBBtn>
             </MDBFormInline>
           </MDBCol>)
}
}


const mapStateToProps = state => {
  return {
      value: state.titleFilter
  }
}
const mapDispatchToProps = dispatch => {
  return {
    searchHandler: (title) => {
          dispatch({
              type: 'SET_TITLE_FILTER',
              title
          })
      }
  }
}
const SearchPageContainer = connect(mapStateToProps, mapDispatchToProps)(SearchPage)
export default SearchPageContainer