import React from 'react'
import * as BooksAPI from './BooksAPI';
import './App.css';
import SearchPage from './SearchPage';
import MainPage from './MainPage';

class BooksApp extends React.Component {
  state={
    bookList: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((bookList) => {
      this.setState({bookList})
    });
    
  }

  selectOption = (book, shelf) => {
    BooksAPI.update(book, shelf)

    BooksAPI.getAll().then((bookList) => {
      this.setState({bookList})
    })
  }


  render() {
    return (
      <div className="app">
        {/* <MainPage
          bookList={this.state.bookList}
          selectOption={this.selectOption}
        /> */}
        <SearchPage
          selectOption={this.selectOption}
        />
      </div>
    )
  }
}

export default BooksApp
