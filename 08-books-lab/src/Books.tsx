import React from 'react'
import PropTypes from 'prop-types'
import { Item } from './book-models'
import BookItem from './BookItem'

export interface BooksProps {
    books: Item[];
    onFavourite(add: boolean): any;
    children?: JSX.Element;
}

const Books: React.FC<BooksProps> = ({ books, children, ...rest }: BooksProps) => {
    return (
        <React.Fragment>
            <ul>
                {books.map(book => (<BookItem key={book.id} book={book} {...rest} />))}
            </ul>
            {children}
        </React.Fragment>
    )
}

Books.propTypes = {
    books: PropTypes.array.isRequired,
    onFavourite: PropTypes.func.isRequired
}

export default Books


