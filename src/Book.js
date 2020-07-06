import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import PropTypes from 'prop-types'
import Move from './Move.js'

class Book extends React.Component {

static propTypes = {
  bookInfo: PropTypes.shape({
    bookUrl: PropTypes.string.isRequired,
    bookTitle: PropTypes.string.isRequired,
    bookAuthor: PropTypes.string.isRequired,
    bookShelf: PropTypes.string.isRequired
  })
}

render () {
  const {bookInfo, bookShelves} = this.props

  return (
    <div key={bookInfo.bookTitle} className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${bookInfo.bookUrl})` }}></div>
        <Move bookInfo={bookInfo} bookShelves={bookShelves}/>
      </div>
      <div className="book-title">{bookInfo.bookTitle}</div>
      <div className="book-authors">{bookInfo.bookAuthor}</div>
    </div>
  )
}

}

export default Book
