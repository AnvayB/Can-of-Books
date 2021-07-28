import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import './BestBooks.css';
import axios from 'axios';

class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookArray: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/books').then(books => {
      this.setState({bookArray: books.data})
      console.log(`Current State is: ${this.state.bookArray}`);
    })
  }
  
  
  render() {
    return(
      <Carousel>
        {this.state.bookArray.map((book) => {
          return (
            <Carousel.Item>
              <img src="https://via.placeholder.com/300x400.png" alt="" />
            <Carousel.Caption>
                <h2>{book.books[0].name}</h2>
                <h3>{book.books[0].description}</h3>
              </Carousel.Caption>
            </Carousel.Item>
        )})}
      </Carousel>
    )
  }
}

export default MyFavoriteBooks;