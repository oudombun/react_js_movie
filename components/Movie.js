import Link from 'next/link';
import Image from 'react-bootstrap/Image'
const Movie =(props) => (
    <div className="col col-md-3 my-3">
        <div className="card col-md-12">
        <Image src={"https://image.tmdb.org/t/p/w500/"+props.movie.poster_path} thumbnail />
        
        <div className="card-body">
            <h5 className="card-title">{
                (props.movie.original_title).length > 20 ? 
                ((props.movie.original_title).substring(0,20-3))+'...'
                :(props.movie.original_title)
            }</h5>
            <p className="card-text">Release Date {props.movie.release_date}</p>
            <button className="btn btn-primary"><i class="fa fa-star mr-2"></i>{props.movie.vote_average}</button>
        </div>
        </div>
    </div>
);

export default Movie;