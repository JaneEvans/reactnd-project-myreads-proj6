import React, {Component} from 'react';
import * as BooksAPI from './BooksAPI';

class Books extends Component {

    render() {
        const {book, selectOption} = this.props

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }} />
                    <div className="book-shelf-changer">
                        <select onChange={(e) => {selectOption(book, e.target.value)}} defaultValue='move'>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
            </div>
        );
    }
}

export default Books;