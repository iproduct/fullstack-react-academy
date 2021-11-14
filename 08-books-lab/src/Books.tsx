import React from 'react'
import PropTypes from 'prop-types'
import { Item } from './book-models'
import BookItem from './BookItem'

export interface BooksProps {
    books: Item[];
    onFavourite(add: boolean): any;
    // children?: ReactNode;
}

const Books: React.FC<BooksProps> = ({ books, children, ...rest }) => {
    return (
        <React.Fragment>
            <ul>
                {books.map(book => (<BookItem key={book.id} book={book} {...rest} />))}
            </ul>
            {/* <ul> */}
                {/* {React.Children.toArray(children).filter(child => (child as HTMLElement).tagName === 'div') */}
                {/* {React.Children.map(children, ch => (<li>{ch}</li>))} */}
                {/* {React.Children.toArray(children)
                    .filter(child => !(typeof child === "string") && (child as JSX.Element).type === 'div')
                    .map((child, index) => (<li key={index}>{index}: {child}: {(child as JSX.Element).type}</li>))
                } */}
            {/* </ul> */}
        </React.Fragment>
    )
}

Books.propTypes = {
    books: PropTypes.array.isRequired,
    onFavourite: PropTypes.func.isRequired
}

export default Books


