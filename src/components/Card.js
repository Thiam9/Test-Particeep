
import React from 'react';
import '../styles/style.css';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import { ProgressBar } from 'react-bootstrap';


  function Card(props) {
    const movie = props.movie;
    const ratio = movie.likes / movie.dislikes +1;
    return (
     
      <div className="card" >
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <h6 className="card-categorie"> {movie.category} </h6>
          <ProgressBar now={ratio} label={`${ratio}%`}/>

          <i className="fa fa-trash btnSup" aria-hidden="true"  onClick={_ => props.deleteMovie(movie.id)}></i>
          
        

        <BootstrapSwitchButton className="btnToggle" checked={false }  size="lg" onlabel='likes' offlabel='dislikes'/>
        </div>
        
      </div>
    
     
    );
  }


export default Card;