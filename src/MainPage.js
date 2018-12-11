import React, {Component} from 'react';
import Books from './Books';

class MainPage extends Component {
    render() {
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
                        <li>
                            <Books />
                        </li>
                        <li>
                            <Books />
                        </li>
                        </ol>
                    </div>
                    </div>
                    <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                        <li>
                            <Books />
                        </li>
                        <li>
                            <Books />
                        </li>
                        </ol>
                    </div>
                    </div>
                    <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                        <li>
                            <Books />
                        </li>
                        <li>
                            <Books />
                        </li>
                        <li>
                            <Books />
                        </li>
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