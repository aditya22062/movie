import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Navabar extends Component {
    render() {
        // we use link it to take it to the desired page / is our home page and /favourites is our favouirte page
        return <>
            <div style={{display:'flex',background:'lightblue',position:'sticky'}}>
            
                <Link to="/" style={{textDecoration:'none'}}><h1 style={{marginLeft:'1rem',marginTop:'1rem'}}>Movies App</h1></Link>
                <Link to="/favourites" style={{textDecoration:'none'}}><h2 style={{marginLeft:'1rem',marginTop:'1rem'}}>Favourites</h2></Link>
            </div>
        </>
    }
}
