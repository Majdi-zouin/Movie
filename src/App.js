import React, { Component } from 'react';
import Movie from './movie';
import './App.css';
import StarRatingComponent from 'react-star-rating-component';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 1,
      keyword:''
    };
  }

  onStarClick=(nextValue, prevValue, name)=> {
    this.setState({ rating: nextValue });
  } 
  handleChange=(e)=>{
    this.setState({
      keyword:e.target.value
    })
  }

  render() {
    return (
      <div className="App">

        <div className="nav">
          <div className="search">
            <input type="text" placeholder="Search for a movie" name="Search" class="tosearch" onChange={this.handleChange} ></input>
            <button name="Search" class="butsearch" onClick={this.handleClick}>Search</button>
          </div>
          <div className="rating">
            <h2 className="min">Minimum rating</h2>
            <StarRatingComponent
              name="rate1"
              starCount={5}
              value={this.state.rating}
              onStarClick={this.onStarClick.bind(this)}
            />
          </div>
        </div>
        <Movie keyword={this.state.keyword} rating={this.state.rating} />
        <div>
          <input type="button" name="plus" onClick={this.handleClick}></input>
        </div>

      </div>
    );
  }
}

export default App;