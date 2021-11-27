import './App.css';
import M from "materialize-css"
import React, { useEffect, useState } from 'react';
import { CommentModel } from './comment.model';
import { CommentsList } from './CommentsList';
import { CommentInput } from './CommentInput';
import { Search } from './Search';
import { Nav } from './Nav';
import { Footer } from './Footer';
import { AppHeader } from './AppHeader';
import { CommentsApi } from './comment-api-client';


export interface AppState {
  comments: CommentModel[];
  editedComment: CommentModel;
}

export const App: React.FC<{}> = () => {
  const [comments, setComments] = useState<CommentModel[]>([])
  const [editedComment, setEditedComment] = useState(new CommentModel("", ""))
  const [keywords, setKeywords] = useState<string>("")
  const [errors, setErrors] = useState<string>("")

  async function fetchComments(keywords: string) {
    try {
      const items = await (keywords ?
        CommentsApi.findCommentFilter(keywords)
        : CommentsApi.findAllComments());
      // TODO: catch and show errror
      setComments(items)
      setErrors("")
    } catch (err: any) {
      console.log(`Error saving comment: ${err}`)
      setErrors(err.message)
    }
  }

  useEffect(() => {
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);
  }, []);

  useEffect(() => {
    fetchComments(keywords)
    return () => {
      console.log(`Cleaning up previous effect`);
    }

  }, [keywords]);

  async function submitComment(comment: CommentModel) {
    try {
      if (!editedComment.id) {
        const created = await CommentsApi.createComment(comment)
        setComments(comments => ([...comments, created]));
        setEditedComment(new CommentModel("", ""));
      } else {
        const modified = await CommentsApi.updateComment(comment)
        setComments(comments => (comments.map(c => c.id === comment.id ? modified : c)));
        setEditedComment(new CommentModel("", ""));
      }
      setErrors("")
    } catch (err: any) {
      console.log(`Error saving comment: ${err}`)
      setErrors(err.message)
    }
  }

  function editComment(comment: CommentModel) {
    setEditedComment(comment);
  }

  return (
    <React.Fragment>
      <Nav />
      <AppHeader />
      <div className="container">
        <div className="section">
          <div className="App">
            <div className="row">
              <Search onSearch={setKeywords} />
              <CommentsList comments={comments} onEdit={editComment} >
                <div>I'm a child in tag body</div>
                String directly in the tag body
                <p>I'm a second child in tag body</p>
                <div>I'm a third child in tag body</div>
                Second string directly in the tag body
              </CommentsList>
              <CommentInput key={editedComment.id ? editedComment.id : Date.now()}
                onSubmit={submitComment} editedComment={editedComment} />
              {errors && (<div className="card-panel red darken-3 white-text">{errors}</div>)}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

// Initialize collapsible (uncomment the lines below if you use the dropdown variation)
// var collapsibleElem = document.querySelector('.collapsible');
// var collapsibleInstance = M.Collapsible.init(collapsibleElem, options);
