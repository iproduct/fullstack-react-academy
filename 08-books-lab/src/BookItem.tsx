import React from 'react'
import PropTypes from 'prop-types'
import { Item } from './book-models'
import './BookItem.css'

interface BookItemProps {
    book: Item;
    inFavs: boolean;
    onAddFavourite(item: Item): void;
    onRemoveFavourite(item: Item): void;

}

const BookItem: React.FC<BookItemProps> = ({ book, inFavs, onAddFavourite, onRemoveFavourite }) => {
    const addFav = () => {
        onAddFavourite(book);
    }
    const removeFav = () => {
        onAddFavourite(book);
    }
    return (
        <div className="BookItem-card card col s12 m4">
           
            <div className="card-content">
                <img className="BookItem-thumbnail activator responsive-img" src={book.volumeInfo.imageLinks.thumbnail}
                    alt="book thumbnail" />
                <span className="card-title activator grey-text text-darken-4">
                <i className="material-icons right">more_vert</i>
                    <h3>{book.volumeInfo.title}</h3>
                    <h4>{book.volumeInfo.subtitle}</h4>
                    
                </span>{
                    inFavs ? (<button className="btn waves-effect waves-light" type="button" onClick={removeFav}>Remove from Favs</button>)
                    : (<button className="btn waves-effect waves-light"  type="button" onClick={addFav}>Add to Favs</button>)
                }
            
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

BookItem.propTypes = {
    book: PropTypes.any.isRequired,
    inFavs: PropTypes.any,
    onAddFavourite: PropTypes.func.isRequired,
    onRemoveFavourite: PropTypes.func.isRequired
}

export default BookItem
