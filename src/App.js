import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/Card';
import { movies$ } from './movies';



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      movies: [],
      categories: [],
      filtred: []
    }
    this.deleteMovie = this.deleteMovie.bind(this);
    this.trierParCategorie = this.trierParCategorie.bind(this);
  }
  deleteMovie(idMovie) {
    const myMovies = this.state.movies.slice();
    const index = myMovies.findIndex(movie => {
      return movie.id === idMovie
    });
    
    const myFiltred = this.state.filtred.slice();
    const filtredIndex = myFiltred.findIndex(movie => {
      return movie.id === idMovie
    });
    myMovies.splice(index, 1);
    myFiltred.splice(filtredIndex, 1);
    this.setState({movies: myMovies});
    this.setState({filtred: myFiltred});
  }
  trierParCategorie(event) {
    const myMovies = this.state.movies.slice();
    const result = myMovies.filter(movie => movie.category === event.target.value);
    this.setState({filtred: result});

  }
  componentDidMount() {
    movies$.then((myMovies) => {
      this.setState({movies: myMovies, categories:[...new Set(myMovies.map(movie => movie.category))], filtred: myMovies});
    });
  }
  render(){
  return (
    <div className="container">
    <div>
    
      <select onChange={this.trierParCategorie}>
      {this.state.categories.map((category, index) => {
        return (<option value={category} key={index}>{category}</option>);
      })}
    </select>
    </div>
    <div>
      {this.state.filtred.map(movie => {
        return (<Card movie={movie} key={movie.id} deleteMovie={this.deleteMovie}/>);
      })}
    </div>
    </div>
  );
}
}

export default App;
