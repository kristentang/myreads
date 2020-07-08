import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from 'react-router-dom';
import BookSearch from './BookSearch.js'
import BookShelves from './BookShelves.js'

class BooksApp extends React.Component {

  state = {
    books: []
  }

  componentDidMount() {
    this.getBooks()
  }

  getBooks = () => {
    BooksAPI.getAll()
    .then(books =>
      this.setState({ books }));
  }

  updateBookShelf = (bookInfo, shelfSelection) => {
    BooksAPI.update(bookInfo, shelfSelection)
      .then((book) => { // promise with book return
        this.getBooks()
      })
  }

  render() {
    const {books} = this.state
    const bookShelves = [
      {
        id: 'currentlyReading',
        name: 'Currently Reading',
        list: books.filter((book) => (
          book.shelf === 'currentlyReading' ))
      },
      {
        id: 'wantToRead',
        name: 'Want To Read',
        list: books.filter((book) => (
          book.shelf === 'wantToRead' ))
      },
      {
        id: 'read',
        name: 'Read',
        list: books.filter((book) => (
          book.shelf === 'read' ))
      },
      {
        id: 'none',
        name: 'None',
        list: books.filter((book) => (
          book.shelf === 'none' ))
      }
    ]
    const viewableBookShelves =  bookShelves.filter((bookShelf) => (
      bookShelf.id !== 'none' ))

    return (
      <div className="app">
        <Route exact path='/search' render={({history}) => (
          <BookSearch myBooks={books} bookShelves={bookShelves} updateBookShelf={this.updateBookShelf}/>
        )} />
        <Route exact path='/' render={() => (
            <BookShelves bookShelves={bookShelves} viewableBookShelves={viewableBookShelves} updateBookShelf={this.updateBookShelf} />
        )} />
      </div>
    )
  }
}

export default BooksApp
