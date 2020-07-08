import React from 'react'
import './App.css'
import {Link} from 'react-router-dom'
import Book from './Book.js'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'

class BookSearch extends React.Component {
  static propTypes = {
    myBooks: PropTypes.array.isRequired,
    bookShelves: PropTypes.array.isRequired,
    updateBookShelf: PropTypes.func.isRequired
  }

  state = {
    books: [],
    query: '',
    errorMessage: ''
  }

  updateQuery = (query) => {
    this.setState(() => ({
      query: query
    }))
    if (query) {
      BooksAPI.search(query)
        .then((books) => { // promise with book return
          if (!books.error) {
            books.forEach(book => {
              let shelf = "none";
              this.props.myBooks.forEach(myBook => {
                if(book.id === myBook.id){
                  shelf = myBook.shelf;
                }
              });
              book.shelf = shelf;
            });
            this.setState({books: books, errorMessage: ''})
          } else {
            this.setState({books: [], errorMessage: 'No Books Found'})
          }
        })
    } else {
      this.setState({books: [], query: '', errorMessage: ''})
    }
  }

  render () {
    const {bookShelves, updateBookShelf} = this.props
    const {books, query, errorMessage} = this.state

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            to='/'
            className="close-search">
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text" placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)} />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {(books !== undefined, books.length > 0) && (books.map((book) => (
              <li key={book.id}>
                <Book
                  bookInfo={book}
                  bookShelves={bookShelves}
                  updateBookShelf={updateBookShelf}
                />
              </li>
            )))}
            {errorMessage !== ''&& (
              <div>No Books Found</div>
            )}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookSearch
