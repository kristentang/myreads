import React from 'react'
import './App.css'
import Book from './Book.js'
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types'


class BookShelves extends React.Component {
  static propTypes = {
    bookShelves: PropTypes.array.isRequired,
    viewableBookShelves: PropTypes.array.isRequired,
    updateBookShelf: PropTypes.func.isRequired
  }

  render () {
    const {bookShelves, viewableBookShelves, updateBookShelf} = this.props
    
    return (
      <div className="list-books-content">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          {viewableBookShelves.map((shelf) => (
            <div key={shelf.id} className="bookshelf">
              <h2 className="bookshelf-title">{shelf.name}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {shelf.list.map((book) => (
                    <li key={book.title}>
                      <Book
                        bookInfo={book}
                        bookShelves={bookShelves}
                        updateBookShelf={updateBookShelf}
                      />
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          ))}
          <div className="open-search">
            <Link
              to='/search'>
              <button>Add a book</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default BookShelves
