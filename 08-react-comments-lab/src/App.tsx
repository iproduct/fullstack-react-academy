import './App.css';
import M from "materialize-css"
import React, { useEffect, useState } from 'react';
import { CommentModel } from './comment.model';
import { CommentsList } from './CommentsList';
import { CommentInput } from './CommentInput';

const BASE_URL = 'http://localhost:9000/comments'
export interface AppState {
  comments: CommentModel[];
  editedComment: CommentModel;
}

export const App: React.FC<{}> = () => {
  const [comments, setComments] = useState<CommentModel[]>([])
  const [editedComment, setEditedComment] = useState(new CommentModel("", ""))
  const [keywords, setKeywords] = useState<string>("")

  async function fetchComments(keywords: string) {
    const resp = keywords ?
      await fetch(`${BASE_URL}?q=${keywords}`) :
      await fetch(BASE_URL);
    const items = await resp.json() as CommentModel[]
    setComments(items)
  }

  useEffect(() => {
    fetchComments('react')
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
    return () => {
      console.log(`Cleaning up previous effect`);
    }
  }, []);

  function submitComment(comment: CommentModel) {
    if (!editedComment.id) {
      setComments(comments => ([...comments, comment]));
      setEditedComment(new CommentModel("", ""));
    } else {
      setComments(comments => (comments.map(c => c.id === comment.id ? comment : c)));
      setEditedComment(new CommentModel("", ""));
    }
  }

  function editComment(comment: CommentModel) {
    setEditedComment(comment);
  }

  return (
    <React.Fragment>
      <nav className="light-blue lighten-1" role="navigation">
        <div className="nav-wrapper container"><a id="logo-container" href="#" className="brand-logo">Logo</a>
          <ul className="right hide-on-med-and-down">
            <li><a href="#name">Books</a></li>
            <li><a href="#name">Favourites</a></li>
          </ul>


          <ul id="nav-mobile" className="sidenav">
            <li><div className="user-view">
              <div className="background">
                <img src="images/office.jpg" alt="menu-image" />
              </div>
              <a href="#name"><span className="white-text name">Author: Trayan Iliev</span></a>
            </div>
            </li>
            <li><a href="#name"><i className="material-icons">book</i>Books</a></li>
            <li><a href="#!" ><i className="material-icons">cloud</i>Favourites</a></li>

            <li><a href="#!">Second Link</a></li>
            <li><div className="divider"></div></li>
            <li><a className="subheader">Subheader</a></li>
            <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
          </ul>

          <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
        </div>
      </nav>
      <div className="section no-pad-bot" id="index-banner">
        <div className="container">
          <h1 className="header center orange-text">React Books</h1>
          <div className="row center">
            <h5 className="header col s12 light">Responsive demo using React and Material Design</h5>
          </div>
          <div className="row center">
            <button id="download-button" className="btn-large waves-effect waves-light orange">
              "My Comments"
            </button>
          </div>

        </div>
      </div>

      <div className="container">
        <div className="section">
          <div className="App">
            <div className="row">
              
              <CommentsList comments={comments} onEdit={editComment} >
                <div>I'm a child in tag body</div>
                String directly in the tag body
                <p>I'm a second child in tag body</p>
                <div>I'm a third child in tag body</div>
                Second string directly in the tag body
              </CommentsList>
              <CommentInput key={editedComment.id ? editedComment.id : Date.now()}
                onSubmit={submitComment} editedComment={editedComment} />
            </div>
          </div>

          <div className="row">
            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center light-blue-text"><i className="material-icons">flash_on</i></h2>
                <h5 className="center">Speeds up development</h5>

                <p className="light">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components.Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
              </div>
            </div>

            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center light-blue-text"><i className="material-icons">group</i></h2>
                <h5 className="center">User Experience Focused</h5>

                <p className="light">By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users.Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.</p>
              </div>
            </div>

            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center light-blue-text"><i className="material-icons">settings</i></h2>
                <h5 className="center">Easy to work with</h5>

                <p className="light">We have provided detailed documentation as well as specific code examples to help new users get started.We are also always open to feedback and can answer any questions a user may have about Materialize.</p>
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

// Initialize collapsible (uncomment the lines below if you use the dropdown variation)
// var collapsibleElem = document.querySelector('.collapsible');
// var collapsibleInstance = M.Collapsible.init(collapsibleElem, options);
