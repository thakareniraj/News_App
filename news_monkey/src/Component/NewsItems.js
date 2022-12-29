import React, { Component } from 'react'
import PropTypes from 'prop-types'  

export default class NewsItems extends Component {

   static defaultProps = {
     country : ' in' ,
     pageSize : 8 ,
     category : 'general'
   }

   static propTypes ={
     country : PropTypes.string ,
     pageSize : PropTypes.number ,
     category : PropTypes.string 
   }
  render() {
    let  {tittle ,description ,imageUrl ,newsUrl ,author ,date , source}  = this.props ;
    return (<>
     <div>
<div className="card">
  <h5 className="card-title" / >{tittle}<span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%' , zIndex: '1'}}> {source}</span> 
  <img className="card-img-top" src={!(imageUrl)?"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg":imageUrl} / >
  <div className="card-body">
    <h5 className="card-title">{tittle}</h5>
    <p className="card-text">{description}...</p>
    <p className="card-text"><small class="text-muted">By {!author?"Unknown" :author} on {date}</small></p>
    <a href={newsUrl} target ="_blank"    className="btn btn-dark">Read More</a>
  </div>
 </div>
    </div>
    </>
    )
  }
}
