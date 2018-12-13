import React, {Component} from 'react';
import Books from './Books';
import * as BooksAPI from './BooksAPI';


class MainPage extends Component {
    selectOption = (book, shelf) => {
        BooksAPI.update(book, shelf)
    
        BooksAPI.getAll().then((bookList) => {
          this.setState({bookList})
        })
      }

    render() {
        console.log(this.props.bookList);
        return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>My Reads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Currently Reading</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {
                                this.props.bookList
                                    .filter(book => book.shelf === "currentlyReading")
                                    .map(book => (
                                        <li key={book.id}>
                                            <Books
                                                book={book}
                                                selectOption={this.props.selectOption}
                                            />
                                        </li>
                                        )
                                    )
                                }
                            </ol>
                        </div>
                    </div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Want to Read</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {
                                this.props.bookList
                                    .filter(book => book.shelf === "wantToRead")
                                    .map(book => (
                                        <li key={book.id}>
                                            <Books
                                                book={book}
                                                selectOption={this.props.selectOption}
                                            />
                                        </li>
                                        )
                                    )
                                }
                            </ol>
                        </div>
                    </div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Read</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {
                                this.props.bookList
                                    .filter(book => book.shelf === "read")
                                    .map(book => (
                                        <li key={book.id}>
                                            <Books
                                                book={book}
                                                selectOption={this.props.selectOption}
                                            />
                                        </li>
                                        )
                                    )
                                }
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div className="open-search">
                <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
        </div>
        );
    }
}

export default MainPage;