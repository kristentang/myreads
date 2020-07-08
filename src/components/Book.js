import React from 'react'
import '../App.css'
import PropTypes from 'prop-types'
import Move from './Move.js'

class Book extends React.Component {

static propTypes = {
  bookInfo: PropTypes.object.isRequired,
  bookShelves: PropTypes.array.isRequired,
  updateBookShelf: PropTypes.func.isRequired
}

render () {
  const {bookInfo, bookShelves, updateBookShelf} = this.props

  return (
    <div key={bookInfo.title} className="book">
      <div className="book-top">
        {bookInfo.imageLinks &&
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${bookInfo.imageLinks.smallThumbnail})` }}></div>
        }
        <Move bookInfo={bookInfo} bookShelves={bookShelves} updateBookShelf={updateBookShelf}/>
      </div>
      <div className="book-title">{bookInfo.title}</div>
      <div className="book-authors">{bookInfo.authors}</div>
    </div>
  )
}

}

export default Book
