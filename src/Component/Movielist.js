import React, { Component } from 'react'
//import { movies } from './get_movie' isko use nhi krenge yeh bs testing purpose k liye tha iske jgh hum api se call krenge jisse recent movies aayegi uske liye we will use axios
import axios from 'axios';
export default class Movielist extends Component {//rcc class component
    constructor(){
        //console.log('constructor');yeh humne life cycle methods pdhne k liye kiya tha
        //class component mein hum constructor ka use krte hai state bnane k liye late jb hooks aaya then hum functional component mein bhi state use kr payenge hum
        super();
        this.state={
            hover:'',//hover k liye
            parr:[1],
            currPage:1,//default page
            movies:[],
        }
    }
    async componentDidMount(){
        //side effects yaha woh kaam kro jo tyme lene wale ho like api se call krna depends ki kitna time mein response aayega so inhi ko side effects bolte hai
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=5540e483a20e0b20354dabc2d66a31c9&language=en-US&page=${this.state.currPage}`);//axios ka use krte hai hum for api calls and itis async usmein aakhri mein humne jquery likhi pAGES KO LEKE abhi  pe hai but will change dynamically
        let data=res.data
        //console.log(data); check kiya ki data aya ki nhi
        this.setState({
            movies:[...data.results]//movies k list ko update krdiya using spread function spread pdhna ek baar
        })
        
    }
    changeMovies=async()=>{
        {/*console.log("changemovies called");
    console.log(this.state.currPage);*/}
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=5540e483a20e0b20354dabc2d66a31c9&language=en-US&page=${this.state.currPage}`);
        let data = res.data
        // console.log(data);
        this.setState({
            movies:[...data.results]//hum change movie ko call krenge toh woh page and movies dono ko render krega aur naya update ko llake rkh dega
        })
    }
    handleRight=()=>{
        let temparr =[]
        for(let i=1;i<=this.state.parr.length+1;i++){
            temparr.push(i);
        }
        this.setState({
            parr:[...temparr],//yeh smjho ki apn parr mein naya value daal rhe like phle [1] ab [1,2]
            currPage:this.state.currPage+1//kyuki next pe kiye toh jo state tha usse plus 1
        },this.changeMovies)//yeh call kiya gaya ahai chng laane k liye
    }
    hanleLeft=()=>{
        if(this.state.currPage!=1){
            this.setState({
                currPage:this.state.currPage-1
            },this.changeMovies)
        }
    }
    handleClick=(value)=>{//yeh function jub hum kisi page pe directly jaana chaein by clicking on the number tb k liye
        if (value!=this.state.currPage){
            this.setState({//value nhi hai uske barabar toh set krke change movie ko call krdenge
                currPage:value
            },this.changeMovies)
        }
    }
    render() {
        
        //let movie = movies.results
        return (
            <>
                {
                    this.state.movies.length == 0 ? //agr movies ka length  0 hoga toh loadbar
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div> ://else yeh terneray operator hai
                        <div>
                            <h3 className='text-center'><strong>Trending</strong></h3>
                            <div className='movie-list'>{
                                this.state.movies.map((moviObj) => (//isse hr ek movie milega jisse humko baar baar card mein alg se data bhrna pd rha tha woh nhi pdega
                                        //setstate se hum set krte uss elemnt k  state ko
                                    <div className="card movie-card" onMouseEnter={()=>this.setState({hover:moviObj.id})} onMouseLeave={()=>this.setState({hover:''})}>
                                        <img src={`https://image.tmdb.org/t/p/original${moviObj.backdrop_path}`} alt={moviObj.title} className="card-img-top movie-img" style={{ height: '70vh', width: '33vw' }} />
                                        {/*<div className="card-body">*/}
                                        <h5 class="card-title movie-title">{moviObj.original_title}</h5>
                                        {/*<p class="card-text banner-text">{moviObj.overview}</p>*/}
                                        <div className="button-wrapper" style={{display:'flex',justifyContent:'center',width:'100%'}}>
                                            {
                                                this.state.hover==moviObj.id &&

                                                <a className="btn btn-primary movie-btn">ADD TO FAVOURITE</a>
                                            }
                                            
                                        </div>
                                    </div>


                                ))
                            }
                            </div>
                            <div style={{display:'flex',justifyContent:'center'}}>
                            <nav aria-label="Page navigation example">
                                <ul className="pagination">
                                    <li className="page-item"><a className="page-link" onClick={this.hanleLeft}>Previous</a></li>{/* this will handle jb hum previous pe click krenge similarly next pe click krne k liye alg function hai*/}
                                    {
                                        this.state.parr.map((value)=>(
                                            <li className="page-item"><a className="page-link" onClick={()=>this.handleClick(value)}>{value}</a></li>
                                        ))
                                    }
                                    
                                    
                                    
                                    <li className="page-item"><a className="page-link" onClick={this.handleRight}>Next</a></li>
                                </ul>
                            </nav>
                            </div>
                            
                        </div>
                }
            </>
        )
    }
}
