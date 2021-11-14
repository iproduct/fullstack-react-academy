import React from 'react'
import PropTypes from 'prop-types'
import { Item } from './book-models'
import './BookItem.css'

interface BookItemProps {
    book: Item;
    onFavourite(add: boolean): any;
}

const BookItem: React.FC<BookItemProps> = ({ book, onFavourite }) => {
    return (
        <div className="BookItem-card card col s12 m4">
           
            <div className="card-content">
                <img className="BookItem-thumbnail activator responsive-img" src={book.volumeInfo.imageLinks.thumbnail}
                    alt="book thumbnail" />
                <span className="card-title activator grey-text text-darken-4">
                <i className="material-icons right">more_vert</i>
                    <h3>{book.volumeInfo.title}</h3>
                    <h4>{book.volumeInfo.subtitle}</h4>
                    
                </span>
                <p><a href="#">This is a link</a></p>
            </div>
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                <h3>{book.volumeInfo.title}</h3>
                <h4>{book.volumeInfo.subtitle}</h4>
                <p>{book.volumeInfo.description}</p>
            </div>
        </div>

    )
}
{/* <li>{book.volumeInfo.title} : {book.volumeInfo.subtitle} - {book.volumeInfo.authors.join(', ')}</li> */ }

BookItem.propTypes = {
    book: PropTypes.any.isRequired,
    onFavourite: PropTypes.func.isRequired
}

export default BookItem
