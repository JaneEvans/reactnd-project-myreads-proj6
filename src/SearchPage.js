import React, {Component} from 'react';

class SearchPage extends Component {
    state = {
        query:''
    }

    updateQuery = (query) => {
        this.setState({query: query })
    }

    clearQuery = () => {
        this.setState({query: ''})
    }

    render() {
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
                        value={this.state.query}
                        onChange={(e) => this.updateQuery(e.target.value)}
                    />
                </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
        </div>
        );
    }
}

export default SearchPage;