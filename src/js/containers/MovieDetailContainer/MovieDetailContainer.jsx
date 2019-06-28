import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getInfo } from  '../MovieSearchContainer/searchActions';

export default class MovieDetailContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getInfo(this.props.match.params.id));
  }

  render() {
    const { movieInfo } = this.props;
    return (
      <div>
        <div 
          className='jumbotron bg-dark text-center text-white'
          style={{ opacity: .9 }}
        >
          <h1>Movie Detail Container</h1>
        </div>
        <Link to='/' className='btn btn-outline-success my-2 my-sm-0'>Go Back</Link>

        <div className="row" style={{ margin: '20px' }}>
          <div className="col-4">
            <img src={`${movieInfo.Poster}`} alt={movieInfo.Title}/>
          </div>
          <div className="col-8">
            <div className="card bg-dark text-white">
              <h5 className="card-header">Movie Details</h5>
              <div className="card-body">
                <h5 className="card-title">
                  { movieInfo.Title }
                </h5>
                <span className="badge badge-success" style={{ margin: '5px' }}>
                Released: {movieInfo.Year}
                </span>

                <span className="badge badge-success" style={{ margin: '5px' }}>
                Length:  { movieInfo.Runtime }
                </span>

                <span className="badge badge-success" style={{ margin: '5px' }}>
                Genre: { movieInfo.Genre }
                </span>

                <p className="card-text">
                  - Synopsis: 
                </p>
                <p>{ movieInfo.Plot }</p>

                <p className="card-text">
                  - Awards: 
                </p>
                <p>{ movieInfo.Awards }</p>

                <p className="card-text">
                  - Metascore: 
                </p>
                <p>{ movieInfo.Metascore }/100</p>

                <p className="card-text">
                  - IMDB: 
                </p>
                <p>{ movieInfo.imdbRating }</p>
              </div>
            </div>
          </div>
        </div>


      </div>
    )
  }
}