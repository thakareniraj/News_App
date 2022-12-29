import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import './Button.css'

export default class News extends Component {

  handleNextClick = async ()=>{
    console.log("Next");
    if (!( this.state.page + 1 > Math.ceil(this.state.totalResults/20))){
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d1d2f4f1ec1a4fc6a047651a7a04d467&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading :true})
      let data = await fetch(url);
      let parsedData = await data.json()
      console.log(parsedData);
      this.setState({
      page: this.state.page + 1,
      loading : false ,
      articles: parsedData.articles})
    }
   
  }
    
    
    handlePrevClick = async ()=>{
      console.log("Prev");
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}.us&apiKey=d1d2f4f1ec1a4fc6a047651a7a04d467&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading :true})
      let data = await fetch(url);
      let parsedData = await data.json()
      console.log(parsedData);
      this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles ,
      loading : false})
      }

  async componentDidMount(){
    // console.log("“cdm”");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
    this.setState({loading : true})
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log("parsedData");
    this.setState({
      articles: parsedData.articles ,
      loading :false
    })
    }

    constructor(){
      super();
      this.state = {
      articles: [],
      loading: false,
      page: 1
      }};

  render() {    
    return (
      <>
      <div className="container">
        {/* <h2 className="text-center ">News App</h2>
        <h2 className="mx-auto" style={{width: "50px"}}>News Monkey - Top Headlines</h2>
        {this.state.loading &&<Spinner />} */}

<div className="row">
{
/*  !(this.state.loading)&&*/  this.state.articles.map((element)=>{
    return (
    <div className="col-md-4" key ={element.imageUrl}>
     < NewsItems tittle ={element.tittle?element.tittle.slice(0,45):""} description ={element.description?element.description.slice(0,88):""}  imageUrl ={element.urlToImage} newsUrl={element.url} author ={element.author}   date = {element.publishedAt} source ={element.source.name} />
    </div>
  )
  }
  )
}
  </div>
    <div className ="d-flex justify-content-between"> 
  <button disabled  ={this.state.page <=1}  type="button" className="btn btn-dark" onClick={this.handlePrevClick} >&larr; Previous</button>
  <button disabled ={ this.state.page + 1 > Math.ceil(this.state.totalResults/20)}    type="button" className="btn btn-dark" onHover onClick={this.handleNextClick}  >Next &rarr;</button>
     </div>
         </div>
         </>
    )
  }
}
