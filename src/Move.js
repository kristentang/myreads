import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import PropTypes from 'prop-types'

class Move extends React.Component {
  static propTypes = {
    bookInfo: PropTypes.shape({
      bookUrl: PropTypes.string.isRequired,
      bookTitle: PropTypes.string.isRequired,
      bookAuthor: PropTypes.string.isRequired,
      bookShelf: PropTypes.string.isRequired
    })
  }

  updateBookShelf = (shelfSelection) => {
    console.log(shelfSelection)
    this.setState(() => ({
      bookShelf: shelfSelection
    }))
  }

  render () {
    const {bookInfo, bookShelves} = this.props

    return (
      <div key={bookInfo.bookTitle} className="book-shelf-changer">
        <select onChange={(event) => this.updateBookShelf(event.target.value)}>
          <option value="move" disabled>Move to...</option>
          {bookShelves.map((bookShelf) => (
            <option key={bookShelf.id} value={bookShelf.id}>{bookShelf.name}</option>
          ))}
        </select>
      </div>
    )
  }

}

export default Move
