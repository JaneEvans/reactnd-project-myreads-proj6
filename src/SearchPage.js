import React, {Component} from 'react';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';

class SearchPage extends Component {
    state = {
        query: '',
        searchedBookList: []
    }

    updateQuery = (query) => {
        this.setState({query: query })
    }

    clearQuery = () => {
        this.setState({query: ''})
    }

    render() {
        const {query} = this.state

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

              </ol>
            </div>
        </div>
        );
    }
}

export default SearchPage;