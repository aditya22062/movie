import { movies } from "./get_movie";
import React, { Component } from 'react'

export default class Banner extends Component {//type rcc and enter

    render() {
        console.log(movies);//to check that we are getting the list of movies
        let movie = movies.results[0]//usmein se unka phla wala humne rkh liya ovies k andar hi results mil jaata hai
        
        return (
            <>
                {
                    movie == ''?//agr fetch hone mein tym lga toh empty hoga so uske lye hum spinner lga denge loading k  liye copied from bootstrap  this gives us a realistic view
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>://else yeh krenge jo niche hai
                        <div className="card banner-card" >
                            <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}   alt={movie.title} className="card-img-top banner-img"/>
                            {/*<div className="card-body">*/}
                            <h5 className="card-title banner-title">{movie.original_title}</h5>
                                <p className="card-text banner-text">{movie.overview}</p>
                            { /*   <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>*/}
                        </div>
                }
            </>
        )
    }
}
