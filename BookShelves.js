import React from 'react'
import './App.css'
import {Link} from 'react-router-dom';
import Book from './Book.js'


class BookShelves extends React.Component {
  render () {
    const {queriedBooks, viewableBookShelves, updateBookShelf} = this.props

    return (
      <div className="list-books-content">
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
                      onUpdateBookShelf={(book, shelf) => {
                        updateBookShelf(book, shelf)
                      }}
                    />
                  </li>
                ))}
              </ol>
            </div>
          </div>
        ))}

    )
  }

}

export default BookShelves
