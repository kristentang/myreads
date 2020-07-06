import React from 'react'
import Book from './Book.js'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import {Link, Route} from 'react-router-dom';

class BooksApp extends React.Component {
  state = {
    books: [
      {
        bookUrl: "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api",
        bookTitle: "1776",
        bookAuthor: "David McCullough",
        bookShelf: "wantToRead"
      },
      {
        bookUrl: "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api",
        bookTitle: "Ender's Game",
        bookAuthor: "Orson Scott Card",
        bookShelf: "currentlyReading"
      },
      {
        bookUrl: "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api",
        bookTitle: "The Hobbit",
        bookAuthor: "J.R.R. Tolkien",
        bookShelf: "read"
      },
      {
        bookUrl: "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api",
        bookTitle: "Harry Potter and the Sorcerer's Stone",
        bookAuthor: "J.K. Rowling",
        bookShelf: "wantToRead"
      }
    ],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  render() {
    const {books} = this.state
    const bookShelves = [
      {
        id: 'currentlyReading',
        name: 'Currently Reading',
        list: books.filter((book) => (
          book.bookShelf === 'currentlyReading' ))
      },
      {
        id: 'wantToRead',
        name: 'Want To Read',
        list: books.filter((book) => (
          book.bookShelf === 'wantToRead' ))
      },
      {
        id: 'read',
        name: 'Read',
        list: books.filter((book) => (
          book.bookShelf === 'read' ))
      },
      {
        id: 'none',
        name: 'None',
        list: books.filter((book) => (
          book.bookShelf === 'none' ))
      }
    ]
    const viewableBookShelves =  bookShelves.filter((bookShelf) => (
      bookShelf.id !== 'none' ))

    return (
      <div className="app">

        <Route path='/search' render={({history}) => (
          <div className="search-books">
            <div className="search-books-bar">
              <Link
                to='/'
                className="close-search">
              </Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        )} />

        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              {viewableBookShelves.map((shelf) => (
                <div key={shelf.id} className="bookshelf">
                  <h2 className="bookshelf-title">{shelf.name}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {shelf.list.map((book) => (
                        <li key={book.bookName}>
                          <Book
                            bookInfo={book}
                            bookShelves={bookShelves}
                          />
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              ))}
            </div>
            <div className="open-search">
              <Link
                to='/search'>
                <button>Add a book</button>
              </Link>
            </div>
          </div>
        )} />
      </div>
    )
  }
}

export default BooksApp
