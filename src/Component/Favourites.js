//check kro
import React, { Component } from "react";
import { movies } from "./get_movie";
export default class Favourites extends Component {
  constructor() {
    super();
    this.state = {
      genres: [],
      currgen: "All Genres",
      movies: [],
      currText: "",
    };
  }
  render() {
    const movie = movies.results;
    let genreids = {
      28: "Action",
      12: "Adventure",
      16: "Animation",
      35: "Comedy",
      80: "Crime",
      99: "Documentary",
      18: "Drama",
      10751: "Family",
      14: "Fantasy",
      36: "History",
      27: "Horror",
      10402: "Music",
      9648: "Mystery",
      10749: "Romance",
      878: "Sci-Fi",
      10770: "TV",
      53: "Thriller",
      10752: "War",
      37: "Western",
    };
    let temp = [];
    movie.forEach((movieObj) => {
      if (!temp.includes(genreids[movieObj.genre_ids[0]])) {
        temp.push(genreids[movieObj.genre_ids[0]]);
      }
    });
    temp.unshift("All Genres");
    return (
      <div>
        <>
          <div className="main">
            <div className="row">
              <div className="col-3">
                <ul className="list-group favourites-geners">
                  {temp.map((genre) =>
                    this.state.currgen == genre ? (
                      <li
                        className="list-group-item"
                        style={{
                          background: "#3f51b5",
                          color: "white",
                          fontWeight: "bold",
                        }}
                      >
                        {genre}
                      </li>
                    ) : (
                      <li
                        className="list-group-item"
                        style={{ background: "white", color: "#3f51b5" }}
                        onClick={() => this.handleGenreChange(genre)}
                      >
                        {genre}
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div className="col-9 favourites-table">
                <div className="row">
                  <input
                    type="text"
                    className="input-group-text col"
                    placeholder="Search"
                  />
                  <input
                    type="number"
                    className="input-group-text col"
                    placeholder="Rows Count"
                  />
                </div>
                <div className="row">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Genere</th>
                        <th scope="col">Popularity</th>
                        <th scope="col">Rating</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {movie.map((movieobj) => (
                        <tr>
                          <td>
                            <img
                              src={`https://image.tmdb.org/t/p/original${movieobj.backdrop_path}`}
                              alt={movieobj.title}
                              style={{ width: "5rem" }}
                            />
                            {movieobj.original_title}
                          </td>
                          <td>{genreids[movieobj.genre_ids[0]]}</td>
                          <td>{movieobj.popularity}</td>
                          <td>{movieobj.vote_average}</td>
                          <td>
                            <button type="button" className="btn btn-danger">
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <nav aria-label="Page navigation example">
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </>
      </div>
    );
  }
}
