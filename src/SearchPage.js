import React, {Component} from 'react';
import * as BooksAPI from './BooksAPI';
import Books from './Books';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';

class SearchPage extends Component {
    state = {
        query: '',
        searchedBookList: []
    }

    getSearchedBookList = (query) => {
        if(query) {
            BooksAPI.search(query).then((searchedBookList) => {
                this.setState({searchedBookList});
            })
        }else {
            this.setState({searchedBookList: []});
        }
        
    }

    updateQuery = (query) => {
        this.setState({query});
        this.getSearchedBookList(query);
    }


    render() {
        const {query, searchedBookList} = this.state;
        console.log(searchedBookList);
        return (
        <div className="search-books">
            <div className="search-books-bar">
                <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>
                    Close
                </button>
                <div className="search-books-input-wrapper">
                    <input 
                        type="text" 
                        placeholder="Search by title or author"
                        value={query}
                        onChange={(e) => this.updateQuery(e.target.value)}
                    />
                </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {searchedBookList.map((searchedBook) => (
                                        <li key={searchedBook.id}>
                                            <Books
                                                book={searchedBook}
                                            />
                                        </li>))}
              </ol>
            </div>
        </div>
        );
    }
}

export default SearchPage;