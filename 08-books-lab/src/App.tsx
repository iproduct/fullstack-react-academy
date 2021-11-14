import './App.css';
import Books from './Books';
import React from 'react';
import { Item, RootObject } from './book-models';
import Search from './Search';

const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q='
export interface AppState {
  books: Item[],
  counter: number
}

export default class App extends React.Component<{}, AppState> {
  state: AppState = {
    books: [],
    counter: 0
  }
  constructor(props: {}) {
    super(props);
    this.fetchBooks = this.fetchBooks.bind(this)
  }

  // componentDidMount() {
  //   this.fetchBooks('react')
  // }

  async fetchBooks(keywords: string) {
    const resp = await fetch(BASE_URL + keywords)
    const root = await resp.json() as RootObject
    this.setState({ books: root.items })
  }

  addRemoveFavourite = (add: boolean) => {

  }

  plusOne = () => {
    this.setState(state => ({ counter: state.counter + 1 }))
  }

  render() {
    return (
      <React.Fragment>
        <nav className="light-blue lighten-1" role="navigation">
          <div className="nav-wrapper container"><a id="logo-container" href="#" className="brand-logo">Logo</a>
            <ul className="right hide-on-med-and-down">
              <li><a href="#">Navbar Link</a></li>
            </ul>

            <ul id="nav-mobile" className="sidenav">
              <li><a href="#">Navbar Link</a></li>
            </ul>
            <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          </div>
        </nav>
        <div className="section no-pad-bot" id="index-banner">
          <div className="container">
            <h1 className="header center orange-text">Starter Template</h1>
            <div className="row center">
              <h5 className="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
            </div>
            <div className="row center">
              <a href="http://materializecss.com/getting-started.html" id="download-button" className="btn-large waves-effect waves-light orange">Get Started</a>
            </div>

          </div>
        </div>


        <div className="container">
          <div className="section">
            <div className="App">
              <Search onsearch={this.fetchBooks} />
              <Books books={this.state.books} onFavourite={this.addRemoveFavourite}>
                <div>I'm a child in tag body</div>
                String directly in the tag body
                <p>I'm a second child in tag body</p>
                <div>I'm a third child in tag body</div>
                Second string directly in the tag body
              </Books>
              <div>{this.state.counter}</div>
              <button type="button" onClick={this.plusOne}>+1</button>
            </div>

            <div className="row">
              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center light-blue-text"><i className="material-icons">flash_on</i></h2>
                  <h5 className="center">Speeds up development</h5>

                  <p className="light">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
                </div>
              </div>

              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center light-blue-text"><i className="material-icons">group</i></h2>
                  <h5 className="center">User Experience Focused</h5>

                  <p className="light">By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.</p>
                </div>
              </div>

              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center light-blue-text"><i className="material-icons">settings</i></h2>
                  <h5 className="center">Easy to work with</h5>

                  <p className="light">We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        <footer className="page-footer orange">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Company Bio</h5>
                <p className="grey-text text-lighten-4">We are a team of college students working on this project like it's our full time job. Any amount would help support and continue development on this project and is greatly appreciated.</p>


              </div>
              <div className="col l3 s12">
                <h5 className="white-text">Settings</h5>
                <ul>
                  <li><a className="white-text" href="#!">Link 1</a></li>
                  <li><a className="white-text" href="#!">Link 2</a></li>
                  <li><a className="white-text" href="#!">Link 3</a></li>
                  <li><a className="white-text" href="#!">Link 4</a></li>
                </ul>
              </div>
              <div className="col l3 s12">
                <h5 className="white-text">Connect</h5>
                <ul>
                  <li><a className="white-text" href="#!">Link 1</a></li>
                  <li><a className="white-text" href="#!">Link 2</a></li>
                  <li><a className="white-text" href="#!">Link 3</a></li>
                  <li><a className="white-text" href="#!">Link 4</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
              Made by <a className="orange-text text-lighten-3" href="http://materializecss.com">Materialize</a>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}
