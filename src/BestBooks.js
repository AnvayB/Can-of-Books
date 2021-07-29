import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Form, Button } from 'react-bootstrap';
import './BestBooks.css';
import axios from 'axios';

class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookArray: [],
      book: [],
      email: '',
      bookTitle: '',
      bookDescription: '',
      bookStatus: ''
    }
  }
  

  componentDidMount() {
    axios.get('http://localhost:3000/books').then(books => {
      this.setState(
        {bookArray: books.data,
        email: books.data[0].email})
      console.log(`Current State is: ${this.state.bookArray}`);
    })
  }

  addBook = e => {
    e.preventDefault();
    axios.post('http://localhost:3000/books', {email: this.state.email, books: [{ name: this.state.bookName, description: this.state.bookDescription, status: this.state.bookStatus}]}).then(book => {
      console.log(book.data.name);
      this.setState({books: [...this.state.books, {bookName: book.data.name}]})
    })
  }

  updateBookName = e => {
    this.setState({name: e.target.value})
  }

  updateBookDescription = e => {
    this.setState({description: e.target.value})
  }

  updateBookStatus = e => {
    this.setState({status: e.target.value})
  }

  deleteBook = (e, id) => {
    e.preventDefault();
    axios.delete(`http://localhost:3001/books/${id}`).then(result => {
      console.log(result);
    })
}
  
  
  render() {
    return(
      <>
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
        <Form onSubmit={this.addBook}>
          <Form.Group className="mb-3" controlId="formBookTitle">
            <Form.Label>Book Title</Form.Label>
            <Form.Control type="text" placeholder="Enter book name" onChange={this.updateBookName}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formUserDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="Enter short description" onChange={this.updateBookDescription}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formSetStatus">
            <Form.Label>Current Status</Form.Label>
            <Form.Control type="text" placeholder="Reading, Completed, On hold, etc." onChange={this.updateBookStatus}/>
          </Form.Group>

          <Button variant="primary" type="submit" onClick={this.addBook}>
            Enter
          </Button>
        </Form>
      </>
    )
  }
}

export default MyFavoriteBooks;