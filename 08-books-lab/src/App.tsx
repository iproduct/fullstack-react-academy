import './App.css';
import Books from './Books';
import React from 'react';
import { Item, RootObject } from './book-models';

const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q='
export interface AppState {
  books: Item[],
  filter: string
}

export default class App extends React.Component<{}, AppState> {
  state: AppState = {
    books: [],
    filter: ''
  }
  constructor(props: {}) {
    super(props);
    this.fetchBooks = this.fetchBooks.bind(this)
  }

  componentDidMount() {
    this.fetchBooks('react')
  }

  async fetchBooks(keywords: string) {
    const resp = await fetch(BASE_URL+keywords)
    const root = await resp.json() as RootObject
    this.setState({books: root.items})
  }

  render() {
  return (
    <div className="App">
      <Books books={this.state.books} />
    </div>
  );
  }
}
