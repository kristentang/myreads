import React from 'react'
import './App.css'
import PropTypes from 'prop-types'

class Move extends React.Component {
  static propTypes = {
    bookInfo: PropTypes.object.isRequired,
    bookShelves: PropTypes.array.isRequired,
    updateBookShelf: PropTypes.func.isRequired
  }

  updateBookShelf = (bookInfo, shelfSelection) => {
    if (this.props.updateBookShelf) {
      this.props.updateBookShelf(this.props.bookInfo, shelfSelection)
    }
  }

  render () {
    const {bookInfo, bookShelves} = this.props

    return (
      <div key={bookInfo.title} className="book-shelf-changer">
        <select onChange={(event) => this.updateBookShelf(bookInfo, event.target.value)} defaultValue={bookInfo.shelf ? bookInfo.shelf : 'none'}>
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
